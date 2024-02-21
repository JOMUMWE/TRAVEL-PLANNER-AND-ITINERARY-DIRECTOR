import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Flights from './pages/flights'
import Hotels from './pages/hotels'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/dashboard'
import Weather from './weatherApp'
import Forgot from './pages/forgotPassword'
import VerifyPage from './pages/verifyPage'


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  
  return (
    <UserContextProvider>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path='/verify' element={<VerifyPage/>} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App
