import React from 'react';
import styled from 'styled-components';
import './style/main.css'

import {Navbar} from './Header/index';
import {Footer} from './Footer';

export const Layout = props => {
    return (
        <Container>
            <Navbar/>
            <Content className="blue-1">
                {props.children}
            </Content>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`

`

const Content = styled.div`
    
`