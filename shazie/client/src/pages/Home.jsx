import { FaPlane, FaBed } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import FlightSearchBar from "../components/flightsearch";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./home.css";
import Footer from "../components/Footer";
import HotelSearchBar from "../components/HotelSearch";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const[FlightsCard, setFlightsCard] = useState(true)
  const [StaysCard, setStaysCard] = useState(false)
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
      <Navbar log={logged} home={true} />
      <>
        <div className="h_1"></div>
        <div className="h_nav px-5">
          <nav className="w-[30%] grid grid-cols-2 mt-7 font-bold align-middle bg-white rounded-xl">
            <button
              onClick={() => {
                setFlightsCard(!FlightsCard);
                setStaysCard(false);
              }}
              className={
                FlightsCard
                  ? "py-5 px-5 hover:border-b-[#8DD3BB] hover:border-b-4 flex flex-row items-center selected"
                  : "py-5 px-5 hover:border-b-[#8DD3BB] hover:border-b-4 flex flex-row items-center"
              }
            >
              <FaPlane className="w-5 h-5 mr-2" /> <p>Flights</p>
            </button>
            <button
              onClick={() => {
                setStaysCard(!StaysCard);
                setFlightsCard(false);
              }}
              className={
                StaysCard
                  ? "py-5 px-5 hover:border-b-[#8DD3BB] hover:border-b-4 border-l-2 flex flex-row items-center selected"
                  : "py-5 px-5 hover:border-b-[#8DD3BB] hover:border-b-4 border-l-2 flex flex-row items-center"
              }
            >
              <FaBed className="w-5 h-5 mr-2" />
              <p>Stays</p>
            </button>
          </nav>
          {StaysCard ? (
            <HotelSearchBar home={true} />
          ) : (
            <FlightSearchBar home={true} />
          )}
        </div>
        <div className="h_city">
          <div className="h_city_top">
            <div>
              <h3>Plan your Perfect Trip</h3>
              <p>
                Search Flights & Places Hire to our most popular destination
              </p>
            </div>
            <button
              id="h_city_button"
              onClick={() => {
                navigate("/flights");
              }}
            >
              See More places
            </button>
          </div>
          <div className="h_city_grid">
            <div className="h_city_grid_elements">
              <div id="comp_1"></div>
              <div className="common">
                <p className="toopp">Istanabul , Turkey</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_2"></div>
              <div className="common">
                <p className="toopp">Sydney , Australia</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_3"></div>
              <div className="common">
                <p className="toopp">Baku , Azerbaija</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_4"></div>
              <div className="common">
                <p className="toopp">Male , Maldives</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_5"></div>
              <div className="common">
                <p className="toopp">Paris , France</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_6"></div>
              <div className="common">
                <p className="toopp">New York , US</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_7"></div>
              <div className="common">
                <p className="toopp">London , UK</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_8"></div>
              <div className="common">
                <p className="toopp">Tokyo , Japan</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_9"></div>
              <div className="common">
                <p className="toopp">Dubai , UAE</p>
                <p className="bottttom">Flights . Hotels . Resorts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h_booking">
          <div className="h_booking_flights">
            <div className="h_booking_flights_content">
              <h3>Flights</h3>
              <p>
                Search Flights & Places Hire to our most popular destinations
              </p>
              <button
                className="h_booking_content_button hover:ring-2 hover:ring-[#112211]"
                onClick={() => {
                  navigate("/flights");
                }}
              >
                Show Flights
              </button>
            </div>
          </div>
          <div className="h_booking_hotels">
            <div className="h_booking_hotels_content">
              <h3>Hotels</h3>
              <p>
                Search Hotels & Places Hire to our most popular destinstions
              </p>
              <button
                className="h_booking_content_button hover:ring-2 hover:ring-[#112211]"
                onClick={() => {
                  navigate("/hotels");
                }}
              >
                Show Hotels
              </button>
            </div>
          </div>
        </div>
        <div className="h_review">
          <div className="h_review_top">
            <div>
              <h3>Reviews</h3>
              <p>What people say about our facilities</p>
            </div>
            <button id="h_city_button">See All</button>
          </div>
          <div className="h_review_section">
            <div className="h_review_section_elements" id="hr1"></div>
            <div className="h_review_section_elements" id="hr2"></div>
            <div className="h_review_section_elements" id="hr3"></div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
