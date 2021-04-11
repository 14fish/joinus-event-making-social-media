import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
    // width: '25%',
    // height: '75%',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.37)',
    border: '1px solid rgba(0, 0, 0, 0.116)',
}


class MapContainer extends Component {
    render() {
        console.log(this.props);
        const {latitude,longitude}=this.props.location;
        
                return (
            <Map classname='google-maps' 
            google={this.props.google} 
            zoom={16}
            style={style}
            initialCenter={{
                lat: latitude?latitude:40.38,
                lng:longitude?longitude:49.85
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

export const Wrapper =  GoogleApiWrapper({
    apiKey: 'AIzaSyDgW0zT4CACLZbvvegfJmEuxBNlAYfaujM'
})(MapContainer);
