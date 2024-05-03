import React from 'react';
import foodData from '../Menu/Api/foodata.json';
import { FaCartShopping } from "react-icons/fa6";

function MenuCard({ categorie }) {

 const filteredFoodData=categorie==="All"?foodData:foodData.filter((item)=>item.categories===categorie)

 const dataSaveLocal=(item)=>{
    const existingData=JSON.parse((localStorage.getItem('selectedCards')))||[]
    existingData.push(item)
    localStorage.setItem("selectedCards",JSON.stringify(existingData))
 }

  return (
    <>
      {filteredFoodData.map((item, index) => (
        <div  key={index} className='mt-3 rounded-lg w-80 h-auto bg-gray-900 p-4 cursor-pointer'>
          <div className='w-full rounded-lg h-52 flex justify-center items-center bg-white'>
            <img className='w-48 m-auto' src={`../../../src/assets/${item.img}`} alt={item.title} />
          </div>
          <div className='mt-1'>
            <h1 className='text-2xl text-white'>{item.title}</h1>
            <p className='text-white'>{item.description}</p>
            <div className='flex justify-between items-center'>
              <p className='text-2xl text-white'>{`$${item.price}`}</p>
              
              <FaCartShopping  onClick={()=>dataSaveLocal(item)} size="40px" color='white' className='bg-yellow-500 p-2 rounded-full' />
             
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MenuCard;
