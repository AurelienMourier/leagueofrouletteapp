import React from 'react';
import ReactDOM from 'react-dom';
import './pages/style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Boxes from './pages/Boxes';
import MyAccount from './pages/MyAccount';
import Wiki from './pages/Wiki';
import Register from './pages/Register';
import Footer from './Footer';

import ProtectedRoute from "./ProtectedRoute";

const Root = () => 
{
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Container>
          <Box className="main">
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/boxes' element={<Boxes />}/>
              <Route path='/wiki' element={<Wiki />}/>
              <Route path='/about-us' element={<AboutUs />}/>
              <Route path='/myaccount' element={ 
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }/> 
              <Route path='/' element={<App />}/>
            </Routes>
          </Box>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

reportWebVitals();


/** Faire une protected route
 *  <Route path='/home' element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }/> 
*/