import React from 'react';
import styled from 'styled-components';
import WordCloud from './WordCloud';
import Background from './Background';
import HomeButtons from './HomeButtons';

const Home = () => {

    const Container = styled.div`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,0.5);
        padding: 50px;
    `;

    const Heading = styled.h1`
        color: #efefef;
        text-align: center;
        font-size: 4vmax;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
    `;

    const SubHeading = styled(Heading)`
        border-top: 3px solid #fff;
        padding-top: 10px;
        font-size: 2.75vmax;
        font-weight: 500;
    `;

    const Paragraph = styled.p`
        color: #efefef;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
    `;

    return (
        <>
            <Background />
            <WordCloud />
            <Container>
                <Heading>Morgan Olsen</Heading>
                <SubHeading>Fullstack Developer</SubHeading>
                <Paragraph>Available for freelance projects and long-term commitments.</Paragraph>
                <HomeButtons />
            </Container> 
        </>
    );
};

export default Home;