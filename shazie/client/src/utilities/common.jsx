import { Link } from "react-router-dom";
export  const commonTopElement = (
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

export const backpacking = (
  <div
    className="grid grid-cols-4 grid-rows-2 gap-5 mt-5"
    id="lastFlightSection"
  >
    <div className=" rounded-xl col-span-2 row-span-2 bg-[#8DD3BB] p-5 flex flex-col justify-between">
      <div>
        <main className=" flex flex-row justify-between mb-3">
          <h1 className=" text-5xl font-bold mynicefont">
            Back Packing
            <br /> Sri Lanka
          </h1>
          <p className="bg-white rounded p-3 h-fit">
            From
            <br />
            <span className="font-semibold text-xl">$700</span>
          </p>
        </main>
        <p className="text-sm">
          Traveling is a unique experience as it's the best way to unplug from
          the pushes and pulls of daily life. It helps us to forget about our
          problems, frustrations, and fears at home. During our journey, we
          experience life in different ways. We explore new places, cultures,
          cuisines, traditions, and ways of living.
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
);