
import React from 'react'
import {/*  Button, *//* Typography,  */Card, List, Avatar } from "antd";
// const { Text } = Typography;
import styled from 'styled-components';

export const Guests = function (props) {
    const { guests } = props;
    const {author} = props;
 
    return (
      <StyledCard2 title={`${guests.length + 1} Person Going`}>
        {/* ustune bir geldim cunki biri qonaqqdi */}
        <List itemLayout="horizontal">
          {author && (
            <List.Item className="hoster">
              <List.Item.Meta
                avatar={
                  <Avatar src={"https://source.unsplash.com/random/35x35"} />
                }
                title={author.name}
              />

              <div class="ribbon">Host</div>
              <div id="ribbon"></div>
            </List.Item>
          )}

          {guests
            ? guests.map(guest => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={"https://source.unsplash.com/random/35x35"}
                        alt={guest.id}
                      />
                    }
                    title={guest.name}
                  />
                </List.Item>
              ))
            : null}
        </List>
      </StyledCard2>
    );
}
const StyledCard2 = styled(Card)`
 

.ant-card-head  { 
    color:white;
    font-weight:400;
    padding: 0;
    border-bottom: none;
}
  
.ant-card-head-title { 
        text-align: center;
        padding: 11px;
        background-color: #00b5ad!important;
    }
 &.ant-card-bordered {
        border-radius: 10px !important;
        box-shadow:   0px 0px 7px 0px rgba(0,0,0,0.75);;
         border:none
     }
.ant-avatar{
    height: 80px;
    border-radius: 0;
    width: 84px;
}
.ant-list-item-meta{
    display: flex;
    align-items: center;
}
.ant-list-item-meta-title{
    font-size:19px;
    color: #4183c4;
}
.hoster{
    position:relative
}
.ribbon{ 
   font-weight: 600;
   padding: 4px 32px 4px 19px;
   position: absolute;
   background-color: #f44fff;
   top: 11px;
   right: -19px;
   color: white;
}
#ribbon { 
    right: -19px;
    top: 39px;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 22px 19px 0 0;
    border-color: #87037d transparent transparent transparent;
}
`

