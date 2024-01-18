import React, { useState } from "react";
import {Link} from 'react-scroll';
import Logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 z-30 w-full py-4 bg-neutral-800 max-xl:px-4">
        <div className="flex items-center justify-between max-w-screen-sm mx-auto lg:max-w-screen-xl">
          <Link href="/">
            <img src={Logo} className="w-10" alt="" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-2 text-sm font-extrabold lg:space-x-6 lg:text-xl lg:font-bold text-main-color">
            <li className="h-6 overflow-hidden  group">
               
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
               
               >
                 Home
               </Link>
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                 to="home" spy={true} smooth={true} ofsset={50} duration={500}
               >
                 home
               </Link>
             </li>
              <li className="h-6 overflow-hidden  group">
               
                <Link
                  className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                 
                >
                  About
                </Link>
                <Link
                  className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                  to="about" spy={true} smooth={true} ofsset={50} duration={500}
                >
                  about
                </Link>
              </li>
              <li className="h-6 overflow-hidden  group">
               
                <Link
                  className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
              
                >
                  Portfolio
                </Link>
                <Link
                  className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                  to="portfolio" spy={true} smooth={true} ofsset={50} duration={500}
                >
                  portfolio
                </Link>
              </li>
              <li className="h-6 overflow-hidden  group">
               
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                 
               >
                 Contact
               </Link>
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                 to={"contact"} spy={true} smooth={true} ofsset={50} duration={500}
               >
                 contact
               </Link>
             </li>
             <li className="h-6 overflow-hidden  group">
               
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
               
               >
                 Buy Rokstar
               </Link>
               <Link
                 className="relative block text-sm font-medium text-white duration-300 cursor-pointer font-monter group-hover:-translate-y-5"
                 to={"buyrokstar"} spy={true} smooth={true} ofsset={50} duration={500}
               >
                 buy rokstar
               </Link>
             </li>
             
            </ul>
          </div>
          <div className="z-10 text-3xl md:hidden">
            {open ? (
              <FaTimes
                className="text-white"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <FaBars 
              className="text-white"
              onClick={() => setOpen(!open)} 
              />
            )}
          </div>
          <ul
            className={
              open
                ? "bg-black text-white font-bold py-2  flex flex-col space-y-2 absolute w-full  left-0 top-20 transition-all duration-400 ease-linear overflow-hidden  h-lg md:hidden"
                : "bg-black text-white font-bold absolute w-full items-center flex flex-col space-y-2 left-0 top-20 transition-all duration-400 ease-linear overflow-hidden h-0"
            
            }
          >
              <li>
                <Link
                  className="relative block text-sm text-white cursor-pointer font-monter font-small hover:bg-white hover:text-black"
                  to={""}
                >
             Home
                </Link>
              </li>
              <li>
                <Link
                  className="relative block text-sm text-white cursor-pointer font-monter font-small hover:bg-white hover:text-black "
                  to={"about"}
                >
                About
                </Link>
              </li>
              <li>
                <Link
                  className="relative block text-sm text-white cursor-pointer font-monter font-small hover:bg-white hover:text-black"
                  to={"services"}
                >
                 Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="relative block text-sm text-white cursor-pointer font-monter font-small hover:bg-white hover:text-black"
                  to={"opinion"}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="relative block text-sm text-white cursor-pointer font-monter font-small hover:bg-white hover:text-black"
                  to={"pricing"}
                >
                  Buy Rokstar
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
