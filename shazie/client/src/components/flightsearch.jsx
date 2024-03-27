import { FaArrowRightArrowLeft, FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import data from "../utilities/locations.json";
import axios from "axios";

export default function FlightSearchBar() {
  const date = new Date();
  const month =
    String(date.getUTCMonth() + 1).length == 1
      ? "0" + String(date.getUTCMonth() + 1)
      : String(date.getUTCMonth() + 1);
  const today =
    String(date.getUTCFullYear()) +
    "-" +
    month +
    "-" +
    String(date.getUTCDate());
  const [flightTo, setFlightTo] = useState("SYD");
  const [flightFrom, setFlightFrom] = useState("LON");
  const [flightData, setFlightData] = useState({
    from: flightFrom,
    to: flightTo,
  });
  const [floatCard, setFloatcard] = useState(false);
  const [floatDateCard, setFloatDateCard] = useState(false);
  const [floatClassCard, setClassCard] = useState(false);
  const [Depature, setDepature] = useState("");
  const [Return, setReturn] = useState("");
  const [Class, setClass] = useState("E");
  const [AdultNumber, setAdultNumber] = useState(1)

  const handleDepClick = () => {
    if (floatCard) {
      setFloatcard(!floatCard);
    }
    if(floatClassCard){
      setClassCard(!floatClassCard)
    }
    setFloatDateCard(!floatDateCard);
  };
  const handleClassClick = () => {
    if (floatCard) {
      setFloatcard(!floatCard);
    }
    if (floatDateCard) {
      setFloatDateCard(!floatDateCard);
    }
    setClassCard(!floatClassCard);
  };
  const handleClick = () => {
    if (floatDateCard) {
      setFloatDateCard(!floatDateCard);
    }
    if (floatClassCard) {
      setClassCard(!floatClassCard);
    }
    setFloatcard(!floatCard);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        flightFrom,
        flightTo,
        Depature,
        AdultNumber
      });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={props.flightlandinggpage ? 
        "w-[75.5%] mx-auto my-20 bg-white shadow rounded-xl py-6 px-6 z-100 "
        :"w-[75.5%] mx-auto bg-white shadow rounded-xl py-8 px-6 z-100 myheroform"}
    >
      <h3 className={props.flightlandinggpage ?
        "hidden":
        "font-bold text-xl"}>
        Where are you flying?</h3>
      <div className="mystyle flex flex-row">
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>From - To</legend>
          <input
            className="w-full h-full"
            type="text"
            onClick={handleClick}
            value={flightFrom + "-" + flightTo}
            contentEditable="false"
          />
          <FaArrowRightArrowLeft className="w-4 h-4" />
        </fieldset>
        {floatCard ? (
          <div
            id="selectioncard"
            className="w-[30%] rounded-xl shadow-lg p-4 bg-white"
          >
            <label>From</label>
            <select
              className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
              onChange={(e) => setFlightFrom(e.target.value)}
            >
              {data.map((item) => (
                <option key={data.indexOf(item)} value={item.IATA}>
                  {item.location}
                </option>
              ))}
            </select>
            <label>To</label>
            <select
              className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
              onChange={(e) => setFlightTo(e.target.value)}
            >
              {data.map((item) => (
                <option key={data.indexOf(item)} value={item.IATA}>
                  {item.location}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="none"></div>
        )}

        <fieldset className="max-w-40 ml-5 h-14  px-3 pb-2">
          <legend>Trip</legend>
          <select className="w-full h-full  bg-white" name="Trip" id="">
            <option value="return">Return</option>
            <option value="visit">Visit</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </fieldset>
        <fieldset className="ml-5 h-14  px-3 pb-2">
          <legend>Depart-Return</legend>
          <input
            className="w-full h-full"
            type="text"
            value={Depature + " - " + Return}
            onClick={handleDepClick}
          />
          {floatDateCard ? (
            <div
              id="selectioncard"
              className="w-[30%] rounded-xl shadow-lg p-4 bg-white"
            >
              <label>Depature</label>
              <input
                className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
                type="date"
                value={Depature}
                onChange={(e) => setDepature(e.target.value)}
                min={today}
              />
              <label>Return</label>
              <input
                className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
                type="date"
                value={Return}
                onChange={(e) => setReturn(e.target.value)}
                min={today}
              />
            </div>
          ) : (
            <div className="none"></div>
          )}
        </fieldset>
        <fieldset className="ml-5 h-14  px-3 pb-2">
          <legend>Passenger - Class</legend>
          <input
            className="w-full h-full"
            type="text"
            onClick={handleClassClick}
            value={AdultNumber + " , " + Class}
          />
          {floatClassCard ? (
            <div
              id="selectioncard"
              className="w-[30%] rounded-xl shadow-lg p-4 bg-white"
            >
              <label>Poeple</label>
              <input
                className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
                type="number"
                value={AdultNumber}
                onChange={(e) => setAdultNumber(e.target.value)}
                min="1"
                max="5"
              />
              <label>Class</label>
              <select
                className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2 py-4 px-5"
                onChange={(e) => setClass(e.target.value)}
              >
                <option value="A">First Class</option>
                <option value="B">Business Class</option>
                <option value="E">Economy Class</option>
              </select>
            </div>
          ) : (
            <div className="none"></div>
          )}
        </fieldset>
        {props.flightlandinggpage ? 
        <button className="mt-2 ml-5 px-7 py-3 w-1/6 bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB]  text-center text-nowrap text-sm">
          <FaMagnifyingGlass className="w-4 h-4 mt-1 mr-2" />
        </button>
        :""
        }

      </div>
      <div className={ props.flightlandinggpage ?"hidden":
        "flex flex-row justify-end mt-8"}>
        <button className="px-7 py-3 w-1/6 bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB] flex flex-row justify-between items-center text-center text-nowrap text-sm">
          <FaPaperPlane className="w-4 h-4 mt-1 mr-2" />

          Show Flights
        </button>
      </div>
    </form>
  );
}
