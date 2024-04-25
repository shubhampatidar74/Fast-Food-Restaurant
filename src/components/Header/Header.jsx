import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
function Header() {
    return (
        <>
            <nav className=" fixed z-10 w-full h-16 flex justify-around items-center bg-gray-800">
                <Link 
                    className='text-4xl font-DancingScript text-white'
                    to="/">
                        Feane   
                </Link>
                <ul className='flex flex-col lg:flex-row flex-wrap'>
                    <li>
                       <NavLink
                            className={({isActive})=>
                            `text-xl ${isActive ? "text-yellow-500":"text-white"}
                            px-4
                            `}
                            to="/">
                            Home
                       </NavLink>
                       <NavLink
                            className={({isActive})=>
                            `text-xl ${isActive ? "text-yellow-500":"text-white"}
                            px-4
                            `}
                            to="/menu">
                            Menu
                       </NavLink>
                       <NavLink
                            className={({isActive})=>
                            `text-xl ${isActive ? "text-yellow-500":"text-white"}
                            px-4`}
                            to="/about">
                            About
                       </NavLink>
                       <NavLink
                            className={({isActive})=>
                            `text-xl ${isActive ? "text-yellow-500":"text-white"}
                            px-4`}
                            to="/booktable">
                            Book Table
                       </NavLink>
                    </li> 
                </ul>

                <div className='h-16 flex justify-center items-center gap-4'>
                    <IoIosContact size="30px" color='white' />
                    <FaSearch size="20px" color='white' />
                    <FaCartShopping size="20px" color='white' />
                    <Link className='text-xl px-4 w-40 py-1.5 h-11 rounded-full text-center
                    bg-yellow-500'>Order Online</Link>
                </div>
            </nav>
        </>
    )
}

export default Header
