
import React,{useState} from 'react';
import {MapWrapper} from "./MapWrapper"
import { List, Icon, Typography,Button } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;


export const EverythingAboutEvent = function (props) {
    const { data } = props; 

    const [visible, setVisible] = useState(false);
// console.log(data);
    return (
        <>
        <List itemLayout="horizontal"  >
            <StyledListItem>
                <List.Item.Meta
                    title={<p className="mr-bt-minus">
                        <Icon type="heart" />
                        {data.title}
                    </p>}
                />
            </StyledListItem>
            <StyledListItem>
                <List.Item.Meta
                    title={<p className="mr-bt-minus">
                        <Icon type="calendar" />
                        {data.date} at {data.time}
                    </p>}
                />
            </StyledListItem>
            {/* <StyledListItem>
                <List.Item.Meta
                    title={<p className="mr-bt-minus">
                        <Icon type="star" />
                        {data.category}
                    </p>}
                />
            </StyledListItem> */}
            <StyledListItem>
                <List.Item.Meta
                    title={<p className="mr-bt-minus">
                        <Icon type="area-chart" />
                       <span id="text"> {data.place}</span>
            <Button onClick={()=>setVisible(!visible)} type="primary" className="ui-button" > <Text strong>{visible ?"Hide":"Show"} Map</Text> </Button>
                    </p>}
                />
            </StyledListItem>
        </ List>
            {visible
                ?
                <EventMap>
                    <MapWrapper  location={data.location} className="event_map"/>
                </EventMap>
                : null
            }
        </>
    )
}
const EventMap = styled.div`
    height: 300px;
    width: 100%;
    position: relative;
`

const StyledListItem = styled(List.Item)`
    .mr-bt-minus {
        display: flex;
        aling-items: center;
    }
    .ant-list-item-meta-content {
        padding: 0 20px;,
    }
     
    .anticon{
        color: #00b5ad !important;
    }
   .ui-button{
       margin-left: 20px;
       padding: 0 12px;
       position: absolute;
       right: 25px;
   } 
   .ant-typography{
        font-size: 12px;
   }
  
`
