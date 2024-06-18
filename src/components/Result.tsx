import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const url = "http://localhost:6969/test"; //datenbank endpunkt einfügen
    
    useEffect(() => {
            try {
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        champion: location.state.champion
                    })
                }).then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data)
                    setData(data)
                }); 
            } catch (error) {
                console.error('Fetch error:', error);
            }
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