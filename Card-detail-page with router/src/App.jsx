// import React from 'react'
// import Products from './Screens/Products'
// import './App.css'
// import ProductDescription from './Screens/ProductDescription'
// import { Route,  Routes, useParams } from 'react-router-dom'
// // import { useParams } from 'react'
// const App = () => {
//   // const params = useParams()
//   // console.log(params);
  
//   return (
//     <>
//     {/* <Products/> */}
//    <Routes>
//       <Route path = "/" element={<Products />} />
//       <Route path = "/product" element={<Products />} />
//       <Route path = "/product/:product.id" element={<ProductDescription />} />
//       <Route path='*' element={<h1>Page Not Found</h1>} />
//    </Routes>
//    </>
//   )
// }

// export default App


// App.jsx 
import React from 'react';
import Products from './Screens/Products';
import './App.css';
import ProductDescription from './Screens/ProductDescription';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;