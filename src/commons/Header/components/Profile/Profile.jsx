import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Menu,Button, Dropdown } from 'antd';
import {connect} from "react-redux";
import {logOutUser} from "../../../../store/auth"
import './Profile.css'

const menu =(logOutUser)=> (
    <Menu>
        <Menu.Item>
            <Link
                rel="noopener noreferrer"
                to="/profile"
            >
                Profile
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link
                rel="noopener noreferrer"
                to="/profile"
            >
                User Settings
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link
                rel="noopener noreferrer"
                to='/createEvent'
            >
                Create Event
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link
                rel="noopener noreferrer"
                to="/"
                onClick={logOutUser}
            >
                Sign Out
            </Link>
        </Menu.Item>
    </Menu>
);


export const  Profile = connect(null,{logOutUser})(({logOutUser})=> {


    
    return (
      <div>
        <Dropdown overlay={menu(logOutUser)}>
          <button className='btn-for-profile-picture'>
            <Avatar
              src={"https://source.unsplash.com/random/20"}
              size={45}
              className="profile-picture"
            />
          </button>
        </Dropdown>
      </div>
    );
})
