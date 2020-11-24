import React from 'react';
import portfolio from '../portfolio.json';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = (props) => {
    const portfolioArray = portfolio.slice(0).reverse();
    const portfolioItems = portfolioArray.map((item, index) => <PortfolioListItem title={item.title} desc={item.description} thumbnail={item.thumbnail} tags={item.tags} key={index} id={item.id} history={props.history} />);
    
    return (
        <>
            {portfolioItems}
        </>
    );
};

export default PortfolioList;