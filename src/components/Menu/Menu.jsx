import React from 'react'

import MenuCard from '../MenuCard/MenuCard';
function Menu() {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-DancingScript'>Our Menu</h1>
                <form className='flex gap-8 mt-5' action="">
                    <input className='bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="All" />
                    <input className='bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Burger" />
                    <input className='bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Pizza" />
                    <input className='bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Pasta" />
                    <input className='bg-gray-900 text-white rounded-lg w-20 h-10' type="button" value="Fries" />
                </form>
                <MenuCard />
            </div>
        </>
    )
}

export default Menu
