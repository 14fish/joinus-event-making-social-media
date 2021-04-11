import React,{useState, useEffect} from 'react'
import {EverythingAboutEvent, Guests, ChatAboutEvent } from './components';
import { Card, Row, Col, Button, Typography, List } from "antd";
import {connect} from "react-redux";
import { getSingleEvent, joinEvent } from "../../../store/event";
import "./style.css";
import styled from 'styled-components';
import { withRouter } from "react-router";

const {Text } = Typography;


const mapStatetoProps= (store)=>{
    return {
        event:store.events.single
    }
}


export const EDetail = withRouter(connect(mapStatetoProps,{getSingleEvent,joinEvent})(props=>{
    const {getSingleEvent,event} = props;
    
    const  [joined,setJoined] =useState(props.event.joined);
   
    useEffect(()=>{
        getSingleEvent(props.match.params.id);
        setJoined(props.event.joined);
    },[props.event.joined]);

    const handleJoin=(e)=>{

        props.joinEvent(props.match.params.id);
        setJoined(!joined);
       
    }
    


   

    return (
        <div>
            <Row>
                <Col className="col-margin3 mr-b mr-top" span={14}  >
                    <Card bordered={false}
                        cover={<img style={{ height: '300px', filter: ' brightness(30%)' }} alt="example" src="https://revents-2c2ee.firebaseapp.com/assets/categoryImages/travel.jpg" />}
                    >
                        <Col span={15} className="contentEvent" >
                            <div >
                                <p> <strong>{event.title}</strong></p>
                                <p>{event.date}</p>
                                <p>Hosted by <strong>  {event.author&&event.author.name}</strong></p>
                            </div>
                        </Col>

                        <Button onClick={ handleJoin } type="primary" className={joined?"ui-button-joined":"ui-button "}  size={'large'} > <Text strong>{joined ?"Cancel ":"JOIN THIS EVENT" }</Text> </Button>

                    </Card>
                </Col>
                <StyledCol span={6} className="margin-left-btn2 mr-top guest"  > 
                  { <Guests  guests={event.guests?event.guests.slice(0,2):[]} author={event.author} />}
                </StyledCol>
            </Row>
            <Row>
                <Col className="col-margin2 mr-b" span={14}  >
                    <StyledCard className=" pd-0">

                            <EverythingAboutEvent data={event} />

                    </StyledCard>
                </Col>
            </Row>
            <Row>
                <Col className="col-margin2 mr-b" span={14}  >

                            <ChatAboutEvent />

                </Col>
            </Row>
        </div>
    )

}));

const StyledCard = styled(Card)`
&.pd-0 .ant-card-body{
    padding:0
}

    &.ant-card-bordered {
       border-radius: 10px !important;
       box-shadow:   0px 0px 7px 0px rgba(0,0,0,0.75);;
       border:none 
    }
  
`
const StyledCol = styled(Col)`


    &.margin-left-btn2{
      margin: 20px 0px 5px 60px;
    }
    .ant-card-body {
        padding:0 0 0 20px; 
    }
`
