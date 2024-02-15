import Account from '../components/accountMiniSection'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import defaultimage from '../assets/stacked-peaks-haikei.png'
import profpic from '../assets/kimson-doan-HD8KlyWRYYM-unsplash.jpg'
import { FaPen } from 'react-icons/fa6'
import { FaCloudArrowUp } from 'react-icons/fa6'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Dashboard() {
  const accountcontent = (<Account/>)
  const historycontent = (<div>history</div>)
  const paymentcontent = (<div>payment</div>)
  const [accountCard , setAccountCard] = useState(true)
  const [paymentCard , setPaymentCard] = useState(false)
  const [historyCard , setHistoryCard] = useState(false)
  const [user, setUser] = useState("");
    useEffect(()=>{
        if(!user){
            axios.get('/profile').then(({data})=>{
                setUser(data)
            })
        }
    } , [])
  const logged = user ? true : false
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
  const accountHandler = ()=>{
    setHistoryCard(false)
    setPaymentCard(false)
    setAccountCard(true)
  }
  const historyHandler = ()=>{
    setPaymentCard(false)
    setAccountCard(false)
    setHistoryCard(true)
  }
  const paymentHandler = ()=>{
    setAccountCard(false)
    setHistoryCard(false)
    setPaymentCard(true)
  }
  
        return (
          <>
          <Navbar log={logged}/>
          <section className='mx-auto '>
        <header className=' mt-24'>
          <div className=' relative h-80'>
              <img src={defaultimage} alt='cover' className='w-full h-80 rounded-xl'/>
              <button className='absolute right-0 bottom-0 px-5 py-2 rounded bg-[#8DD3BB] mb-6 mr-6 flex'><FaCloudArrowUp className='w-6 h-6 mr-3'/>Upload new cover</button>
              <div className='absolute -bottom-14 left-[45%] flex flex-row  w-28 flex-wrap'>
                <img src={profpic} alt='profile picture' className=' w-32 h-28 object-center rounded-full border-4 border-[#FF8682]'/>
                <FaPen className='p-1 w-7 h-7 z-10 absolute left-3/4 top-3/4 bg-[#FF8682] rounded-full hover:cursor-pointer'/>
              </div>
              
          </div>
          <div className= ' mt-16 text-center'>
              <h3 className='font-bold text-lg'>{user.name}</h3>
              <p className='font-light text-sm'>{user.email}</p>
          </div>
        </header>
        <nav className='w-full grid grid-cols-3 shadow rounded-xl mt-7 font-bold align-middle'>
          <button onClick={accountHandler} className='py-5 px-5 hover:border-b-[#8DD3BB] hover:border-b-4'>Account</button>
          <button onClick={historyHandler} className='py-5 px-5 border-l-2 hover:border-b-[#8DD3BB] hover:border-b-4'>History</button>
          <button onClick={paymentHandler} className='py-5 px-5 border-l-2 hover:border-b-[#8DD3BB] hover:border-b-4'>Payment methods</button>
        </nav>
        <main className='w-full mt-8'>
          {accountCard ? accountcontent : paymentCard ? paymentcontent : historycontent}
        </main>
        
        <button onClick={logoutUser}>Logout</button>
    </section>
    </>
  )
}
