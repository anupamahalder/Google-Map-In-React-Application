import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapPage from './MapPage'
import SimpleMap from './SimpleMap'
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';

const App = () =>{
  const [count, setCount] = useState(0);
  const position = {lat: 53.54, lng: 10};
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <h1 style={{backgroundColor:"deepgreen"}}>Map</h1>
      </div>
      <div style={{backgroundColor:"pink"}}>
        {/* <MapPage/> */}
        {/* <SimpleMap></SimpleMap> */}
      </div>
      <APIProvider apiKey={process.env.GOOGLE_MAP_API}>
        <div style={{height: "100vh", backgroundColor:"brown"}}>
          <h1>Here is my map</h1>
          <Map
            style={{width: '1000px', height: '80vh'}}
            defaultCenter={position}
            defaultZoom={9}
            gestureHandling={'greedy'}
            mapId={process.env.MAP_ID}
            // disableDefaultUI={true}
          >
            <AdvancedMarker position={position} onClick={() => setOpen(!open)}>
            <Pin background={"red"} borderColor={"green"} glyphColor={"blue"}></Pin>
            </AdvancedMarker>
            {
              open && <InfoWindow position={position}>
                <p style={{color:"black"}}>I am in Humbarg</p>
              </InfoWindow>
            }
          </Map>
        </div>
      </APIProvider>
    </>
  )
}

export default App
