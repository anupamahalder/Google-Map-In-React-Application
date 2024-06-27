import React, { useState } from 'react';
import axios from 'axios';

const StateNamesComponent = () => {
  const [stateNames, setStateNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStateNames = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}+nearby&key=${process.env.AIzaSyA7GvN7d2G7avN-wr1Q20FS64BHVLT8ukY}`);
      
      const data = await response.data;
      console.log(data);
      const subdivisions = data[0]?.subdivisions;

      if (subdivisions) {
        const names = Object.values(subdivisions).map(subdivision => subdivision.name);
        setStateNames(names);
      } else {
        setError('No subdivisions found for India');
      }
    } catch (error) {
      setError('Failed to fetch state names');
      console.error('Error fetching state names:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch State Names of India</h2>
      <button onClick={fetchStateNames} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch State Names'}
      </button>
      {error && <p>Error: {error}</p>}
      <ul>
        {stateNames.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateNamesComponent;
