import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import Toaster from 'react-hot-toast'
import Weather from './weatherApp'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Navbar />
    <Toaster position='top-left'/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/weather' element={<Weather />} />
    </Routes>
    </>
  )
}

export default App
