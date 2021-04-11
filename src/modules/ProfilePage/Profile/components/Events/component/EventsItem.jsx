import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from "antd";
const { Meta } = Card;
const EventsItem = function (props) {

    const { id, tbn, date } = props.event;
    return (
        <Col span={8}>
            <Link to={"event/" + id}>
                <Card className="card-event"
                    hoverable 
                    cover={<img style={{ height: '80px' }} alt="example" src="https://revents-2c2ee.firebaseapp.com/assets/categoryImages/travel.jpg" />}
                 > 
                    <Meta style={{ height: 80 }} title={tbn} description={date} />
                </Card>
            </Link>
        </Col>

    )
}


export default EventsItem