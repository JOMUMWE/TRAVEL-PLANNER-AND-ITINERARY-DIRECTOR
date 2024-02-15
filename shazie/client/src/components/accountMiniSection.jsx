import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Account() {
    const [user, setUser] = useState("");
    useEffect(()=>{
        if(!user){
            axios.get('/profile').then(({data})=>{
                setUser(data)
            })
        }
    } , [])
    console.log(user)
  return (
    <>
        <h1 className=' font-bold text-4xl mb-5'>Account</h1>
        <div className='shadow rounded-xl p-5'>
            <div className="flex flex-row justify-between">
                <div>
                    <p className='font-light text-[#112211] mb-2'>Name</p>
                    <p className='font-semibold'>{user.name}</p>
                </div>
                <div>
                    <button className='border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md '>Change</button>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-8">
                <div>
                    <p className='font-light text-[#112211] mb-2'>Email</p>
                    <p className='font-semibold'>{user.email}</p>
                </div>
                <div>
                    <button className='border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md '>Change</button>
                    <button className='border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md ml-3'>Change</button>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-8">
                <div>
                    <p className='font-light text-[#112211] mb-2'>Password</p>
                    <p className='font-semibold'>*********</p>
                </div>
                <div><button className='border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md '>Change</button></div>
            </div>       
            <div className="flex flex-row justify-between mt-8">
                <div>
                    <p className='font-light text-[#112211] mb-2'>Phone Number</p>
                    <p className='font-semibold'>{user.phoneNmber}</p>
                </div>
                <div><button className='border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md '>Change</button></div>
            </div>
            {/* <div className="flex flex-row justify-between mt-8">
                <div></div>
                <div><button>Change</button></div>
            </div>
            <div className="flex flex-row justify-between mt-8">
                <div></div>
                <div><button>Change</button></div>
            </div> */}
        </div>
    </>
  )
}
