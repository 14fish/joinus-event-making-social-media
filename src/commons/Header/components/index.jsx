import React from 'react'
import {Logo} from './Logo/Logo';
import {NavbarItems} from './NavbarItems/NavbarItems';
import {SearchForm} from './SearchForm/SearchForm';
import {Profile} from './Profile/Profile';
import './Navbar.css';
import { Row, Col } from 'antd';

export const  Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-items">
                <Logo/>
                <NavbarItems/>
            </div>
            <div className="search-profile">
                <SearchForm/>
                <Profile/>
            </div>
        </div>
    )
}
