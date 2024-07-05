import React from "react";
import { useState, useEffect } from "react";
import Assans from "./Assans";
// import vidbg from "../vid/vidbg.mp4";
import vid1 from "../assets/vid1.mp4";
const YogaMe = () => {
  return (
    <div className="pt-10 theme-bg">
      <div className=" ">
        <div id="page3" className=" w-full overflow-hidden">
            <video
              src={vid1}
              className="w-screen h-[65vh]"
              autoPlay
              muted
              loop
            />
            <div className="overlay h-[65vh]">
              <p className="text-[14vw]">YOGA ASSANS</p>
            </div>
          </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
          

          <Assans />
        </div>
      </div>
    </div>
  );
};

export default YogaMe;
