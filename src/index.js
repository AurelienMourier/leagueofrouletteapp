import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Boxes from './pages/Boxes';
import Upgrade from './pages/Upgrade';
import Wiki from './pages/Wiki';

const Root = () => 
{
  return(
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/Boxes' element={<Boxes />}/>
          <Route path='/Upgrade' element={<Upgrade />}/>
          <Route path='/Wiki' element={<Wiki />}/>
          <Route path='/AboutUs' element={<AboutUs />}/>
          <Route path='/' element={<App />}/>
        </Routes>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

reportWebVitals();
