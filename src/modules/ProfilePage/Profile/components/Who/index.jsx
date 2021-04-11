import React from 'react'
import "./style.css";
import { Card, Avatar,Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

export const Who = function (props) {
    const { name, age, city,image,surname } = props;
    console.log(age);
    return (
        <div>
            <Meta id="big-avatar"
                avatar={<Avatar size="large"
                    src={"https://source.unsplash.com/random/64"} />}
                     title={
                    <div>
                       <Title level={3}> {name}  {surname} </Title>
                    </div>
                }
                description={
                    <div>
                    <Title level={4}> 
                    {(`${age} ` ? `${age} years` : `unknown age`) +" "+ (`${city}` ? `${city}` : `unknown city`)}
                    
                     </Title>
                 </div>
                }
            />
        </div>
    )
}
