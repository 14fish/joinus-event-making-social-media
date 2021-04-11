import React from 'react'
import "../Who/style.css";
import { Icon, Typography, Row, Col } from "antd";
const { Title } = Typography;
export const Photos = function (props) {
    // const { photos  } = props.event;

    return (
        <div>
            <Row className='row'>
                <Col sm={16}>
                  <div> <Title level={4}><Icon type="picture" />Photos</Title></div> 
                </Col>
            </Row>
        </div>
    )
}
