import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";



class MapContainer extends Component {
    render() {
        console.log(this.props);
        const {latitude,longitude}=this.props.location;

        return (

            <Map classname='google-maps'
                 google={this.props.google}
                 zoom={15}

                 initialCenter={{
                     lat: latitude,
                     lng: longitude
                 }}
                 center={{
                     lat:latitude,
                     lng:longitude
                 }
                 }

            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={"Current location"}
                    position={{lat: latitude, lng: longitude}}
                />
            </Map>
        );
    }
}

export const MapWrapper =  GoogleApiWrapper({
    apiKey: 'AIzaSyDgW0zT4CACLZbvvegfJmEuxBNlAYfaujM'
})(MapContainer);
