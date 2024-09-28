import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <h1>{inputValue}</h1>
    </div>
  );
}

export default App;