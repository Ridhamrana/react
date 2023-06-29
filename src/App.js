import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Login from './modules/login';
import Signup from './modules/signup';

import Contact from './modules/Contact';
import Abouts from './modules/about';




function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="carts" element={<Cart/>} />
        <Route path='/about' element={<Abouts/>}/>
        <Route path='/contact' element={<Contact/>}/>
    
         
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
