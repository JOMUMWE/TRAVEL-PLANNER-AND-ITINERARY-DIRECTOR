import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaPenToSquare, FaPlane, FaBed } from "react-icons/fa6";

export function Account() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <>
      <h1 className=" font-bold text-4xl mb-5">Account</h1>
      <div className="shadow rounded-xl p-5 bg-white">
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-medium text-[#112211] mb-2">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>
          <div>
            <button className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2]">
              <FaPenToSquare className="w-3 h-3 inline mr-2" />
              Change
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <div>
            <p className="font-medium text-[#112211] mb-2">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
          <div>
            <button className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2]">
              <FaPenToSquare className="w-3 h-3 inline mr-2" />
              Change
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <div>
            <p className="font-medium text-[#112211] mb-2">Password</p>
            <p className="font-semibold">*********</p>
          </div>
          <div>
            <button className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2]">
              <FaPenToSquare className="w-3 h-3 inline mr-2" />
              Change
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <div>
            <p className="font-medium text-[#112211] mb-2">Phone Number</p>
            <p className="font-semibold">{user.phoneNmber}</p>
          </div>
          <div>
            <button className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2]">
              <FaPenToSquare className="w-3 h-3 inline mr-2" />
              Change
            </button>
          </div>
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
  );
}

export function History(){
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <>
      <h1 className=" font-bold text-4xl mb-5">Tickets/Booking</h1>
      <nav className="w-full grid grid-cols-2 shadow rounded-xl mt-7 font-bold align-middle bg-white">
        <div className="flex flex-row justify-start align-middle px-4 py-5 hover:border-b-[#8DD3BB] hover:border-b-4">
          <FaPlane className="w-5 h-5 mr-2" />
          <button className="w-full text-left">Flights</button>
        </div>
        <div className="flex flex-row justify-start align-middle px-4 py-5 border-l-2 hover:border-b-[#8DD3BB] hover:border-b-4">
          <FaBed className="w-5 h-5 mr-2" />
          <button className="w-full text-left">Stays</button>
        </div>
      </nav>
    </>
  );
}
export function Payment(){
  return <div>payment</div>;
}

