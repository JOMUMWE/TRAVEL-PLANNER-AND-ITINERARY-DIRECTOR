import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
// import photo from '../assets/rocker-sta-RSYBi_1fhfM-unsplash.jpg'
import FlightSearchBar from "../components/flightsearch";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Flights() {
  const commonTopElement = (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-4">Fall into Travel</h1>
        <p className="text-[0.95rem]">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got <br />
          the travel tools to get you to your destination.
        </p>
      </div>
      <Link
        to="/"
        className="border-2 border-[#8DD3BB] px-4 py-2 text-sm rounded-md hover:bg-[#82CBB2] text-nowrap h-fit"
      >
        See All
      </Link>
    </div>
  );
  const mockdata = [
    {
      place: "Melbourne",
      description: "An amazing journey",
      price: 700,
    },
    {
      place: "Paris",
      description: "A Paris Adventure",
      price: 600,
    },
    {
      place: "London",
      description: "London Eye Adventure ",
      price: 350,
    },
    {
      place: "Columbia",
      description: "Amazing Streets",
      price: 700,
    },
  ];
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
      <div className="w-full mt-16" id="herocontainer">
        <Navbar log={logged} flights={true} hotels={false} />
        <header className="h-[80vh]">
          <section id="herotext" className="text-white h-full w-full">
            <div className="text-5xl w-2/4 tracking-wider leading-normal theeffect">
              <h1 className="font-bold mynicefont ">
                Make your travel <br />
                whishlist, we'll do
                <br /> the rest
              </h1>
              <p>special offers to suite your plan</p>
            </div>
          </section>
          <FlightSearchBar />
        </header>
      </div>
      <section className=" mt-48 w-9/12 mx-auto">
        {commonTopElement}
        <div id="cardcontainer" className=" mt-6 grid grid-cols-4 gap-5 ">
          {mockdata.map((item) => (
            <div className="rounded-xl p-6 h-[70vh] relative" key="1">
              <div className="flex flex-row items-center justify-between text-white absolute bottom-24 left-6 w-[84%]">
                <div>
                  <h1 className="text-2xl font-bold">{item.place}</h1>
                  <p className="text-[0.85rem]">{item.description}</p>
                </div>
                <p className="text-2xl self-end font-semibold">
                  $ {item.price}
                </p>
              </div>
              <button className="absolute bottom-6 left-6 bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2] w-5/6">
                Book flight
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className=" mt-10 w-9/12 mx-auto">
        {commonTopElement}
        <div
          className="grid grid-cols-4 grid-rows-2 gap-5 mt-5"
          id="lastFlightSection"
        >
          <div className=" rounded-xl col-span-2 row-span-2 bg-[#8DD3BB] p-5 flex flex-col justify-between">
            <div>
              <main className=" flex flex-row justify-between mb-3">
                <h1 className=" text-5xl font-bold mynicefont">Back Packing<br/> Sri Lanka</h1>
                <p className="bg-white rounded p-3 h-fit">From<br/><span className="font-semibold text-xl">$700</span></p>
              </main>
              <p className="text-sm">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </p>
            </div>
            <button
              className="w-full bg-white h-14 mt-8 rounded font-bold hover:bg-[#112211] hover:text-white"
              type="submit"
            >
              Book Flight
            </button>
          </div>
          <div className=" rounded-xl h-52 "></div>
          <div className=" rounded-xl h-52 "></div>
          <div className=" rounded-xl h-52 "></div>
          <div className=" rounded-xl h-52 "></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
