import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';
import Faqs from './components/Faqs';
import Historical from './components/historical';
import EN from './components/EN';
import Contact from './components/contact';
import Partner from './components/partner';
import Redisplay from './components/redisplay';
import Embeddable from './components/embeddable';
import Free from './components/free';
import Api from './components/api';
import Integration from './components/integration';
import Data from './components/data';
import Corporate from './components/corporate';
import Developer from './components/developer';
import Individual from './components/individual';
import Logo from './components/logo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/EN' element={<EN />} />
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/embeddable' element={<Embeddable />} />
          <Route path='/historical' element={<Historical />} />
          <Route path='/free' element={<Free/>} />
          <Route path='/api' element={<Api/>} />
          <Route path='/integration' element={<Integration/>} />
          <Route path='/data' element={<Data/>} />
          <Route path='/developer' element={<Developer/>} />
          <Route path='/redisplay' element={<Redisplay/>} />
          <Route path='/corporate' element={<Corporate/>} />
          <Route path='/individual' element={<Individual/>} />
          <Route path='/partner' element={<Partner/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/logo' element={<Logo/>} />
 
        </Route>
      </Routes>
    </BrowserRouter>
   
    
  </StrictMode>,
)
