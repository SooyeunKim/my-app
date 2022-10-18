import React, {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function SearchMap() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
    
    return <Map />;
}

function Map() {
    return (
        <GoogleMap
        zoom={10}
        center={{lat: 44, lng:-80}}
        mapContainerClassName="map-container"
        >
            <Marker position={{lat: 44, lng:-80}} />
        </GoogleMap>
    )
}
// class MapContainer extends Component {
//     render() {
//         return (
//             <Map
//                 google = {this.props.google}
//                 style = {{wdith:"100%", height:"100%"}}
//                 zoom = {10}
//                 initialCenter = {
//                     {
//                         lat: 43.456789,
//                         lng: -79.234567
//                     }
//                 }
//             />
//         )
//     }
// }