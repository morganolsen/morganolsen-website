import React from 'react';
import styled from 'styled-components';
import Background from './Background';

const Portfolio = () => {

    const WholePage = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    `;

    const Container = styled.div`
        width: 95%;
        max-width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: row wrap;
    `;

    const BoxTest = styled.div`
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        padding: 20px;
        margin: 10px;
        flex-grow: 1;
    `;

    const Header = styled.div`
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        padding: 20px;
        margin: 10px;
        flex-basis: 100%;
    `;
    
    const H1 = styled.h1`
        padding-top: 0;
        margin-top: 0;
    `;

    return (
        <>
            <Background />
            <WholePage>
                <Container>
                    <Header>
                        <H1>Portfolio</H1>
                        <p>Welcome to my portfolio. You may click the different projects in order to see more information about them.</p>
                    </Header>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>
                    <BoxTest>Hello world.</BoxTest>

                </Container>
            </WholePage>
        </>
    );
};

export default Portfolio;