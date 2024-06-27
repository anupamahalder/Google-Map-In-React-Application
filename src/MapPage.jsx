"use client";
import React, { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import NearbySublocations from './NearbySublocations';

const MapPage = ({ location }) => {
  const [position, setPosition] = useState({ lat: 22.5726, lng: 88.3639 });
  const [open, setOpen] = useState(false);
  const [subLocalities, setSubLocalities] = useState([]);
  const [locationType, setLocationType] = useState('city');

  

  // // Geolocation details 
  // useEffect(() => {
  //   const getLocationDetails = async (location) => {
  //     try {
  //       const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
  //       const data = await response.json();
  //       console.log(data);
  //       handleGeocodeResponse(data);
  //     } catch (error) {
  //       console.error('Error geocoding location:', error);
  //     }
  //   };

  //   const handleGeocodeResponse = (data) => {
  //     if (data.status === 'OK') {
  //       const results = data.results;
  //       if (results && results.length > 0) {
  //         const addressComponents = results[0].address_components;
  //         const filteredLocations = filterLocations(addressComponents);
  //         setSubLocations(filteredLocations);
  //         const { lat, lng } = results[0].geometry.location;
  //         setPosition({ lat, lng });
  //       } else {
  //         console.error('No results found for the location');
  //       }
  //     } else {
  //       console.error('Geocoding request failed with status:', data.status);
  //     }
  //   };

  //   const filterLocations = (addressComponents) => {
  //     let locations = [];
  //     // Filter for state-level components
  //     const states = addressComponents.filter(component =>
  //       component.types.includes('administrative_area_level_1')
  //     );
  //     states.forEach(state => {
  //       locations.push(state.long_name);
  //     });
  //     return locations;
  //   };

  //   if (location) {
  //     console.log("Searching for location: " + location);
  //     getLocationDetails(location);
  //   }
  // }, [location]);
    
  

  useEffect(() => {
    if (location) {
      console.log("have to search: " + location);
      const geocode = async (location) => {
        try {
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`);
          const data = await response.json();
          console.log(data);
          const type = data.results[0].components._type
          setLocationType(type);
          console.log(type);
          if (data.results && data.results.length > 0) {
            const coordinates = data.results[0].geometry; // Change this line
            setPosition(coordinates);
            console.log('Updated position:', coordinates); // Log the new coordinates
          } else {
            console.error('No results found for the location');
          }
        } catch (error) {
          console.error('Error geocoding location:', error);
        }
      };

      geocode(location);
    }
  }, [location]);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", backgroundColor: "brown" }}>
        <Map
          style={{ width: '1000px', height: '100vh' }}
          defaultCenter={position}
          center={position}  // Ensure the map centers to the new position
          defaultZoom={8}
          gestureHandling={'greedy'}
          mapId={process.env.REACT_APP_MAP_ID}
          fullscreenControl = {false}
        >
          <AdvancedMarker position={position} onClick={() => setOpen(!open)}>
            <Pin background={"red"} borderColor={"green"} glyphColor={"blue"} />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={position}>
              <p style={{ color: "black" }}>Location: {location}</p>
            </InfoWindow>
          )}
        </Map>
        <div>
          {
            subLocalities && subLocalities.map(local =><li>{local.formatted}</li>)
          }
        </div>
      </div>
    </APIProvider>
  );
};

export default MapPage;