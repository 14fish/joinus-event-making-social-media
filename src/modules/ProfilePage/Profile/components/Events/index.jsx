import React from 'react'
import EventMenu from './component/EventMenu'
import "../Who/style.css";
import { Icon, Typography, Row, Col, Tabs/* , Menu  */ } from "antd";

const { Title/* , Text  */ } = Typography;
 

export const Events = function (props) {

    return (
        <Row className='row'>
            <Col sm={16}>
                <div> <Title level={4}><Icon type="global" />Events </Title></div>
                <div>
                  <EventMenu/>
                </div>
            </Col>
        </Row>

    )
}
