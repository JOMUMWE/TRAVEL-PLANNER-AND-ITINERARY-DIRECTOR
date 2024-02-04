import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
    <Navbar />
    <Toaster position='bottom-right'/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/flights' element={<Flights />}/>
      <Route path='/hotels' element={<Hotels />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    <Footer />
    </UserContextProvider>
  )
}

export default App
