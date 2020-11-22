import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const WordCloudItem = (props) => {

    const elementId = "wordcloud-" + props.id;
    const [lastResize, setLastResize] = useState();
    
    const Element = styled.div`
        position: fixed;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.4);
    `;

    useEffect(() => {  
        const element = document.getElementById(elementId);
        const startY = Math.ceil(Math.random() * (window.innerHeight - 100));
        const startX = Math.ceil(Math.random() * (window.innerWidth - 100));
        const startAngle = Math.ceil(Math.random() * 360);
        element.style.top = startY + 'px';
        element.style.left = startX + 'px';
        element.style.fontSize = ((Math.ceil(Math.random() * 10)) + 10) + 'px';
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        let y = startY;
        let x = startX;
        let angle = startAngle;
        const velocity = Math.ceil(Math.random() + 0.5);
        function frame(){
            function convertAngle(wallHit){
                if(angle < 90){
                    if(wallHit === "right"){
                        angle += 90;
                    }else{
                        // assume top wall
                        angle -= 90;
                    }
                }else if(angle < 180){
                    if(wallHit === "top"){
                        angle += 90;
                    }else{
                        // assume left wall
                        angle -= 90;
                    }
                }else if(angle < 270){
                    if(wallHit === "left"){
                        angle += 90;
                    }else{
                        // assume bottom wall
                        angle -= 90;
                    }
                }else{
                    if(wallHit === "bottom"){
                        angle = (angle + 90) - 360;
                    }else{
                        // assume left wall
                        angle -= 90;
                    }
                }
            }

            if((x + elementWidth) >= window.innerWidth){
                // Hit right wall. Straight right is 0.
                convertAngle("right");
                console.log("HIT RIGHT WALL!");
                console.log(`x: ${x}, window.innerWidth: ${window.innerWidth}`);
            }else if(x <= 0){
                // Hit left wall.
                convertAngle("left");
            }else if((y + elementHeight) >= window.innerHeight){
                // hit bottom wall. straight down is 270
                convertAngle("bottom");
                console.log("HIT BOTTOM WALL!");
                console.log(`y: ${y}, window.innerHeight: ${window.innerHeight}`);
            }else if(y <= 0){
                // hit top.
                convertAngle("top");
            }
            const angleInRadians = angle * Math.PI / 180;

            x += Math.cos(angleInRadians) * velocity;
            y += Math.sin(angleInRadians) * velocity;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        } 
        setInterval(frame, 5);
        
    }, [elementId, lastResize]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setLastResize(Date.now());
        });
    }, [])
    
    return (
        <Element id={elementId}>
            {props.name}
        </Element>
    );
};

export default WordCloudItem;