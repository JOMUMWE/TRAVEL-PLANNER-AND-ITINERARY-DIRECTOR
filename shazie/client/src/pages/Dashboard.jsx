import {useContext} from 'react'
import {UserContext} from '../../context/userContext'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function Dashboard() {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const logoutUser = (e) =>{
    e.preventDefault()
    try {
            axios.get('/logout').then(()=>{
                navigate('/login')})
    } catch (error) {
      console.log(error)
    }
  }
  const check = (user) => {
    if (!user){
      navigate('/login')
    }
  }
  return (
    <div>
      {useEffect(() => check(user) )}
        <h1>Dashboard</h1>
        {!!user && (<h2>hi {user.name}</h2>) }
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
