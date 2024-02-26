import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import photo from '../assets/rocker-sta-RSYBi_1fhfM-unsplash.jpg'
import FlightSearchBar from '../components/flightsearch';
import Footer from "../components/Footer";

export default function Flights() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  const logged = user ? true : false
  return (
    <>
    <div className="w-full mt-16" id='herocontainer'>
      <Navbar log={logged} flights={true} hotels={false} />
      <header className=' h-screen'>
        <img src={photo} className="w-full" id="flightsimage" />
        <section id="herotext" className="text-white">
          <div className="text-5xl w-2/4 tracking-wider leading-normal">
              <h1 className="font-bold mynicefont">
              Make your travel whishlist, we'll do the rest
            </h1>
            <p>special offers to suite your plan</p>
            
          </div>
        </section>
        <FlightSearchBar/>
      </header>
      <main>

      </main>
    </div>
    <Footer />
    </>
  );
}
