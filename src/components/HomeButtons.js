import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButtons = () => {

    const ButtonContainer = styled.div`
        text-align: center;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        border-top: 1px solid #fff;
        padding-top: 10px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    `;

    const LinkButton = styled(Link)`
        color: #fff;
        text-decoration: none;
        font-size: 2vmax;
        text-align: center;
        
        
        padding: 5px 10px;
        margin-right: 10px;
        
        align-self: center;
    `;

    return (
        <ButtonContainer>
            <LinkButton to="/portfolio">Projects</LinkButton> <LinkButton to="/about">About</LinkButton> <LinkButton to="/contact">Contact</LinkButton>
        </ButtonContainer>
    );
};

export default HomeButtons;