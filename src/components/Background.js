import React from 'react';
import styled from 'styled-components';

const Background = (props) => {

    const url = props.url || '/background.jpg';
    const BlackBackground = styled.div`
        background-color: #000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: -2;
    `;

    const Main = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('${url}');
        background-position: center;
        opacity: 40%;
        z-index: -1;
    `;

    return (
        <BlackBackground>
            <Main />
        </BlackBackground>
    );
};

export default Background;