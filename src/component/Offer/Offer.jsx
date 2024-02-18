import React from 'react';
import exclusive_image from '../Assest/exclusive_image.png'
import './Offer.css';
const Offer = () => {
    return (
    <div className='offer'>
             <div className="offer-left">
                <h1>EXCLUSIVE</h1>
                 <h1>Offers For You</h1>
                 <p>ONLY ON BEST SELLERS PRODUCTS</p>
                 <button>check now</button>
             </div>

             <div className="offer-right">
          <img src={exclusive_image} alt="" />
             </div>
    </div>
    );
}


export default Offer;