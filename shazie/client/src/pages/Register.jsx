import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import photo from '../assets/kelsey-curtis--27u_GzlAFw-unsplash.jpg'
import { Link  } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const [data , setData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  })

const registerUser = async (e) => {
  e.preventDefault();
  const {name, email, password, phoneNumber} = data
  try{

    const {data} = await axios.post('/register',{name , email, password, phoneNumber})
    if(data.error){
      toast.error(data.error)
    }else{
      setData({})
      toast.success('Login Successful. Welcome!')
      navigate('/login')
    }
  }catch(error){
    console.log(error)
  }
}

  return (
    <section className="w-9/12 mx-auto grid grid-cols-2 gap-14 text-[#112211] h-4/6 mt-24">
      <div className=" rounded-lg overflow-hidden object-contain"><img src={photo} alt="a hotel photo" /></div>
      <div>
        <h1 className="font-bold text-4xl text-black mb-2">Signup</h1>
        <p className="font-light text-base ">Let's get you all set up so that you can access your personal account</p>
        <form onSubmit={registerUser} className="mt-10 mb-10">
          <label>Name</label>
          <input type='text' className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded" placeholder='John Doe' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Email</label>
              <input className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded" type='email' placeholder='johndoe@email.com' value={data.email} onChange={(e) => setData({...data, email:e.target.value})} required/>
            </div>
            <div>
              <label>Phone number</label>
              <input className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded" type='text' placeholder='+1 555-565-499' value={data.phoneNumber} onChange={(e) => setData({...data, phoneNumber:e.target.value})} required/>
            </div>
          </div>
          <label>Password</label>
          <input className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded" type='password' placeholder='***********' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
          <button className="w-full bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2]" type="submit">Create account</button>
        <p className=" font-semibold text-center mt-5">Already have an account? <Link className="text-[#FF8682] hover:underline" to="/login">Login</Link></p>
        </form>
        <div className="flex flex-row items-center">
          <hr className="w-full"/>
          <p  className="px-4 text-nowrap">OR</p>
          <hr className="w-full"/>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </section>
  )
}
