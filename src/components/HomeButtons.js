import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButtons = () => {

    const ButtonContainer = styled.div`
        text-align: center;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
    `;

    const LinkButton = styled(Link)`
        color: #fff;
        text-decoration: none;
        font-size: 1.6vmax;
        text-align: center;
        border: 1px solid #aaa;
        
        padding: 5px 10px;
        margin-right: 10px;
        
        align-self: center;
    `;

    return (
        <ButtonContainer>
            <LinkButton to="/portfolio">Portfolio</LinkButton> <LinkButton to="/">Resume</LinkButton> <LinkButton to="/">Contact</LinkButton>
        </ButtonContainer>
    );
};

export default HomeButtons;