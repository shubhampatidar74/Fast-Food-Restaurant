import React from "react";
import bookingImg from "../../../src/assets/booking.jpg";
function BookTable() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/2 h-screen  flex flex-col  justify-center items-center">
          <h1 className="font-DancingScript text-4xl -ml-24">Book Table</h1>
          <form
            className="w-full flex flex-col  justify-center items-end"
            action=""
          >
            <input
              className="px-3 h-11 rounded-lg outline-none w-2/3 border-2 border-gray-950 mt-4"
              type="text"
              name=""
              id=""
            />
            <br />
            <input
              className="px-3 h-11 rounded-lg outline-none w-2/3 border-2 border-gray-950 mt-4"
              type="text"
              name=""
              id=""
            />
            <br />
            <input
              className="px-3 h-11 rounded-lg outline-none w-2/3 border-2 border-gray-950 mt-4"
              type="text"
              name=""
              id=""
            />
            <br />
            <select
              className="h-11 rounded-lg outline-none w-2/3 border-2 border-gray-950 mt-4"
              name=""
              id=""
            >
              <option className=" font-semibold" disabled>How Many Person ?</option>
              <option className="" value="2">2</option>
              <option className="" value="3">3</option>
              <option className="" value="4">4</option>
              <option className="" value="5">5</option>
            </select>
            <br />
            <input
              className="px-3 h-11 rounded-lg outline-none w-2/3 border-2 border-gray-950 mt-4"
              type="date"
              name=""
              id=""
            />
            <br />
            <input
              className="bg-yellow-500   mt-3 w-40 h-10 rounded-md text-xl text-white"
              type="button"
              value="Book Now"
            />
          </form>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div className="w-4/5 overflow-hidden border-4 border-yellow-500">
            <img src={bookingImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTable;
