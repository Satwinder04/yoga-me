import { Button, Grid, Typography } from "@material-ui/core";
import vidbg from "../assets/vidbg.mp4";

import React from "react";
import "../index.css"

import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";



const Welcome = (props) => {
  return (
    <>
      <div id="main">
      <div id="page1" className="mb-20" >
        <div className="homeover mb-20">

        </div>
        {/* <div className="p1m1 hidden lg:block w-52 h-52">
            <img className="" src="\img\p1m1.jpg" alt="" />
          </div> */}
        <div className="p1h h-screen w-full flex justify-end items-center flex-col pb-20" data-scroll data-scroll-speed="0.4" >
          {/* <p className="w-full text-[4vw] flex justify-start sm:px-20 px-3">
              SAMARJIT--
            </p> */}
          <p className="p1h2 w-full text-[12vw] flex justify-center sm:px-20 px-3 ">
            YOGA-PORTAL
          </p>
          <p className="w-full text-[3.7vw] flex justify-end sm:px-20 px-3 ">
            IN THE CENTER OF PRAGUE
          </p>
        </div>
        {/* <img
            className="p1m2 hidden lg:block"
            src="https://images.pexels.com/photos/4534667/pexels-photo-4534667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          /> */}

      </div>


      <div id="page4" className=" my-10">
        <div className="section">
          <div className="sec-left">
            <h2>Accern. Rhea</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit inventore enim, quos, qui est id, architecto libero in
              esse vel officiis repellat alias maxime minima.
            </p>
          </div>
          <div className="sec-right">
            <video src={vid1} autoPlay loop muted />

            {/* <video muted="" src="./accern-rhea-cover-big.mp4" /> */}
          </div>
        </div>
        <div className="section">
          <div className="sec-left">
            <h2>AfroTech</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit inventore enim, quos, qui est id, architecto libero in
              esse vel officiis repellat alias maxime minima.
            </p>
          </div>
          <div className="sec-right">
            <video src={vid2} autoPlay loop muted />
          </div>
        </div>
      </div>

      <div id="page3" className=" w-full">
        <video
          src={vidbg}
          className="w-screen h-[80vh] object-bottom"
          autoPlay
          muted
          loop
        />
        <div className="overlay h-[80vh]" >
          <p>YOGA ME</p>
        </div>
      </div>
    </div>


      
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
    // container
    // item
    // direction="column"
    // alignItems="center"
    // justify="center"
    // style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;

