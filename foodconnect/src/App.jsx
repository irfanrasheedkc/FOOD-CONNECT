import { Button } from '@material-tailwind/react'
import './App.css'
import SignupOrganization from "./Authentication/SignupOrganization";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import HomePage from "./Components/HomePage";
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signuporg" element={<SignupOrganization />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Button>FoodConnect</Button>
    </div>
  )
}

export default App
