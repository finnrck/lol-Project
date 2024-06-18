import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const url = ""; //datenbank endpunkt einfügen
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        champion: location.state.champion
                    })
                }); 

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [location.state.champion]);

    return (
        <div>
            <h1>Ergebnisse</h1>
            <p>Champion: {location.state.champion}</p>
            <p>Backend-Daten: {JSON.stringify(data)}</p>
        </div>
    );
}

export default Result;