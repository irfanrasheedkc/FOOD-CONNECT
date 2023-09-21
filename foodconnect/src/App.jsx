import './App.css'
import SignupOrganization from "./Authentication/SignupOrganization";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import HomePage from "./Components/HomePage";
import LandingPage from './Components/LandingPage';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CheckoutForm from './Components/CheckoutForm';

const socket = io('http:192.168.29.250:5000/notify');
function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signuporg" element={<SignupOrganization />} />
          <Route path="/login" element={<Login />} />
          <Route path='/checkout' element={<CheckoutForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
