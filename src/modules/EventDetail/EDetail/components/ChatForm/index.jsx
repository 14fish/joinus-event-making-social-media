import React from "react";
import {/*  Button,  */List,/* , Avatar,  */Input, Form } from "antd";
import styled from "styled-components";
const { TextArea } = Input;

export const ChatForm = function(props) {
  // const { btn } = props;
  
  return (
    <div>
      <StyledForm /* onSubmit={this.handleSubmit} */>
        <Form.Item>
          <List.Item>
            <TextArea 
              // onChange={this.onChange}
              placeholder="Share your ideas for this event...." 
              autoSize={{ minRows: 3, maxRows: 4 }}
            />
          </List.Item>
          <List.Item className="align-end">  <button className="ant-btn ui-button ant-btn-primary">Reply</button></List.Item>

         
        </Form.Item>
       
      </StyledForm>
    </div>
  );
};
const StyledForm = styled(Form)`
  .ant-form-item {
    margin: 0;
  }
`;
