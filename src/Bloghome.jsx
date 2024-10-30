import React from "react";
import img1 from "./assets/img1.jpg";
import { FaArrowRight } from "react-icons/fa6";
import verify from "./assets/verify.png";
export default function Bloghome() {
  const dummyData = [
    {
      title: "Introduction to JavaScript",
      summary: "A basic guide to learning JavaScript for beginners.",
      name: "John Doe",
      date: "2023-05-01",
    },
    {
      title: "React Basics",
      summary: "Understanding the fundamentals of React for building web apps.",
      name: "Jane Smith",
      date: "2023-06-15",
    },
    {
      title: "Advanced CSS Techniques",
      summary: "Enhance your web styling skills with advanced CSS.",
      name: "Alex Johnson",
      date: "2023-07-10",
    },
    {
      title: "Node.js for Backend Development",
      summary: "Learn how to create server-side applications with Node.js.",
      name: "Chris Lee",
      date: "2023-08-20",
    },
    {
      title: "Understanding REST APIs",
      summary: "A guide on how to create and consume REST APIs.",
      name: "Morgan Green",
      date: "2023-09-05",
    },
    {
      title: "Intro to TypeScript",
      summary: "Start using TypeScript for better JavaScript development.",
      name: "Jamie Brown",
      date: "2023-10-12",
    },
    {
      title: "React Hooks Deep Dive",
      summary: "A comprehensive look into React Hooks and how to use them.",
      name: "Taylor White",
      date: "2023-11-18",
    },
    {
      title: "CSS Grid vs Flexbox",
      summary: "An in-depth comparison between CSS Grid and Flexbox.",
      name: "Sam Blue",
      date: "2023-12-02",
    },
    {
      title: "Building Secure Applications",
      summary: "Best practices for creating secure web applications.",
      name: "Robin Black",
      date: "2024-01-15",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className=" border rounded-md shadow-md w-[340px] md:w-[350px] xl:w-[400px]"
          >
            <img
              src={img1}
              alt="img"
              className="w-[340px] md:w-[350px] xl:w-[400px]"
            />
            <div className="mx-6 pb-5 flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-2 mt-3 text-[#183B56]">
                {item.title}
              </h2>
              <p className="font-normal mb-5 text-lg text-[#183B56]">
                {item.summary}
              </p>
              <div className="flex justify-between items-center">
                {" "}
                <div className="text-lg font-medium text-[#183B56] flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-black"></div>
                  <div className="flex flex-col">
                    {" "}
                    <p> {item.name}</p>
                    <img src={verify} alt="verify" />
                  </div>
                </div>
                <div className="text-lg font-medium text-[#183B56]">
                  <p>{item.date}</p>
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex justify-center rounded-lg w-48 py-2 mt-12 mb-8 gap-1 font-semibold text-lg text-[#1565D8] items-center border-2 border-[#1565D8]">
        More Articles
        <FaArrowRight className="ml-2 h-4 mt-1 text-[#1565D8]" />
      </button>
    </div>
  );
}
