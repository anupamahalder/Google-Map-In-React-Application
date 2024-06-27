import React, { useState, useEffect, useRef } from 'react';

const Autocomplete = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('');
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        document.getElementById('autocomplete-input'), {
          types: ['(regions)'],
        }
      );

      autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
    } else {
      console.error("Google Maps JavaScript API library not loaded correctly");
    }
  }, []);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      setLocation(place.formatted_address);
      setInputValue(place.formatted_address);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      id="autocomplete-input"
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Enter a location"
      style={{ width: '300px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  );
};

export default Autocomplete;
