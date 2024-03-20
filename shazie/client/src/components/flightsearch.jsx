import { FaArrowRightArrowLeft, FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";

export default function FlightSearchBar() {
  const [flightTo , setFlightTo ] = useState("Lahore")
  const [flightFrom , setFlightFrom ] = useState("Karachi")
  const [flightData , setFlightData] = useState({from:flightFrom,to:flightTo})
  const [floatCard, setFloatcard] = useState(false)


    const handleClick = () => {
      console.log("clicked")
      setFloatcard(!floatCard)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[75.5%] mx-auto bg-white shadow rounded-xl py-8 px-6 z-100 myheroform"
    >
      <h3 className="font-bold text-xl">Where are you flying?</h3>
      <div className="mystyle flex flex-row">
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>From - To</legend>
          <input
            className="w-full h-full"
            type="text"
            onClick={handleClick}
            value={flightFrom + "-" + flightTo}
            contentEditable ="false"
          />
          <FaArrowRightArrowLeft className="w-4 h-4" />
        </fieldset>
        {floatCard ? (
          <div
            id="selectioncard"
            className="w-[30%] rounded-xl shadow-lg p-4 bg-white"
          >
            <label>From</label>
            <input
              type="text"
              className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2"
              value={flightFrom}
              onChange={(e) => setFlightFrom(e.target.value)}
            />
            <label>To</label>
            <input
              type="text"
              className="w-full  bg-slate-100 rounded-xl hover:border-[#82CBB2] hover:border-2"
              value={flightTo}
              onChange={(e) => setFlightTo(e.target.value)}
            />
          </div>
        ) : (<div className="none"></div>)}

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
          <input className="w-full h-full" type="calendar" />
        </fieldset>
        <fieldset className="ml-5 h-14  px-3 pb-2">
          <legend>Passenger - Class</legend>
          <input className="w-full h-full" type="text" />
        </fieldset>
      </div>
      <div className="flex flex-row justify-end mt-8">
        <button className="px-7 py-3 w-1/6 bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB] flex flex-row justify-between items-center text-center text-nowrap text-sm">
          <FaPaperPlane className="w-4 h-4 mt-1 mr-2" />
          Show Flights
        </button>
      </div>
    </form>
  );
}
