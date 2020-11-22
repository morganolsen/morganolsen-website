import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = () => {

    const Header = styled.header`
        background-color: #111;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 50px;
        color: #efefef;
        z-index: 1;
        opacity: 90%;
    `;

    const Logo = styled.div`
        margin: 10px;
        font-weight: bold;
        font-size: 20px;
    `;

    const Container = styled.div`
        width: 100%;
        max-width: 1100px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        align-items: stretch;
    `;

    return (
        <Header>
            <Container>
                <Logo>Morgan Olsen</Logo>
                <Navigation />
            </Container>
        </Header>
    );
};

export default Header;