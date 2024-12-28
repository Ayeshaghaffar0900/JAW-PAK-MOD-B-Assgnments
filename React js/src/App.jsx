import './App.css'

import React from 'react'
import Input from './Components/Input/Input'
import Img from './Components/Img/Img'
// import styles from  './Components/Input/Input.module.css'

const App = () => {
  // {
    // const inp = document.getElementById('name'); 
    // Submit(){
    //   inp.value = ""
    // };
    const Submit = () => {
      const inp = document.getElementById('name');
      inp.value = "";
    };
    
  // }
  const Data = () => [{
    placeholder:'Enter your Name'
  },
  {
    placeholder:'Enter your email'
  },
  {
    placeholder:'Enter your password'
  },
]
  return (
    <>
   

      <div className="container">
        <div className="form-section">
            <h2>Sign up</h2>
            <p>Already have an account? <a href="#">Login here</a></p>
            <form>
                <Input />
                <Input />
                <Input />
               

                <button type="submit" className="submit-btn" onClick={Submit}>Submit</button>
            </form>
        </div>
       <Img />
     
    </div>
    </>
  )
}


export default App
