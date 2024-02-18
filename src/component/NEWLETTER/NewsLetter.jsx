import React from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    return(
        <div className='newsletter' >
          <h1>Get Excluive Offers ON Your Email</h1>
          <p>Subcribe to our newsletter and stay update</p>
          <div >
             <input type="email" placeholder='your Email id' />
             <button>Subscribe</button>
          </div>
        </div>
    )

       
}
export default NewsLetter;