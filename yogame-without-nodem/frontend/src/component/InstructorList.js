import React from 'react';
import { useState, useEffect } from "react";
import Assans from "./Assans";
// import vidbg from "../vid/vidbg.mp4";
import vid1 from "../assets/vid3.mp4";
import instructorData from "./InstructorData.json"
const InstructorList = () => {
    return (
        <div>
            <div className=" bg-[#F5F3EE]">
                <div id="page3" className=" w-full overflow-hidden">
                    <video
                        src={vid1}
                        className="w-screen h-[65vh]"
                        autoPlay
                        muted
                        loop
                    />
                    <div className="overlay h-[65vh]">
                        <p className="text-[12vw] ">INSTRUCTOR LIST</p>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">

                    {instructorData.map((instructorData) => (
                        <div className='bg-[#ede9de] p-5 my-10'>
                            <div class="grid grid-cols-3 gap-4 h-[460px]">
                                <div class="col-span-1 overflow-hidden object-center">
                                    <img className='' src={instructorData.ImgLink} />
                                </div>

                                <div class="col-span-2 text-[#402D27] px-14 py-16 flex justify-start items-start flex-col">
                                    <p className="font-normal pb-8 text-6xl"><span className="">{instructorData.Name}</span></p>
                                    <p className="font-medium text-xl py-2">Gender - <span className="font-normal">{instructorData.Gender}</span></p>
                                    <p className="font-medium text-xl py-2">Age - <span className="font-normal">{instructorData.Age}</span></p>
                                    <p className="font-medium text-xl py-2">Certificated by- <span className="font-normal">{instructorData.CertifiedBy}</span></p>
                                    <p className="font-medium text-xl py-2">City/state - <span className="font-normal">{instructorData.CityState}</span></p>
                                    <p className="font-medium text-xl py-2">Username - <span className="font-normal">{instructorData.Username}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}





                    {/* <Assans /> */}
                </div>
            </div>
        </div>

    )
}

export default InstructorList;
