import React from 'react';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';


const InputTest = () => {

  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = event.currentTarget.value;
      console.log('Eingegebener Wert:', inputValue);
      navigate("/result", {
        state: {
          champion: inputValue
        }
      })
    }
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Eingabe zum Champion Vergleich</p>
      <input
        id="inputField"
        className="champion-button"
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="champion"
      />
    </header>
  );
};

export default InputTest;
