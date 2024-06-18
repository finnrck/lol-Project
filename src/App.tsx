import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import InputTest from './components/InputTest';
import Result from './components/Result';
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