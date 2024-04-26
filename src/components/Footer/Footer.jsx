import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
    return (
        <>
            <div className='w-full h-96 flex justify-center items-center bg-gray-800'>
                <div className='w-96 h-96 gap-4 flex flex-col justify-center items-center text-white'>
                    <h1 className='text-4xl font-DancingScript'>Contact Us</h1>
                    <p className='flex text-xl justify-center items-center'>
                        <IoLocationSharp size="25px" className='mr-2' />
                        Location
                    </p>
                    <p className='flex text-xl justify-center items-center'>
                        <FaPhone size="25px" className='mr-2'/>
                         Call +1234567890
                    </p>
                    <p className='flex text-xl justify-center items-center'>
                        <MdEmail size="25px" className='mr-2'/>
                       FastFood@gmail.com
                    </p>
                </div>
                <div className='w-96 h-96 gap-4 flex flex-col justify-center items-center text-white'>
                    <h1 className='text-4xl font-DancingScript'>Feane</h1>
                    <p className='flex text-center text-md justify-center items-center'>
                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                    </p>
                    <p className='flex text-xl justify-center items-center'>
                        <FaFacebook size="35px" className='mr-2'/>
                        <AiFillTwitterCircle size="40px" className='mr-2'/>
                        <BsLinkedin size="35px" className='mr-2 rounded-full'/>
                        <FaSquareInstagram size="35px" className='mr-2 rounded-full'/>
                    </p>
                   
                </div>
                <div className='w-96 h-96 gap-4 flex flex-col justify-center items-center text-white'>
                    <h1 className='text-4xl font-DancingScript'>Opening Hours</h1>
                    <p className='flex text-xl justify-center items-center'>
                        Everyday
                    </p>
                    <p className='flex text-xl justify-center items-center'>
                        <FaPhone size="25px" className='mr-2'/>
                         10:00 AM - 10:00 PM
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col py-4 justify-center items-center bg-gray-800'>
                    <p className='text-lg text-white'>© 2024 All Rights Reserved By Shubham Patidar</p>
                    <p className='text-lg text-white'>© Created By Shubham Patidar </p>
            </div>
        </>
    )
}

export default Footer
