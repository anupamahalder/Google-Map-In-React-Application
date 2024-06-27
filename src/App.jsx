import React, { useState } from 'react';
import './App.css';
import MapPage from './MapPage';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('kolkata');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue) {
      console.log(inputValue);
      setLocation(inputValue);
    }
  };

  const handleButtonClick = (event) => {
    if (inputValue) {
      console.log(inputValue);
      setLocation(inputValue);
    }
  };

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "deepgreen" }}>Map</h1>
      </div>
      <div style={{ backgroundColor: "white"}}>
        {/* location input div */}
        <div style={{ display: "flex", gap: "5px", padding:"10px 0px 0px 10px"}} className='inputDivStyle'>
          <div>
          <input className='inputFieldStyle'
            type="text"
            placeholder="Enter a location"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="button" className='searchBtnStyle' onClick={handleButtonClick}>Search</button>
          </div>
        </div>
        {/* map div */}
        <div>
          <MapPage location={location.toLowerCase()} />
        </div>
      </div>
    </>
  );
};

export default App;
