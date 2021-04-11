import React, { useEffect } from 'react'
import {ScheduledEventItem} from './components';
import "./index.css";
import {connect} from "react-redux";
import {getJoinedEvents} from "../../../store/event";


const mapStateToProps =(store)=>{
    return{
      joined:store.events.joined
    }
} 


export const EventsSchedule=connect(mapStateToProps,{getJoinedEvents})(({joined,getJoinedEvents}) => {

    useEffect(()=>{
      getJoinedEvents();
    },[]);
    console.log(joined);
    return (
      <div className="left-panel">
        <div className="panel-header">
              <h3>Joined Activities</h3>
          </div>
        <div className="left-panel-inner has-slimscroll">
          {
            joined.length&&
            joined.map(x=>{
              return (
                <ScheduledEventItem event={x} />
              )
            })
          }
         
        </div>
      </div>
    );
})
