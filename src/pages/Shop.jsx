import React from 'react';
import Hero from '../component/Hero/Hero';
import Popular from '../component/popular/Popular';
import Offer from '../component/Offer/Offer';
import NewCollect from '../component/NewCollect/NewCollect';
import NewsLetter from '../component/NEWLETTER/NewsLetter';

const Shop = () => {
    return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offer></Offer>
        <NewCollect></NewCollect>
        <NewsLetter></NewsLetter>
    </div>
    );
}

export default Shop;