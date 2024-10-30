import React from "react";
import Header from "./Header";
import Home from "./Home";
import Bloghome from "./Bloghome";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      {" "}
      <div className="bg-[#F9FCFF] h-[100%]">
        <div className="my-0 mx-10 lg:mx-20 xl:mx-40 2xl:mx-60 ">
          <Header />
          <Home />
        </div>
      </div>
      <Bloghome />
      <Footer />
    </>
  );
}
