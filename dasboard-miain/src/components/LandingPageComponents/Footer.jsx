import React from "react";
import "./Styles.css";
import Btn from "../Btn";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/landingpage/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer lg:h-[500px] h-auto flex justify-center items-center flex-col">
        <div className="lg:w-[40%] md:w-[60%] w-[95%] mx-auto">
          <h2
            className="md:text-[56px] text-[20px] font-se
        mibold text-[#fff] text-center my-[0rem] py-[1rem]"
          >
            JOIN OUR COMMUNITY
          </h2>

          <p className=" md:text-[18px] text-[12px] text-[#C2C3C5]  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex my-[0.5rem] md:flex-row flex-col md:gap-[0rem] gap-[1rem]">
            <input
              type="text"
              placeholder="enter your email"
              className="text-[14px] text-[#C2C3C5]  border-none w-[100%] py-[1rem] rounded-[10px] px-[1rem] shadow-lg "
              style={{
                borderRadius: "10px 0px 0px 10px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(195, 196, 198, 0.15)",
              }}
            />
            <Btn text={"SUBSCRIBE"} style={""} />
          </div>
          <div className="my-[2rem] grid grid-cols-6 md:gap-[2rem] gap-[1rem] md:w-[50%] mx-auto ">
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white ">
                <IoLogoTwitter />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white">
                <FaFacebook />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white">
                <BiLogoTelegram />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white">
                <IoLogoYoutube />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white">
                <IoLogoTwitter />
              </a>
            </div>
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative rounded-lg bg-[#c3c4c6]/[0.15] hover:bg-slate-100/[0.5]">
              <a href="#" className="w-[20.32px] h-[21px] absolute left-[15px] top-3.5 md:text-xl text-[16px] text-center text-white">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footernav py-[1rem]">
        <hr className="text-[#C2C3C5] h-[0.5px]" />
        <div className="flex items-center justify-around md:flex-row flex-col">
          <div className="flex items-center py-[1rem] md:gap-[2rem] gap-[1rem] md:flex-row flex-col">
            <img src={logo} alt="" className="mt-[1rem]" />
            <p className="md:text-[30px] text-[16px] text-[#C2C3C5] ">
              0xEthDao 2024 - ALL rights reserved
            </p>
          </div>
          <div>
            <ul className="flex md:items-center items-start md:gap-[2rem] gap-[1rem] md:flex-row flex-col">
              <li className="text-[12px] text-[#fff]">How it works</li>
              <li className="text-[12px] text-[#fff]">Treasury</li>
              <li className="text-[12px] text-[#fff]">About</li>
              <li className="text-[12px] text-[#fff]">FAQ</li>
              <li className="text-[12px] text-[#fff]">Fund your Project</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;