import { AiFillThunderbolt } from "react-icons/ai";
import { PiFlagDuotone } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import Classic from "../assets/classic.svg";
import "./Filter.css";
// import { useState } from "react";

const Filtering = ({ filterOption }) => {
  // const [clickCount, setClickCount] = useState(0);

 

  return (
    <div className="max-w-[1420px] mx-auto  flex justify-between flex-wrap h-44 ">
      <div className="flex items-center justify-around w-1/3 ">
        <div
          className="flex flex-col items-center justify-center gap-3  image-hover p-5 flex-wrap "
          onClick={() => filterOption("classic")}
        >
     
          <img src={Classic} className=" h-8 ml-2 mr-2" />
          <h1>Classic</h1>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-3 image-hover flex-wrap p-5"
          onClick={() => filterOption("sharp")}
        >
      
          <img src={Classic} className="h-8 ml-2 mr-2 " />
          <h1>Sharp</h1>
        </div>
        <div
          className="flex flex-col justify-center items-center image-hover p-5 flex-wrap gap-3"
          onClick={() => filterOption("brands")}
        >
     
          <PiFlagDuotone style={{ fontSize: "2.5rem" }} />
          <h1>Brands</h1>
        </div>
        <div
          className="flex flex-col justify-center items-center  image-hover p-5 flex-wrap gap-3"
          onClick={() => filterOption("free")}
        >
   
          <AiFillThunderbolt style={{ fontSize: "2.5rem" }} />
          <h1>Free </h1>
        </div>
      </div>
      <div className="flex justify-around items-center w-1/2">
        <div className="flex items-center justify-around gap-5">
          <div className="filter-hover">
            <TbGridDots style={{ fontSize: "2rem" }}></TbGridDots>
          </div>
          <div className="filter-hover">
            <svg
              style={{ fontSize: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="filter-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
        <div>
          <select className="select select-success w-full max-w-xs">
            <option disabled defaultValue>
              Featured
            </option>
            <option>Alphabetically</option>
          </select>
        </div>
        <div>
          <select className="select select-success w-full max-w-xs">
            <option disabled defaultValue>
              6.4.2
            </option>
            <option>5.15.4</option>
            <option>All Versions</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
