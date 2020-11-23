import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';
import Background from './Background';
import Navigation from './Navigation';
import PortfolioList from './PortfolioList';

const Portfolio = (props) => {

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
        align-items: stretch;
        justify-content: space-evenly;
        flex-flow: row wrap;

        @media only screen and (max-width: 1300px) {
            margin-top: 60px;
        }
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
            <Background url="/portfolio_bg.PNG" />
            <BackButton />
            <Navigation />
            <WholePage>
                <Container>
                    <Header>
                        <H1>Projects</H1>
                        <p>Welcome to my projects page. These are projects that I have participated in or created on my own. Click a project to get more information.</p>
                    </Header>
                    <PortfolioList history={props.history} />
                </Container>
            </WholePage>
        </>
    );
};

export default Portfolio;