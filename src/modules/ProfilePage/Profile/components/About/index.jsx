import React from 'react'
import "../Who/style.css";
import { Icon, Typography, Row, Col } from "antd";
import moment from "moment";
const { Title,Text } = Typography;

export const About = function (props) {
    const { name , city, since,interests,regTime  } = props;

    return (
        <div>
            <Row className='row'>
                <Col sm={16}>
                  <div> <Title level={4}><Icon type="smile" />About Display Name</Title></div>
                  <div class="about-margin">I am a: <Text strong> {name}</Text> </div> 
                  <div class="about-margin">Originally from: <Text strong>  {city}</Text> </div> 
                  <div class="about-margin">Member Since:<Text strong> {regTime} </Text> </div> 
                </Col>
                <Col sm={8}>
                <div>  <Title level={4}><Icon type="heart" /> Interests</Title></div>
                <div>{interests}</div>
                </Col>
            </Row>
        </div>
    )
}
