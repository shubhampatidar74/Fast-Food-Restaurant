import React from 'react'
import asset03 from '../../../src/assets/asset 3.png';
import { FaCartShopping } from "react-icons/fa6";
function MenuCard() {
    return (
        <>
        <div className=' mt-3 rounded-lg w-80 h-auto bg-gray-900 p-4'>
                    <div className='w-full rounded-lg h-52 flex justify-center items-center bg-white'>
                        <img className='w-48 m-auto' src={asset03} alt="" />
                    </div>
                    <div className='mt-1'>
                        <h1 className='text-2xl text-white'>Delicious Pizza</h1>
                        <p className='text-white'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl text-white'>$20</p>
                            <FaCartShopping size="40px" color='white' className='bg-yellow-500 p-2 rounded-full' />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MenuCard
