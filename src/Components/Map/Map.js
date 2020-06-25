import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

class Map extends React.Component {
    getMarkers(){
        // ajax?
    }
    render() {
        const containerStyle = {
            height: '400px'
        }
        return (
            <>
                <LoadScript googleMapsApiKey="AIzaSyANebS8mkZVS7pk9NdhPS_HiksPKAog1ZI">
                    <GoogleMap center={this.props.center} mapContainerStyle={containerStyle} zoom={10} >
                        {/*    here be markers*/}
                    </GoogleMap>
                </LoadScript>
            </>
        )
    }
}
export default Map