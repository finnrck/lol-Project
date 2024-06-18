import React from "react";

interface ResultProps {
    champion: string;
}

const Result: React.FC<ResultProps> = ({ champion }) => {

    // Anbindung backend für daten
    console.log(champion);
    return (
        <div>
            <h1>Ergebnisse</h1>
            <p>Champion: {champion}</p>
        </div>
    );
}

export default Result;