import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaPenToSquare, FaPlane, FaBed, FaCirclePlus } from "react-icons/fa6";

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
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <div>
      <h1 className=" font-bold text-4xl mb-5">Payment Methods</h1>
      <div className="shadow rounded-xl p-5 bg-white h-56 flex flex-row flex-wrap">
        <button className="h-full w-1/3 border-dashed border-2 border-[#8DD3BB] rounded-xl text-center hover:bg-[#e0e2e3] hover:border-solid hover:border-[#8DD3BB] hover:text-lg">
          <FaCirclePlus
            stroke="2px"
            className="w-10 h-10 text-[#8DD3BB] mx-auto"
          />
          Add a new card
        </button>
      </div>
    </div>
  );
}

