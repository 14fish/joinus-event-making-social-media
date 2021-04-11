import React, { useEffect, useState } from 'react';
import { Map as GoogleMap, Marker, GoogleApiWrapper,InfoWindow } from "google-maps-react";
// import { useHistory } from "react-router-dom";
import { getNearBy } from "../../../../store/event";
import { connect } from "react-redux";


const mapStateToProps = (store) => {
    return {
        events: store.events.nearBy
    }
}



const Map = (props) => {


    const { events, getNearBy } = props;
    const [location, setLocation] = useState({latitude:40.40,longitude:49.80});
    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition((loc) => {
            getNearBy({latitude:loc.coords.latitude,longitude:loc.coords.longitude})
        });
        

    }, []);

   
    const [showingInfoWindow, setShowingInfoWindow] = useState(true);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const onMarkerClick = (props, marker, e) => {  
        setShowingInfoWindow(true)
        setActiveMarker(marker);
        setSelectedPlace(props);
        // console.log(props)  
    };
     const   onMapClicked = (props) => {
        if (showingInfoWindow) { 
            setShowingInfoWindow(false)
            setActiveMarker(null);
        }
        // alert(showingInfoWindow)
      };
    return (

        <GoogleMap classname='google-maps' 
            google={props.google}
            zoom={13}
            onClick={onMapClicked}
            initialCenter={{
                lat: events.length ? events[0].location.latitude : 40.43,
                lng: events.length ? events[0].location.longitude : 49.83
            }}
            center={{
                lat: events.length ? events[0].location.latitude : 40.43,
                lng: events.length ? events[0].location.longitude : 49.83
            }
            }

        >
            {events ?
                events.map(event => {
                    return (
                        <Marker
                            key={event.id}
                            id={event.id}
                            label={event.id.toString()}
                            name={event.name}
                            date={event.date} 
                            text={event.about} 
                            onClick={onMarkerClick} 
                            position={{ lat: event.location.latitude, lng: event.location.longitude }}
                        />)
                }) :
                null
            }
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}>
            <div> 
              <h3>{"Event:"}<a href={`event/${selectedPlace.id}`}> <span  style={{color:"#42a5f5",fontWeight:"bold",fontSize:"20px",fontStyle:"italic"}}>{selectedPlace.name}</span></a></h3>
              <h3>{"Date: "}<span style={{color:"#42a5f5"}}>{selectedPlace.date}</span></h3>
              <h3>{"About the event: "}<span style={{color:"#42a5f5"}}>{selectedPlace.text}</span></h3>
            </div>
        </InfoWindow>


        </GoogleMap>
    );
}


export const MapWrapper = GoogleApiWrapper({
    apiKey: 'AIzaSyDgW0zT4CACLZbvvegfJmEuxBNlAYfaujM'
})(connect(mapStateToProps, { getNearBy })(Map));
