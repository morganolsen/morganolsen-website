import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Navigation = () => {

    const Nav = styled.nav`
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: rgba(0,0,0,0.8);
        text-align: right;
        min-width: 150px;
        @media only screen and (max-width: 1450px) {
            display: none;
        }

        @media only screen and (min-width: 1450px){
            display: block;
        }
    `;

    const NavItem = styled.div`
        padding: 10px;
        color: #fff;
        text-decoration: none;
        border-top: 1px solid #222;
    `;

    const H3 = styled.h3`
        color: #fff;
        margin:0;
        padding:10px;
    `;

    return (
        <Nav>
            <H3>Navigation</H3>
            <NavLink exact to="/portfolio">
                <NavItem>
                    Projects
                </NavItem>
            </NavLink>
            <NavLink exact to="/about">
                <NavItem>
                    About
                </NavItem>
            </NavLink>
            <NavLink exact to="/">
                <NavItem>
                    Contact
                </NavItem>
            </NavLink>
        </Nav>
    );
};

export default Navigation;