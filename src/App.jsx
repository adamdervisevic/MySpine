import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Navbar2 } from './components/Navbar2';
import {Header7} from './components/Header7';
import {Layout22} from './components/Layout22';
import {Gallery18} from './components/Gallery18';
import {Gallery20} from './components/Gallery20';
import {Testimonial19} from './components/Testimonial19';
import {Footer4} from './components/Footer4';

export default function App() {
  return (
    <div>
          <Navbar2 />
          <Header7 />
          <Layout22 />
          <Gallery18 />
          <Gallery20 /> 
          <Testimonial19 />
          <Footer4 /> 
    </div>
  );
}


