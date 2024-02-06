import { Link  } from "react-router-dom"
import {FaPlane , FaBed} from 'react-icons/fa6'

export default function Navbar() {

  return (
    <nav className=" w-full pt-5 h-16 text-sm font-semibold text-[#112211] bg-[FFFFFF] shadow-md">
      <div className=" w-9/12 mx-auto flex flex-row justify-between h-full my-0">
        <div className="flex flex-nowrap h-full">
          <Link to='/flights' className=" mr-4 h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px]"><FaPlane className="w-5 h-5 mr-2"/>Find Flight</Link>
          <Link to='/hotels' className=" h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px]"><FaBed className="w-5 h-5 mr-2"/>Find Stays</Link>
        </div>
        <Link to='/'className="hover:underline">Home</Link>
        <div>
          <Link to='/login' className="p-4 mr-3 hover:bg-slate-200 px-5 py-2 rounded">Login</Link>
          <Link to='/register' className=" bg-[#112211] text-white px-5 py-2 rounded">Sigup</Link>
        </div>
      </div>
    </nav>
  )
}
