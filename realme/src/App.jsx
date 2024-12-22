// import { React } from 'react'

// import './App.css'
import Nav from "../src/components/Nav";
import Slider from "../src/components/Slider";
import Smartphone from "../src/components/Smartphone";
import Footer from "./components/footer";
import { Data } from "../src/productdata";

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <div>
        <h3 className="mt-4 mb-4 ms-5">Smart Phones</h3>
        {Data.map((e, i) => {
          return (
            <Smartphone
              key={i}
              mobImg={e.image}
              mobTitle={e.name}
              mobDesc={e.description}
              mobPrice={e.price}
            />
          );
        })}
      </div>
      {/* <Smartphone /> */}
      <Footer />
    </>
  );
}

export default App;
