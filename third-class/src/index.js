import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/contact';
import Home from './components/home';
import Login from './components/login';
import About from './components/About';
import Register from './components/register';
import Navbar from './components/navbar';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Home />
    <About />
    <Contact />
    <Login />
    <Register />
  </>
);


