import { FaBuilding, FaBed, FaCircleChevronDown } from "react-icons/fa6";
import { useState } from "react";

export default function HotelSearchBar(props) {
  
  return (
    <form
      className={
        props.home
          ? "w-full mx-auto bg-white rounded-xl py-8 px-6 z-100"
          : "myheroform w-[75.5%] mx-auto bg-white shadow rounded-xl py-8 px-6 z-100"
      }
    >
      <h3 className="font-bold text-xl">Where are you staying?</h3>
      <div className="mystyle flex flex-row gap-5">
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>Enter Destination</legend>
          <FaBed className="w-4 h-4" />
          <input className="w-full h-full" type="text" />
        </fieldset>
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>Check-In</legend>
          <input type="date" className="p-0 mt-0 w-full h-full" />
        </fieldset>
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>Check-Out</legend>
          <input type="date" className="p-0 mt-0 w-full h-full" />
        </fieldset>
        <fieldset className=" h-14 flex flex-row px-3 pb-2">
          <legend>Rooms & Guests</legend>
          <input type="text" />
          <FaCircleChevronDown className="w-4 h-4" />
          {}
        </fieldset>
      </div>
      <div className="flex flex-row justify-end mt-8">
        <button className="px-7 py-3 w-1/6 bg-[#8DD3BB] h-12 rounded font-bold hover:bg-[#ffff] hover:ring-2 hover:ring-[#8DD3BB] flex flex-row justify-between align-middle text-center text-nowrap">
          <FaBuilding className="w-4 h-4 mt-1" />
          Show Places
        </button>
      </div>
    </form>
  );
}
