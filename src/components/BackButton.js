import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BackButton = () => {

    const BackButton = styled(Link)`
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        padding: 10px;
        text-decoration: none;
    `;

    return (
        <BackButton to="/">
            {"<< Back"}
        </BackButton>
    );
};

export default BackButton;