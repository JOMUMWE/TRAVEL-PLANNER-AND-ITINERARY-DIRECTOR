import { FaArrowRightArrowLeft } from "react-icons/fa6";


export default function FlightSearchBar() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-9/12 mx-auto bg-white shadow rounded-xl py-8 px-6 z-100"
      id="myheroform"
    >
      <h3 className="font-bold text-xl">Where are you flying?</h3>
      <div className="mystyle flex flex-row">
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>From - To</legend>
          <input className="w-full h-full" type="text" />
          <FaArrowRightArrowLeft className="w-5 h-5" />
        </fieldset>
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
        <button className=" w-1/6 bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB]">
          Show Flights
        </button>
      </div>
    </form>
  );
}
