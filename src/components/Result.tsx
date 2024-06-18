import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
    const location = useLocation();

    // Anbindung backend für daten
    
    return (
        <div>
            <h1>Ergebnisse</h1>
            <p>Champion: {location.state.champion}</p>
        </div>
    );
}

export default Result;