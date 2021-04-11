import React from 'react'
import EventsItem from './EventsItem'
import { Tabs ,Row} from "antd";
import styled from 'styled-components'; 
const { TabPane } = Tabs;
const eventItem =
    [
        {
            id: 1,
            tbn: "first",
            date: " 18th Dec 2019 2:00 AM"
        },
        {
            id: 2,
            tbn: "second",
            date: " 18th Dec 2019 2:00 AM"
        },
        {
            id: 3,
            tbn: "third",
            date: " 18th Dec 2019 2:00 AM"
        }
    ]
const EventMenu = function (props) {
    // const { id, name } = props.event
    return (

        <Tabs defaultActiveKey="1"  >
            <TabPane tab="All Events" key="1">
                <div className="mr-t">
                    <Row gutter={16} className="flex-direction-column">
                        {eventItem.map(event =>
                            <EventsItem key={event.id} event={event} />
                        )}
                    </Row >
                </div>
            </TabPane>
            <TabPane tab="Past Events" key="2">

            </TabPane>
            <TabPane tab="Future Events" key="3">
                <div className="mr-t">
                    <StyledRow gutter={16}>
                        {eventItem.map(event =>
                            <EventsItem key={event.id} event={event} />
                        )}
                    </StyledRow >
                </div>
            </TabPane>
            <TabPane tab="Hoisting" key="4">

            </TabPane>

        </Tabs>

)
}
export default EventMenu
 const StyledRow = styled(Row)`
@media only screen and (min-width: 320px) and (max-width:767px) {
    &.ant-row{
        display: flex !important; 
        flex-direction: column !important;
    }
}

`