import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Lodging from './pages/Lodging';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer'
import style from "./utils/style/style.module.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<Error />} />
        <Route path="/lodging/:idLodging" element={<Lodging />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);