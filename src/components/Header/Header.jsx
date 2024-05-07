import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import foodData from "../Menu/Api/foodata.json";
import { useState } from "react";
function Header() {
  const { cart } = useContext(CardContext);
  const [search,setSearch]=useState();
  return (
    <>
      <nav className="  w-full h-16 flex justify-around items-center bg-gray-800">
        <Link className="text-4xl font-DancingScript text-white" to="/">
          Feane
        </Link>
        <ul className="flex flex-col lg:flex-row flex-wrap">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-yellow-500" : "text-white"}
                            px-4
                            `
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-yellow-500" : "text-white"}
                            px-4
                            `
              }
              to="/menu"
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-yellow-500" : "text-white"}
                            px-4`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-yellow-500" : "text-white"}
                            px-4`
              }
              to="/booktable"
            >
              Book Table
            </NavLink>
          </li>
        </ul>

        <div className="h-16 flex justify-center items-center gap-8">
          <IoIosContact className="cursor-pointer" size="30px" color="white" />
          <NavLink to="/addtocard">
            <FaCartShopping
              className="cursor-pointer"
              size="20px"
              color="white"
            />
            <span className="bg-red-700 font-bold text-white rounded-full absolute top-2 ml-3 text-sm px-2 text-center">
              {cart.length}
            </span>
          </NavLink>
          <Link
            to="/menu"
            className="text-xl px-4 w-40 py-1.5 h-11 rounded-full text-center
                    bg-yellow-500"
          >
            Order Online
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
