import React from 'react'
import "./index.css";
import moment from "moment";
import {Link} from "react-router-dom";
export const ScheduledEventItem = function(props) {
    const date = moment(props.event.date,"DD/MM/YYYY").format('MMMM Do');
    const time =  moment(props.event.time,"HH:mm").format('h:mm');
    console.log(props.event.date);
    return (
        
        <div>
           
            <Link to={"event/"+props.event.id} >
                <a className="scroll-link">
                    <span className="date-block">
                        <i class="fa fa-calendar"></i>
                        <span className="month">{date}</span>
                    </span>
                    <span className="meta-block">
                        <span className="time">{time}</span>
                    </span>
                </a>
            </Link>
        </div>
    )
}
