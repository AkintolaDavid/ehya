import React from "react";
import livechat from "./assets/LIve Chat.svg";
import { FaSearch } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex justify-center text-center lg:text-left lg:justify-between mt-0 items-center">
      <div className="flex flex-col w-[600px] gap-6">
        <span className="text-[40px] sm:text-[50px] md:text-[55px] leading-[50px] sm:leading-[60px] font-semibold text-[#183B56]">
          Read the most
          <br /> interesting articles
        </span>
        <span className="text-[18px] sm:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
        <div className="flex items-center w-[100%] h-14 rounded-lg bg-white shadow-lg focus:shadow-xl focus:outline-none">
          <div className="flex relative w-[70%] sm:w-[80%] h-14">
            {" "}
            <input
              className="rounded-lg w-full h-full border-none outline-none focus:ring-0 pl-10 text-lg text-[#a3a3a3] font-normal"
              placeholder="Search Article"
            />
            <FaSearch className="flex absolute top-[40%] ml-3 text-[#a3a3a3]" />
          </div>
          <button className="bg-[#1565D8] text-white w-[28%] sm:w-[18%] h-[80%] rounded-lg text-lg font-semibold px-2">
            Search
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[#5A7184] text-lg font-medium whitespace-nowrap">
            Popular Tags:
          </span>
          <span className="text-[#1565D8] text-lg font-semibold px-4 py-1 rounded-md bg-[#d7ebff] whitespace-nowrap">
            User Experience
          </span>
          <span className="text-[#1565D8] text-lg font-semibold px-4 py-1 rounded-md bg-[#d7ebff] whitespace-nowrap">
            User Interfaces
          </span>
          <span className="text-[#1565D8] text-lg font-semibold px-4 py-1 rounded-md bg-[#d7ebff] whitespace-nowrap">
            Design
          </span>
        </div>
      </div>
      <div>
        <img
          src={livechat}
          alt="chat"
          className="w-[800px] h-[550px] hidden lg:flex"
        />
      </div>
    </div>
  );
}
