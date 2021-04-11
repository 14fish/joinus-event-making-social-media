import React from 'react'
import './NavbarItems.css'
import { Menu, Dropdown } from 'antd';
import {Link} from 'react-router-dom';

const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
            >
                Movie
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
            >
                Music festival
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
            >
                Museum
            </a>
        </Menu.Item>
    </Menu>
);


export function NavbarItems() {
    return (
        <div>
            <div className="navbar-items">
                <Link className='item-container' to='/createEvent'  ><i className="fas item fa-plus"></i></Link>
                <Link className='item-container' to="/nearBy"><i className="fas item fa-map-marked-alt"></i></Link>
                <Dropdown overlay={menu}><a className='item-container' href=""><i className="fas item fa-bars"></i></a></Dropdown>
            </div>
        </div>
    )
}
