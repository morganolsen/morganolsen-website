import React from 'react';
import styled from 'styled-components';
import portfolios from '../portfolio.json';
import BackButton from './BackButton';
import Background from './Background';
import Navigation from './Navigation';

const PortfolioItem = (props) => {
    console.log(props);
    const id = props.match.params.id;
    const portfolio = portfolios[id];

    if(!portfolio){
        props.history.push('/portfolio');
        return(<></>);
    }

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
        align-content: stretch;
        justify-content: space-evenly;
        @media only screen and (max-width: 1300px) {
            margin-top: 60px;
        }
    `;

    const Content = styled.div`
        background-color: rgba(0,0,0,0.8);
        padding: 10px;
        margin-bottom: 10px;
        flex-grow: 2;
        max-width: 700px;
        &:first-child{
            margin-right: 10px;
        }
    `;

    const SideBar = styled(Content)`
        flex-grow: 1;
    `;

    const H1 = styled.h1`
        padding: 0;
        margin: 0;
    `;

    const Image = styled.img`
        margin-bottom: 10px;
        width: 100%;
    `;

    let pictures = "";
    if(portfolio.pictures){
        pictures = portfolio.pictures.map((picture, index) => <Image src={"/" + picture} key={index} />);
    }

    return (
        <>
            <Background url="/portfolio_bg.PNG" />
            <BackButton />
            <Navigation />
            <WholePage>
                <Container>
                    <Content>
                        <H1>{portfolio.title}</H1>
                        <p>{portfolio.description}</p>
                    </Content>
                    <SideBar>
                        <H1>Technologies used</H1>
                        <p>{ portfolio.tags ? portfolio.tags.join(", ") : null }</p>
                        
                        { portfolio.github_link || portfolio.live_link ? <H1>Links</H1> : null }
                        { portfolio.github_link ? <><a href={portfolio.live_link} target="_blank">Live Demo</a><br /></> : null }
                        { portfolio.github_link ? <><a href={portfolio.github_link} target="_blank">GitHub</a><br /></> : null }
                    </SideBar>
                    {pictures}
                </Container>
            </WholePage>
        </>
    );
};

export default PortfolioItem;

