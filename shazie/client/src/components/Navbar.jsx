import { Link } from "react-router-dom";
import { FaPlane, FaBed } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

function Navbar(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [drop, setDrop] = useState(false);
  const logoutUser = (e) => {
    e.preventDefault();
    try {
      axios.get("/logout").then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <nav
      className={
        props.home
          ? " w-full pt-5 h-16 text-sm font-semibold text-[#112211] shadow-md fixed top-0 left-0 right-0 z-50"
          : " w-full pt-5 h-16 text-sm font-semibold text-[#112211] shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
      }
    >
      <div className=" w-9/12 mx-auto flex flex-row justify-between h-full my-0">
        <div className="flex flex-nowrap h-full">
          <Link
            to="/flights"
            className={
              props.flights
                ? " mr-4 h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px] border-b-[#8DD3BB] border-b-[3px]"
                : "mr-4 h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px]"
            }
          >
            <FaPlane className="w-5 h-5 mr-2" />
            Find Flight
          </Link>
          <Link
            to="/hotels"
            className={
              props.hotels
                ? " h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px] border-b-[#8DD3BB] border-b-[3px]"
                : "h-full flex flex-nowrap hover:border-b-[#8DD3BB] hover:border-b-[3px]"
            }
          >
            <FaBed className="w-5 h-5 mr-2" />
            Find Stays
          </Link>
        </div>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {!props.log ? (
          <div>
            <Link
              to="/login"
              className="p-4 mr-3 hover:bg-slate-200 px-5 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" bg-[#112211] text-white px-5 py-2 rounded"
            >
              Sigup
            </Link>
          </div>
        ) : (
          <div
            className="flex flex-row py-2 px-2 bg-slate-200 rounded-xl hover:bg-[#c5c7c9ea] hover:cursor-pointer mb-4"
            onClick={() => {
              setDrop((drop) => !drop);
            }}
          >
            <div className="w-8 h-8 bg-slate-400 rounded-full">pic</div>
            <h1 className="border-l-2">{user.name}</h1>
          </div>
        )}
      </div>
      {drop && (
        <div
          id="dropdownmenu"
          className="flex flex-col bg-[#ffffffd8] rounded-xl p-5 shadow-xl text-sm"
        >
          <div className="flex flex-row py-2">
            <div className="w-8 h-8 bg-slate-400 rounded-full">pic</div>
            <h1 className="border-l-2">{user.name}</h1>
          </div>
          <hr className="text-[#c5c7c9ea]" />
          <Link
            to="/dashboard"
            className="mt-5 mb-5 flex flex-row hover:underline"
          >
            <FaUser className="w-5 h-5 mr-3" /> My Account
          </Link>
          <button
            onClick={logoutUser}
            className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2]"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
