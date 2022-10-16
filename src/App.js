import './App.css';
import './index.css';
import React, {useMemo} from 'react';
import ReactDOM  from 'react-dom';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {GoogleMap, withScriptjs, withGoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


import Navbar from './components/navbar';
import Start from "./pages/Start";
import SearchList from "./pages/SearchList";
import SearchMap from "./pages/SearchMap";
import WaitList from "./pages/WaitList";
import Submit from "./pages/Submit";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

let clinicsData = [
  {
    "name": "North York General Hospital",
    "lat": 43.7688,
    "lng": 79.3627,
  },
  {
    "name": "Toronto Western Hospital",
    "lat": 43.6534,
    "lng": 79.4055,
  },
  {
    "name": "Grand River Hospital",
    "lat": 43.4562,
    "lng": 80.5120,
  }
]

// function Map() {
//   return (
//     <GoogleMap
//       zoom={10}
//       center={{
//         lat: 43.456789,
//         lng: -79.234567 
//       }}
//       mayContainerClassName="map-container"
//     >
//       {clinicsData.map(clinic => (
//         <Marker
//           // key = {clinic.name}
//           position = {{
//             lat: clinic.lat,
//             lng: clinic.lng,
//           }}
//         />
//       ))}
//       </GoogleMap>
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function App() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/searchlist" element={<SearchList/>} />
        <script
        src="https://maps.google.com/maps/api/js?sensor=false"
        type="text/javascript"></script>
        <Route path="/searchmap" element={<SearchMap/>}/>
          {/* <script>
            Map();
          </script>
          <Map/>
          //googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
          loadingElement={<div style={{height: "100%"}}/>}
          containerElement={<div style={{height: "100%"}}/>}
          mapElement={<div style={{height: "100%"}}/>}
           */}
        <Route path="/waitlist" element={<WaitList/>} />
        <Route path="submit" element={<Submit/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
          }
render(<App />);