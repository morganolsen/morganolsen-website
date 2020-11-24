import React from 'react';
import styled from 'styled-components';

const PortfolioListItem = (props) => {
    

    let background = "rgb(0,0,0)";
    if(props.thumbnail){
        background = `url('/projects/${props.id}/${props.thumbnail}')`;
    }

    let tags = "";
    if(props.tags){
        tags = props.tags.join(", ");
    }

    const ItemBox = styled.div`
        background: ${background};
        color: #fff;
        padding: 0px;
        margin: 10px;
        max-width: 530px;
        flex-grow: 1;
        opacity: 90%;
        background-position: center;
        background-size: cover;
        min-height: 400px;
        position: relative;
        cursor: pointer;
    `;

    const H2 = styled.h2`
        padding-top: 0;
        margin: 0;
        background-color: rgba(0,0,0,0.6);
        padding: 10px;
        text-align: center;
    `;

    const Tags = styled.div`
        padding: 10px;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
        width: 100%;
    `;

    function clickItem(){
        props.history.push('/portfolio/' + props.id);
    }

    return (
        <ItemBox onClick={clickItem}>
            <H2>{props.title}</H2>
            <Tags>{tags}</Tags>
        </ItemBox>
    );
};

export default PortfolioListItem;