import React from 'react';
import logo from '../logo.svg';

interface InputTestProps {
  onInputSubmit: (inputValue: string) => void;
}

const InputTest: React.FC<InputTestProps> = ({ onInputSubmit }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = event.currentTarget.value;
      console.log('Eingegebener Wert:', inputValue);
      onInputSubmit(inputValue);
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
