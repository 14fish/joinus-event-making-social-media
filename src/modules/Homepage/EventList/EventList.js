import React, { useEffect } from 'react';
import {EventListItem} from './EventListItem/EventListItem';
import { connect } from 'react-redux';
import {getEvents} from '../../../store/event';
import './eventlist.css'


  
const mapStateToProps= (store)=>{
    return {
      events:store.events.events   
    }
  }

export  const EventList = connect(mapStateToProps,{getEvents})(props=> {

   
    useEffect(()=>{
      props.getEvents();
    },[]);
   
        return (
            <div className='event-container'>
                {props.events.map(event => 
                <EventListItem key={event.id}  event= {event} />
                )}
            </div>
        )
    
})
