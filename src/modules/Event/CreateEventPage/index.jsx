import React, {useState} from 'react';
import {Wrapper,CreateEventForm, WeatherPlugin} from "./components";
import './components/style/formContainerStyling.css';
import styled from "styled-components";


export const EventPage =(props)=> {

    const [location,setLocation]=useState({});
    const [city,setCity]= useState("");
    
    return (
        <div className="create-form">
            <div className="form-container">
                <CreateEventForm setCity={setCity}  location={location}  setLocation={setLocation} />
            </div>
            <StyledWrapper  className="form-container">
                <Wrapper location={location} />
             </StyledWrapper>
            {/* <div className="form-container">
                <WeatherPlugin city={city}/>
            </div> */}
        </div>
    )
}
const StyledWrapper = styled.div`
    width: 50%;
    height: 690px; 
    position: relative;
`;