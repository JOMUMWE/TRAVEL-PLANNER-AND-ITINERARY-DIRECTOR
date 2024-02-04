import { useState } from "react"
import axios from 'axios'
import { Link  } from "react-router-dom"
import photo from '../assets/kelsey-curtis--27u_GzlAFw-unsplash.jpg'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const loginUser = async (e) =>{
    e.preventDefault()
    const {email , password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })
      if (data.error){
        toast.error(data.error)
      }else{
        setData({})
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-9/12 mx-auto flex flex-row gap-14 text-[#112211] mt-10 h-4/6">
      <div>
        <h1 className="font-bold text-4xl text-black mb-4">Login</h1>
        <p className="font-light text-lg ">Login to access your account</p>
        <form className="mt-10 mb-10" onSubmit={loginUser}>
          <label className="font-semibold">Email</label>
          <input className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded" type='email' placeholder='johndoe@email.com' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
          <label className="font-semibold">Password</label>
          <input className=" focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] border w-full h-[56px] p-3 border-[#79747E] rounded" type='password'
          placeholder='***********' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
          <button className="w-full bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2]" type='submit'>Login</button>
          <p className=" font-semibold text-center mt-5">Don't have an account? <Link className="text-[#FF8682] hover:underline" to="/register">Sign up</Link></p>
        </form>
        <div className="flex flex-row items-center">
          <hr className="w-full"/>
          <p  className="px-4 text-nowrap"> Or login with </p>
          <hr className="w-full"/>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden object-scale-down"><img src={photo} alt="a hotel photo" width={435} /></div>
    </div>
  )
}
