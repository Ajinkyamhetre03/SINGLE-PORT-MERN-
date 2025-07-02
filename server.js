import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve frontend static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend", "dist")));

const sampleData = [
    { id: 1, name: "Ajinkya", role: "Developer" },
    { id: 2, name: "John", role: "Designer" },
    { id: 3, name: "Sara", role: "Manager" }
];

// API route
app.get("/api/data", (req, res) => {
    res.json(sampleData);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
