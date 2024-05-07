import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import AddCard from "./AddCard";

function AddToCard() {

  const {cart,totalPrice}=useContext(CardContext)
  
  
  return (
    <>
      <div className="flex py-5 bg-gray-900 ">
      <div className="flex flex-col w-8/12 ps-28 px-6">
        <h1 className="text-2xl font-bold text-white">Order-Cart</h1>

        {
          cart?.map((item, index)=><AddCard key={index} {...item}/>)
        }
        
        </div>
        <div className="w-2/6 flex flex-col h-auto py-3 bg-gray-800">
            <h1 className="text-2xl font-bold ps-10 pt-5 text-white">Order Summary</h1>
            <br />
            <hr />
            <div className="text-center">
              <h1 className="text-2xl  pt-3 text-yellow-500 font-semibold">Total Amount : ${totalPrice}</h1>
              <button className="bg-red-600 mt-5 w-56 text-xl text font-semibold rounded-lg text-white px-2 py-2">Chack out</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default AddToCard;
