import { Route, Routes, useParams } from 'react-router-dom'
// import './App.css'
// import Dashboard from './Screens/Dashboard'
import Mainpage from './Screens/Mainpage'
import GitHub from './Screens/Github/GitHub'
import UsersPage from './Screens/UsersPage'
import ProductsPage from './Screens/ProductsPage'
import ProductDetail from './Screens/productDetail'
function App() {
  // const params = useParams();
  //   console.log(params)
  return (
    <>
   {/* <Dashboard/>    */}
    <Routes>
    {/* <Route path="/" element={<Dashboard />} /> */}
    <Route index element={<Mainpage/>}/>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/users" element={<UsersPage />} />
        <Route path="/github-finder" element={<GitHub />} />
    </Routes>
    </>
  )
}

export default App
