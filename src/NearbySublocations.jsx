import React, { useState, useEffect } from 'react';

const NearbySublocations = ({ location }) => {
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNearbyLocations = async (location) => {
      setLoading(true);
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}+nearby&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        handleGeocodeResponse(data);
      } catch (error) {
        setError('Failed to fetch nearby locations');
        console.error('Error fetching nearby locations:', error);
      } finally {
        setLoading(false);
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
          setError('No results found for the location');
          console.error('No results found for the location');
        }
      } else {
        setError(`Geocoding request failed with status: ${data.status}`);
        console.error(`Geocoding request failed with status: ${data.status}`);
      }
    };

    if (location) {
      getNearbyLocations(location);
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
