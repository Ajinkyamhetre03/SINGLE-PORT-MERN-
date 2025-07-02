import React, { useEffect, useState } from "react";

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/data") // Don't include localhost:PORT if you're serving from the same server
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            <h2>Team Members</h2>
            <ul>
                {data.map((person) => (
                    <li key={person.id}>
                        {person.name} - {person.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataList;
