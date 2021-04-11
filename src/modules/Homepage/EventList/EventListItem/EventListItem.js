import React from "react";
import "./index.css";
import { Avatar, Button, Row } from "antd";
import {Link} from "react-router-dom";
import {setUpdated} from "../../../../store/event";
import {connect} from "react-redux";



export const EventListItem =  connect(null,{setUpdated})((props)=>{


  const handleUpdate= (e)=>{
    props.setUpdated(props.event);
   
  }
 
    const {title,hostedBy,place,time,description,image ,id,creatorId} = props.event;
    console.log(creatorId);
    return (
      <div className="event-item" id={id} >
        <div className="event-inner-wrap">
          <div className="event-title">
            <div className="event-host">
              <Avatar className='event-host-avatar'
                size={60}
                src="https://source.unsplash.com/random/24"
              />
              <div className="event-host-details">
                <div className="event-host-title">{title}</div>
                {/* <div className="event-host-name"><h3>Hosted by <a href="#">{hostedBy}</a></h3></div> */}
              </div>

              <div className="event-edit">
                {JSON.parse(localStorage.getItem('user')).id==creatorId?
                <Link to={`updateEvent/`}>
                  <Button className="event-update" onClick={handleUpdate} >
                    <i className="fas fa-pen"></i>
                  </Button>
                </Link>
                :null
                }
               
              </div>
            </div>
          </div>
          <div className="event-subtitle">
            <h3>
              <i className="fas fa-map-marker-alt"></i>  {place} | {time}</h3>
          </div>
          <div className="event-content">
            <div className="event-description content">
              <p>{description}</p>
            </div>
          </div>
          <div className="event-participant">
          
            <Link  to={`event/${id}`}>
              <Button type="primary" className="event-view-more">
                View More
              </Button>
            </Link>

            
           
            <div className="participant-group">
              <Avatar className='event-joiner-avatar'
                size={40}
                src="https://source.unsplash.com/random/25"
              />

              <Avatar className='event-joiner-avatar'
                size={40}
                src="https://source.unsplash.com/random/26"
              />

              <Avatar className='event-joiner-avatar'
                size={40}
                src="https://source.unsplash.com/random/27"
              />

              <Avatar className='event-joiner-avatar'
                size={40}
                src="https://source.unsplash.com/random/28"
              />
            </div>
            <div className="participant-text">
              <p>
                <a href="#">You</a>,
                <a href="#"> David </a>
              </p>
              <p> and 23 people </p>

            </div>
          </div>
        </div>
      </div>


    );
  })

