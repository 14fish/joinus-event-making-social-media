import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';
import moment from "moment";

export const RecentActivityItem = function(props) {
  const {user,activity,id,date,time} = props.act;

  return (
    <div className="activity-block" id={id}>
      <img src={"https://randomuser.me/api/portraits/" + user.image} alt="" />
      <div className="activity-meta">
        <p>
          <Link to={`profile/${id}`} className='profile'>{user.name} </Link>
          <Link to={`event/${id}`} className='activity-description' >{activity} </Link>
        </p>
        <span className='moment-ago-activity' >{moment(date+" " +time,`DD/MM/YYYY h:mm`).fromNow()}</span>
      </div>
    </div>
  );
}





/// h - hours  mm-minutes DD - day , MM-month , YYYY-year

// export const RecentActivityItem= function (props) {
//     const {user,activity,id,date,time} = props.act;
   
   

//   return ( 
//       <List.Item className="recent-activity--list">
//       <List.Item.Meta className="recent--activity"
//           avatar={<Avatar  size="large"
//           src={"https://randomuser.me/api/portraits/"+user.image} />}
//           title={
//               <div> 
//                 <Link to={"user/"+id}> {user.name}  { activity }</Link>
//               </div>
//               }
//           description={moment(date+" " +time,`DD/MM/YYYY h:mm`).fromNow()}
//         />
//       </List.Item>
//   )
// }





