import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
function AddCard({ item }) {
  const { totalPrice,removeItem,setTotalPrice } = useContext(CardContext);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    quantity < 1 ? setQuantity(1) : quantity;
  }, [quantity]);
  
//   const handalQuantity=(newQuantity)=>{
//     if (quantity<1) {
//       setQuantity(1)
//     }
//     setQuantity(newQuantity)
// }
 

useEffect(() => {
  const subtotal = item.price * quantity;
  setPrice(subtotal);
  setTotalPrice((prevTotal) =>prevTotal- price+ subtotal ); 
}, [item.price, quantity]);

  return (
    <>
      <div className="mt-4 w-full p-2 rounded-lg border-2 flex">
        <div className="flex justify-center items-center gap-5">
          <div className="p-2 bg-white rounded-lg">
            <img
              className="w-48"
              src={`../../../src/assets/${item?.img}`}
              alt=""
            />
          </div>
          <div className="w-60">
            <h1 className="text-white font-semibold text-xl">{item?.title}</h1>
            <p className="text-xl font-bold text-yellow-500">Price: ${item?.price}</p>
            <p className="text-md text-zinc-300">{item?.description}</p>

          </div>
        </div>
        <div className="flex justify-center flex-col items-start">
          <div className="flex gap-5">
            <p className="text-white text-lg">Quantity </p>
            <div className="flex gap-2">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className=" bg-yellow-500 text-xl text-blacks w-8 h-8 "
              >
                -
              </button>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-14 text-center"
                type="text"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className=" bg-yellow-500 text-xl text-blacks w-8 h-8 "
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <p className="text-white text-lg">SubTotal : </p>
            <p className="text-white text-lg">${price}</p>
          </div>
          <div className="flex gap-5 mt-3">
            <button
              onClick={() => removeItem(item?.id)}
              className="bg-red-600 text-white font-semibold text-lg w-24 h-8 rounded-lg text-center"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCard;
