import React, { useState } from "react";
import data from "./PoseData.json";
// import prob from "./prob.json"

const Assans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleModal = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <>
      <div className="pb-11 flex  gap-x-4 ">
        <input
          id="searchInput"
          type="text"
          className="min-w-0 flex-auto border-2 border-[#402D27] bg-white/5 px-3.5 py-2 text-black "
          placeholder="Enter Your Problem"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          list="problem"
        />
        {/* <datalist id="problem">
          {prob.map((prob) => (
            <option value={prob.name}></option>
          ))}


        </datalist> */}


      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.pose_benefits.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <div key={val.id} className="group">
                <div onClick={() => toggleModal(index)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 rounded-lg cursor-pointer">
                  <img
                    src={val.url_svg}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 scale-75"
                  />
                </div>
                <div className="flex justify-between items-center mt-4 flex-wrap">

                  <p className=" text-sm font-medium text-[#402D27]">
                    {val.english_name}
                  </p>
                  <h3 className=" text-sm font-normal text-gray-600">
                    {val.sanskrit_name_adapted}
                  </h3>
                </div>



                <div
                  className={`${isOpen[index] ? "block" : "hidden"
                    } fixed z-50 inset-0 modal-bg bg-opacity-75 flex items-center justify-center`}
                >
                  <div className="modal rounded-lg p-10 px-20 w-3/4 flex flex-col items-end">
                    <button
                      onClick={() => toggleModal(index)}
                      className="mt-4   text-white px-4 py-2 rounded-lg "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 close-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <div className="flex pb-10">
                      <div className=" w-1/4 flex justify-center items-center flex-col">
                        <img
                          src={val.url_svg}
                          // alt={val.url_svg_alt}
                          className=""
                        />
                        <div className="w-64 h-64 overflow-hidden rounded-full mt-14">

                          <img
                            src={val.ImgLink}
                            className=""
                          />
                        </div>
                        

                          <p className=" mt-5 text-sm font-medium text-[#402D27]">
                            {val.Name} Certified By <span className="text-[red]">
                               {val.CertifiedBy}
                              </span> 
                          </p>
                          
                        


                      </div>
                      <div className="w-3/4 px-10">
                        <p className="font-medium pb-8"><span className=" text-5xl">{val.sanskrit_name_adapted}</span></p>
                        <p className="font-medium text-xl py-2">English Name - <span className="font-normal">{val.english_name}</span></p>
                        <p className="font-medium text-xl py-2">Sanskrit Name - <span className="font-normal">{val.sanskrit_name}</span></p>
                        <p className="font-medium text-xl py-2">Translation Name - <span className="font-normal">{val.translation_name}</span></p>
                        <p className="font-medium text-xl py-2">Pose Benefits - <span className="font-normal">{val.pose_benefits}</span></p>
                        <p className="font-medium text-xl py-2">Pose Description - <span className="font-normal">{val.pose_description}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Assans;
