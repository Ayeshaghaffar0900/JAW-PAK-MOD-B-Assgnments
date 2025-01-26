// import React from 'react'
// // import productData from './data'
// import {productData} from './data'
// import { Link } from 'react-router-dom'
// // import { data } from 'react-router-dom'
// const Products = () => {
//   return (
//     <>
//       <h1>Products Page</h1>
//       <div className="container">
//         {productData.map((data,i) =>{
//            return(
//             <div className="card" key={i} >
//             <img src={data.image} alt={data.name} />
//             <h1>{data.name}</h1>
//             <p className="price">Price: {data.price}</p>
//             <p>{data.description.slice(0,500)+'.....'}<Link to={`/products/${data.id}`}>Show more description</Link></p>
//             <p><button>Add to Cart</button></p>
//             </div>
//            ) 
//         })}
//       </div>
//     </>
//   )
// }

// export default Products





// Products.jsx

import React from 'react';
import { productData } from './data';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <div className="container">
        {productData.map((data, i) => {
          return (
            <div className="card" key={i}>
              <img src={data.image} alt={data.name} />
              <h1>{data.name}</h1>
              <p className="price">Price: Rs{data.price}</p>
              <p>{data.description.slice(0, 100) + '.....'}
                <Link to={`/product/${data.id}`}>Show more description</Link>
              </p>
              <p><button>Add to Cart</button></p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

