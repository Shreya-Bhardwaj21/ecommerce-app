import React, { lazy, Suspense } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Layout/Home";
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import ProductsList from "./Components/Products/ProductsList";
import ProductDetails from "./Components/Products/ProductDetails";
import Cart from './Components/Products/Cart';


export default function App() {


  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='*' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/productsList' element={<ProductsList/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<ProductDetails/>} />  
    </Routes>
    </BrowserRouter>
    </>
  );
}


