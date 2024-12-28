
import React from 'react';
// import './Cards.css';

const Cards = ({ image, title, proDesc, proPrice ,category,proRate,proCount}) => {
  return (
    <>
    <div className='product-card'>
      <img src={image} alt={title} />
      <div className='content'>
        <div className='title'>{title}</div>
        <div className='description'>{proDesc}</div>
        <div className='price'>Price:  ${proPrice}</div>
        <div><a href="#" className='category'>Category:{category}</a></div>
        <div className='addtocart'><button>Add to cart</button></div>
        <div className='raterev'>
          <p>Rating:{proRate}</p>
          <p>Reviews:{proCount}</p>
        </div>
        
      </div>
    </div>

    </>
  );
};

export default Cards;
