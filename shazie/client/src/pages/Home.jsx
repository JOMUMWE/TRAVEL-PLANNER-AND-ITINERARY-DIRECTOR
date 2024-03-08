
import Navbar from "../components/Navbar";
import FlightSearchBar from "../components/flightsearch";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./home.css";
import Footer from "../components/Footer";

export default function Home() {
  
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
      <Navbar log={logged} home={true} />
      <body>
        <div className="h_1"></div>
        <FlightSearchBar />
        <div className="h_city">
          <div className="h_city_top">
            <div>
              <h3>Plan your Perfect Trip</h3>
              <p>
                Search Flights & Places Hire to our most popular destination
              </p>
            </div>
            <button id="h_city_button">See More places</button>
          </div>
          <div className="h_city_grid">
            <div className="h_city_grid_elements">
              <div  id="comp_1"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_2"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_3"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_4"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_5"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id ="comp_6"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div id="comp_7"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements">
              <div  id="comp_8"></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="h_city_grid_elements" id="comp_9">
              <div>
                <p></p>
                <p></p>
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
              <button className="h_booking_content_button">
                {" "}
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
              <button className="h_booking_content_button">Show Hotels</button>
            </div>
          </div>
        </div>
        <div className="h_review">
          <div className="h_review_top">
            <div>
              <h3>Reviews</h3>
              <p>What people say about our facilities</p>
            </div>
            <button id="h_review_button">See All</button>
          </div>
          <div className="h_review_section">
            <div className="h_review_section_elements"></div>
            <div className="h_review_section_elements"></div>
            <div className="h_review_section_elements"></div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}
