import React from 'react';
import styled from 'styled-components';
import WordCloudItem from './WordCloudItem';

const WordCloud = () => {
    
    const words = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python', 'Django', 'Express', 'Sequelize', 'React Native', 'PHP', 'const isDeveloper = true', 'for(let i = 0; i < 256; i++)', 'throw new Error("It aint working bro")', 'SQL', 'Backend', 'Frontend'];

    const Container = styled.div`
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `;

    const wordCloud = words.map((word, index) => <WordCloudItem name={word} key={index} id={index} />);
    
    return (
        <Container>
            {wordCloud}
        </Container>
    );
};

export default WordCloud;