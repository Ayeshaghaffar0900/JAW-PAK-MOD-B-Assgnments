












import React from 'react';
import { Data } from './data';
import Cards from './Components/Cards/Cards';
import './App.css';

const App = () => {
  return (
    <>
    <h1 className='heading'>Products </h1>

    <div className='container'>
      {Data.map((item) => (
        <Cards
          key={item.id}
          category={item.category}
          image={item.image}
          title={item.title}
          proDesc={item.description}
          proPrice={item.price}
          proRate={item.rating.rate}
          proCount={item.rating.count}

        />
      ))}
    </div>
    </>
  );
};

export default App;
