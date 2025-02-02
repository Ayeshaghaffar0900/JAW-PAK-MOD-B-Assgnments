import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from './data';
import './productDetail.css';
const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find(item => item.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.name} />
      <p className="price">Price: Rs{product.price}</p>
      <p>{product.description}</p>
        <p><button>Add to Cart</button></p>
        <p className='rating'>Rating: {product.rating.rate}</p>
    </div>

    <button onClick={() => window.history.back()}>Go Back to Products</button>
    </>
  );
};

export default ProductDetail;
