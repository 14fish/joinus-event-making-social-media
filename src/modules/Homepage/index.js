import React from 'react'
import {EventList} from './EventList/EventList';
import {RecentActivity} from './RecentActivity';
import {EventsSchedule} from './EventsSchedule';
import { Row , Col } from 'antd';
import "./index.css";
export const Homepage= function () {
    return (
      <div>
        <Row type="flex" className="push-bottom">
          <Col xs={0} sm={0} md={0} lg={4}>
            <EventsSchedule className="Events-Schedule-Homepage" />
          </Col>
          <Col xs={24} sm={24} md={18} lg={14}>
            <EventList className="EventList-Homepage" />
          </Col>
          <Col xs={0} sm={0} md={6} lg={6}>
            <RecentActivity className="Recent-Activity-Homepage" />
          </Col>
        </Row>
      </div>
    );
}
