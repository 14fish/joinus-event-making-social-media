import React, { useEffect } from 'react';
import {RecentActivityItem} from './components/';
import { Card } from "antd";
import {getActivities} from "../../../store/activity";
import {connect} from "react-redux";
import './ActivityListStyle.css';
 


const mapStateToProps= (store)=>{
  return {
    activities:store.activities.activities   
  }
}

 export const RecentActivity = connect(mapStateToProps,{getActivities}) ((props) => {
    
  useEffect(()=>{

      props.getActivities();
  },[])

  const {activities} = props;
  
  
    return (
        // <div id="recent">
        //   <Card title="Recent Activity">
        //       { activities.map(act => 
        //             <RecentActivityItem key={act.id}  act={act} />
        //         )}
        //   </Card>
           
        // </div>

        <div className='right-panel'>
          <div className="panel-header">
              <h3>Events Activity</h3>
          </div>
          <div className="panel-body has-slimscroll">
                  { activities.map(act => 
                      <RecentActivityItem key={act.id}  act={act} />
                  )}
          </div>
    </div>
    )
})
