import React from 'react'

import MenuCard from '../MenuCard/MenuCard';
import { useState } from 'react';
function Menu() {
    const [action, setAction]=useState("All")
    const handleClick=(e)=>{
        
       setAction(e.target.value);

   }
    return (
        <>
            <div className='w-full h-
            auto flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-DancingScript'>Our Menu</h1>
                <form className='flex gap-8 mt-5' action="">
                    <input onClick={handleClick} className=' cursor-pointer bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="All" />
                    <input onClick={handleClick} className=' cursor-pointer bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Burger" />
                    <input onClick={handleClick} className=' cursor-pointer bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Pizza" />
                    <input onClick={handleClick} className=' cursor-pointer bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Pasta" />
                    <input onClick={handleClick} className=' cursor-pointer bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Fries" />
                </form>
                <div className='w-full p-4 flex flex-wrap gap-6 justify-center items-center'>
                <MenuCard categorie={action} />
                </div>
            </div>
        </>
    )
}

export default Menu
