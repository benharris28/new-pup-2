import React from 'react'
import config from '../../config';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const markers = {

}
class Map extends React.Component {
    
    
    getMarkers(){
        // ajax?
        // reverse geocode address from vet page input (geocoder is in server app)
        // Lookup closest points to that location using googles haversine sql formula
        // return results and map through them

    }
    render() {
        console.log(config.API_KEY)
        const latlng = [
            {
                vetId: 1,
                lat: 43.6654063,
                lng: -79.4585032
            },
            {
                vetId: 2,
                lat: 43.6665239,
                lng: -79.4430537
            },

    ]
        const containerStyle = {
            height: '400px'
        }
        return (
            <>
                <LoadScript googleMapsApiKey={config.API_KEY}>
                    <GoogleMap center={this.props.center} mapContainerStyle={containerStyle} zoom={10} >
                        {latlng.map((marker, index) => 
                           
                            <Marker 
                                key={marker.vetId}
                                position={{ lat: marker.lat, lng: marker.lng }}/>
                        )}
                    </GoogleMap>
                </LoadScript>
            </>
        )
    }
}
export default Map