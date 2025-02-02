// import React from 'react'
// import { Link } from 'react-router-dom'
// import { productData } from './data'

// const ProductsPage = () => {
//     const Data = productData
//     console.log(Data);
    
     

    
    
//   return (
//     <div>
//       <h1>Products</h1>
//        <div>
//         {Data.map((item,index) => {
//             return(
//                 <div key={index} className='card' style={{width:'300px',height:'300px',border:'1px solid black',margin:'10px',padding:'10px'}} >
//                     <img src={item.image} alt="" style={{width:'100%', height:'100px', objectFit:'contain'}} />
//                     <h4>{item.title}</h4>
//                     <p>{item.price}</p>
//                     <button><Link to={`/product/${item.id}`}>View Details</Link></button>

//                 </div>
//             )
//         })}
//        </div>
//       <button><Link to={'/'}>Back to Home</Link></button>

//     </div>

//   )
// }

// export default ProductsPage





import React from 'react';
import { productData } from './data';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    
  return (
    <>
      <h1>Products Page</h1>
      <button><Link to={'/'}>Back to Dashboard</Link></button>
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

export default ProductsPage;