
import Navbar from "../components/Navbar";
import FlightSearchBar from "../components/flightsearch";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./flightlandingpage.css";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa6";
export default function Home() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  const logged = user ? true : false;

  return (
    <>
      <Navbar log={logged} flightlandinggpage={true}/>
      <body>
        <FlightSearchBar flightlandinggpage={true}/>
        <div className="flpdisplay w-[75.5%] mx-auto my-20">
          <div className="filter">
            <nav>Filters
              <ul>Price</ul>
              <ul>Departure Time</ul>
              <ul>Rating</ul>
              <ul>Airlines</ul>
              <ul>Trips</ul>
            </nav>
          </div>
          <div className="flightsdisplay">
            <div className="morefilter"></div>
            <div className="number"></div>
            <div className="flights">
              <div className="airlinelogo"></div>
              <div className="reviws"></div>
              <div className="flihtsperairline">
                <input type="checkbox" name="" id="" />
                <div className="flighttime">
                  <p></p>
                  <p></p>
                </div>
                <div className="flighttype"></div>
                <div className="flightduration">
                  <p>{}</p>
                  <p>{}</p>
                </div>
              </div>
              <div className="buttons flex flex-row justify-between" >
              <FaHeart  className="w-[10%] border-1 border-[#8DD3BB]"/>
              <button className="px-7 py-3 w-[80%] bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB] flex flex-row justify-between items-center text-center text-nowrap text-sm">
              View deals
              </button>
              </div>
            </div>
            <button className="px-7 py-3 w-[100%] bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB] flex flex-row justify-between items-center text-center text-nowrap text-sm">
            Show More Results
            </button>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}
