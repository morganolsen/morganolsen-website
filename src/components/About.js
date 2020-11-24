import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from './BackButton';
import Background from './Background';
import Navigation from './Navigation';

const About = () => {

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

    const Content = styled.div`
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        padding: 20px;
        flex-basis: 100%;
    `;

    const H1 = styled.h1`
        padding-top: 0;
        margin-top: 0;
    `;

    return (
        <>
            <Background url="/about_bg.jpg" />
            <BackButton />
            <Navigation />
            <WholePage>
                <Container>
                    <Content>
                        <H1>About</H1>
                        <p>My name is Morgan Olsen, I am a 24 year old fullstack developer situated in Oslo, Norway.</p>
                        <p>I have been interested in programming since I was about 12 years old, and I have experience in multiple languages and environments, such as PHP, JavaScript, Python, C and more.</p>
                        <p>In 2020 I completed my TechDegree in Fullstack JavaScript which is also my go-to language for anything I create these days, primarily using Node.js for the server-side and React for the client-side.</p>
                        <p>This particular website is written in React with no server backend, the source code is available on my <a href="https://github.com/morganolsen" target="_blank">GitHub</a> if you are interested.</p>
                        <p>If you'd like to know more, feel free to contact me through the <Link to="/contact">contact form</Link> or by e-mail to <a href="mailto:business@morganolsen.no">business@morganolsen.no</a>.</p>
                    </Content>
                </Container>
            </WholePage>
        </>
    );
};

export default About;