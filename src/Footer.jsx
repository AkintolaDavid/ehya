import React from "react";
import img from "./assets/card.png";
import logo from "./assets/Logo.png";
import design from "./assets/Wave.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heart from "./assets/Bottom.png";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" bg-[#0D2436]">
      <img src={design} alt="img" />
      <div className="flex justify-center ">
        <div className=" my-0  mx-10 lg:mx-20 xl:mx-40 2xl:mx-60 flex flex-col-reverse lg:flex-row  justify-between items-start sm:text-center lg:text-left">
          <div className="flex flex-col sm:w-[640px] gap-6 mt-0 mb-5 lg:mb-0 lg:mt-5">
            <span className="text-[26px] sm:text-[35px] md:text-[40px] leading-[40px] sm:leading-[50px] md:leading-[60px] font-semibold text-white">
              Get our stories delivered From us to your inbox weekly.
            </span>

            <div className="flex flex-col sm:flex-row items-center ml-[5%] w-[90%] justify-between h-auto sm:h-14 rounded-lg shadow-lg focus:shadow-xl focus:outline-none gap-3 sm:gap-0">
              <input
                placeholder="Your Email"
                className="w-full sm:w-[65%] h-12 sm:h-full  rounded-lg  text-lg pl-4"
              />
              <button className="bg-[#1565D8] h-12 sm:h-full text-white w-full sm:w-[33%] rounded-lg text-lg font-semibold px-2">
                Get Started
              </button>
            </div>
            <span className="text-[15px] sm:text-[18px] md:text-[20px] text-white">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </span>
          </div>
          <div>
            <img
              src={img}
              alt="chat"
              className="w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[600px] md:h-[450px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row  text-white pt-10 pb-20 mx-12 md:mx-20 xl:mx-40 2xl:mx-60   ">
        <div className="mt-10 sm:mt-0 flex flex-col gap-5 sm:w-[500px] text-center sm:text-left items-center">
          <img src={logo} alt="logo" className="w-24" />
          <span className="text-md sm:text-lg ">
            Build a modern and creative
            <br /> website with moonfo
          </span>
          <div className="flex text-white gap-5">
            <GrInstagram className="h-8 w-8" />
            <FaFacebookF className="h-8 w-8" />
            <FaXTwitter className="h-8 w-8" />
            <FaLinkedin className="h-8 w-8" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">Products</span>
            <span>Landing Page</span>
            <span>Features</span>
            <span>Documentations</span>
            <span>Program</span>
            <span>Pricing</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">Services</span>
            <span>Documentations</span>
            <span>Features</span>
            <span>Design</span>
            <span>Illustration</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">Company</span>
            <span>About</span>
            <span>Terms</span>
            <span>Privacy policy</span>
            <span>Career</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">More</span>
            <span>Documentations</span>
            <span>License</span>
            <span>Change log</span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center pt-2 pb-20 mx-60 ">
        <img src={heart} alt="heart" />
      </div>
    </div>
  );
}
