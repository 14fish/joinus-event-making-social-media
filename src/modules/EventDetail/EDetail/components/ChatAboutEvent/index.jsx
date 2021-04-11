import React, { useState, useEffect } from "react";
import { Card, List, Avatar } from "antd";
import { ChatForm } from "../ChatForm";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCommments } from "../../../../../store/comment";
// const { TextArea } = Input;
// const { Text } = Typography;

const mapStateToProps = store => {
  return {
    comments: store.comment.comments
  };
};
export const ChatAboutEvent = connect(mapStateToProps, { getCommments })(
  props => {
    const { comments } = props;
    useEffect(() => {
      props.getCommments({eventId:2});
    }, []);
    console.log(comments);

    const [reply, setReply] = useState(false);

    return (
      <StyledCard2 title="Chat about this event">
        <List itemLayout="horizontal">
          <List.Item style={{ display: "block" }}>
            {comments
              ? comments.map(comment => {
                  return (
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://www.ama-pdx.org/assets/Profile-Picture-square.jpg" />
                      }
                      title={<a href="https://ant.design">Jessica</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    
                  );
                })
              : null}
          </List.Item>
        </List>
        <ChatForm />
      </StyledCard2>
    );
  }
);
const StyledListItem = styled(List.Item)`
  &.ant-list-item {
    display: block;
  }
`;
const StyledCard2 = styled(Card)`
 .reply{
    color: #00aca4;
    font-weight:600 ;
    cursor:pointer
          }
.ant-form-item{
    margin:0
}
.ant-card-head  {
                color: white;
            padding: 0;
            border-bottom: none;
        }
& .ant-card-body{
                padding: 0 !important
        }
.ant-card-head-title {
                text - align: center;
            padding: 12px;
            background-color: #00b5ad!important;
        }
    &.ant-card-bordered {
                border - radius: 10px !important;
            box-shadow:   0px 0px 7px 0px rgba(0,0,0,0.75);;
             border:none
         }
     .ant-list-item{
                padding: 12px
        }
  .ant-avatar{
                height: 35px;
            border-radius: 4px;
            width: 40px;
        }
.ant-list-item-meta-title{
                color: black;
            margin:0
            display:inline
        }
.ant-list-item-meta-title p{
                font - size: 11px;
            color:rgba(0,0,0,.4);;
            display:inline;
            font-weight:400;
            padding-left:4px
        }
.ant-list-item-meta-description{
                color: rgba(0,0,0,.87);
            font-size:13px
        }
        `;

/*
.ant-list-item-meta{
        display: flex;
    align-items: center;
}
 */
