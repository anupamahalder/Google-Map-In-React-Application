import React, { useEffect, useState } from 'react';

const NearbySublocations = ({ latitude, longitude }) => {
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    const getNearbyLocations = async (lat, lng) => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        console.log(data);
        handleGeocodeResponse(data);
      } catch (error) {
        console.error('Error fetching nearby locations:', error);
      }
    };

    const handleGeocodeResponse = (data) => {
      if (data.status === 'OK') {
        const results = data.results;
        if (results && results.length > 0) {
          const sublocations = results.map(result => ({
            address: result.formatted_address,
            placeId: result.place_id
          }));
          setNearbyLocations(sublocations);
        } else {
          console.error('No results found for the location');
        }
      } else {
        console.error('Geocoding request failed with status:', data.status);
      }
    };

    if (latitude && longitude) {
      getNearbyLocations(latitude, longitude);
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Nearby Sublocations</h2>
      <ul>
        {nearbyLocations.map((location, index) => (
          <li key={index}>
            <a href={`https://www.google.com/maps/place/?q=place_id:${location.placeId}`} target="_blank" rel="noopener noreferrer">
              {location.address}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbySublocations;
