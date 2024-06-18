import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import InputTest from './components/InputTest';
import Result from './components/Result';
import './App.css';

const App: React.FC = () => {

  const [champion, setChampion] = useState<string>('');

  const handleInputSubmit = (inputValue: string) => {
    console.log("setChampion:" + inputValue)
    setChampion(inputValue);
    return <Navigate to="/result" replace/>;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/input" />} />
          <Route path="/input" element={<InputTest onInputSubmit={handleInputSubmit}/>} />
          <Route path="/result" element={<Result champion={champion}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;