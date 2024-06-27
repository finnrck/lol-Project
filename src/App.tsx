import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import InputTest from './views/InputTest';
import Result from './views/Result';
import './App.css';

const App: React.FC = () => {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/input" />} />
          <Route path="/input" element={<InputTest/>} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;