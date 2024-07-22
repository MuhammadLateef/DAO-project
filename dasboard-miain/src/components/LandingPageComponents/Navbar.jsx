import React from "react";
import logo from "../../assets/landingpage/logo.svg";
import mdi_theme from "../../assets/landingpage/mdi_theme.svg";
import Btn from "../Btn";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const togglerNav = () => {
    setToggle(!toggle);
  };

  const navlinks = [
    "How it works",
    "Treasury",
    "About",
    "FAQ",
    "Fund your Project",
  ];
  return (
    <>
      <div className=" fixed w-[100%] bg-[#040B11] z-[999]">
        {/* for large screens */}
        <div className="md:block hidden">
          <nav className="flex md:justify-around  items-center item-start py-[2rem] md:flex-row flex-col">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="flex gap-[3rem] items-center  md:flex-row flex-col md:my-0 my-2">
              {navlinks.map((items, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#fff] hover:text-[#0BDF0E] duration-all transition-all font-clash-display text-16 font-bold leading-24 tracking-wider uppercase list-none"
                  >
                    <a href="#">
                      {items}
                    </a>
                  </li>
                );
              })}
            </div>
            <div className="">
              <Btn text={"Launch App"} />
            </div>
            <div>
              <div className=" bg-gray-600 p-4  rounded-full  ">
                <img src={mdi_theme} alt="" />
              </div>
            </div>
          </nav>
        </div>

        {/* for mobile view */}
        <div className="md:hidden block">
          <nav className="flex md:justify-around  flex-col py-[1.5rem]">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="text-[#fff] absolute right-10 top-10 text-[26px]">
              {toggle ? (
                <RxCross1 onClick={togglerNav} />
              ) : (
                <AiOutlineMenu onClick={togglerNav} />
              )}
            </div>

            <div
              className={`${toggle
                  ? "absolute h-screen bg-black w-[70%] top-[12%] transition-all ease-out delay-150"
                  : "hidden"
                }`}
            >
              <div className="flex gap-[2rem] absolute left-[5%]   flex-col md:my-0 my-1">
                {navlinks.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[#fff] font-clash-display text-16 font-bold leading-26 tracking-wider uppercase list-none"
                    >
                      {items}
                    </li>
                  );
                })}
              </div>
              <div className="absolute bottom-[55%] left-[5%]">
                <Btn text={"Launch App"} style={"z-[999] w-[100%]"} />
              </div>
              <div className="w-[100%]">
                <div className=" bg-gray-600 p-4  rounded-full w-[15%] absolute bottom-[45%] left-[5%] ">
                  <img src={mdi_theme} alt="" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
