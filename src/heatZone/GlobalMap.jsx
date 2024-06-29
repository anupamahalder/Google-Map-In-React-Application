"use client";
import React, { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import map from './westbengalMap';

const GlobalMap = ({ location }) => {
  const [position, setPosition] = useState({ lat: 22.5726, lng: 88.3639 });
  const [open, setOpen] = useState(false);
  const [subLocalities, setSubLocalities] = useState([]);
  const [locationType, setLocationType] = useState('city');
  const [weatherData, setWeatherData] = useState([]);
  const [mainLocationWeather, setMainLocationWeather] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      if (location) {
        try {
          // Fetch geocode data for main location
          const geocodeResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`);
          const geocodeData = await geocodeResponse.json();
          console.log('Geocode data:', geocodeData);
          
          if (geocodeData.results && geocodeData.results.length > 0) {
            const type = geocodeData.results[0].components._type;
            setLocationType(type);
            const coordinates = geocodeData.results[0].geometry;
            setPosition(coordinates);
            console.log('Updated position:', coordinates);

            // Fetch weather data for main location
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
            const weatherData = await weatherResponse.json();
            setMainLocationWeather(weatherData);
            console.log('Main location weather data:', weatherData);

            // Fetch sub-localities
            if (map[location]) {
              const subLocs = map[location];
              setSubLocalities(subLocs);
              console.log('Sub-localities:', subLocs);

              // Fetch weather data for sub-localities using coordinates
              const weatherPromises = subLocs.map(async (subLocation) => {
                try {
                  const subLocationCoords = map[subLocation.toLowerCase()];
                  let lat, lng;

                  if (subLocationCoords) {
                    // Use coordinates from the map if available
                    lat = subLocationCoords.lat;
                    lng = subLocationCoords.lng;
                  } else {
                    // Fetch coordinates if not available in the map
                    const subLocationResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${subLocation}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`);
                    const subLocationData = await subLocationResponse.json();
                    if (subLocationData.results && subLocationData.results.length > 0) {
                      lat = subLocationData.results[0].geometry.lat;
                      lng = subLocationData.results[0].geometry.lng;
                    } else {
                      throw new Error(`No results found for sub-location ${subLocation}`);
                    }
                  }

                  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
                  const weatherData = await weatherResponse.json();
                  return { subLocation, weather: weatherData, coordinates: { lat, lng } };
                } catch (error) {
                  console.error(`Error fetching weather data for ${subLocation}:`, error);
                  return { subLocation, weather: null, coordinates: null };
                }
              });

              const weatherResults = await Promise.all(weatherPromises);
              setWeatherData(weatherResults);
              console.log('Weather data:', weatherResults);
            } else {
              console.log('No sub-localities found for the location');
            }
          } else {
            console.log('No results found for the location');
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      }
    };

    fetchLocationData();
  }, [location]);

  const hotSubLocations = weatherData.filter(({ weather }) => weather && weather.main && weather.main.temp > 30);
  const isMainLocationHot = mainLocationWeather && mainLocationWeather.main && mainLocationWeather.main.temp > 30;

  return (
    <div style={{ display: "flex" }} className='mapDivStyle'>
      {/* map container */}
      <div>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <div style={{ height: "100vh", backgroundColor: "green" }}>
            <Map
              style={{ width: '1000px', height: '100vh' }}
              defaultCenter={position}
              center={position}
              defaultZoom={8}
              gestureHandling={'greedy'}
              mapId={process.env.REACT_APP_MAP_ID}
              fullscreenControl={false}
            >
              <AdvancedMarker position={position} onClick={() => setOpen(!open)}>
                <Pin background={isMainLocationHot ? "orange" : "red"} borderColor={"green"} glyphColor={"blue"} glyph={isMainLocationHot ? "🔥" : null} />
              </AdvancedMarker>
              {open && (
                <InfoWindow position={position}>
                  <p style={{ color: "black" }}>Location: {location}</p>
                </InfoWindow>
              )}
              {hotSubLocations.map(({ coordinates }, index) => (
                coordinates && (
                  <AdvancedMarker key={index} position={coordinates}>
                    <Pin background={"orange"} borderColor={"red"} glyph="🔥" />
                  </AdvancedMarker>
                )
              ))}
            </Map>
          </div>
        </APIProvider>
      </div>
      {/* sub location container */}
      <div className='subLocationDivStyle'>
        <h3>Heat ️‍🔥 Areas for Plantation</h3>
        <hr />
        <div>
          {subLocalities.length > 0 ? (
            <div style={{textAlign:"left", paddingLeft:"20px"}}>
              <h4>Showing Results for location: {location.toUpperCase()}</h4>
              {hotSubLocations.length > 0 ? (
                hotSubLocations.map(({ subLocation, weather }, index) => (
                  <p key={index}><b>{subLocation}</b>: {weather.main.temp}°C ️‍🔥</p>
                ))
              ) : isMainLocationHot ? (
                <p>{location}: {mainLocationWeather.main.temp}°C</p>
              ) : (
                <p>No sub-locations have crossed the temperature threshold of 30°C.</p>
              )}
            </div>
          ) : isMainLocationHot ? (
            <div>
              <h4>Showing Results for location: {location}</h4>
              <p>{location}: {mainLocationWeather.main.temp}°C</p>
            </div>
          ) : (
            <p>No sub-localities found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
