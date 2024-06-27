"use client";
import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';


const MapPage = () =>{
  <APIProvider apiKey="AIzaSyA7GvN7d2G7avN-wr1Q20FS64BHVLT8ukY">
    {/* <div style={{height: "100vh"}}>
      <h1>Here is my map</h1> */}
      <Map
        style={{width: '100vw', height: '80vh'}}
        defaultCenter={{lat: 22.54992, lng: 10}}
        defaultZoom={9}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    {/* </div> */}
  </APIProvider>
}

export default MapPage;