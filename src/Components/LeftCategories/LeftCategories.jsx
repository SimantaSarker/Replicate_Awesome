import { AiFillCar } from "react-icons/ai";
import { FaAdn, FaCat, FaTshirt } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { TbAccessibleOffFilled, TbBuildingStore } from "react-icons/tb";
import { HiBellAlert } from "react-icons/hi2";
import { BsFillArrowUpRightSquareFill, BsCodeSlash,BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { PiBagFill, PiCampfireFill } from "react-icons/pi";
import { BiSolidMessageDots } from "react-icons/bi";
import { GiLovers } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi";

import "../LeftDiv/LeftStyle.css";
const LeftCategories = () => {
  return (
    <div className="space-y-2">
      <h1 className="uppercase font-bold">Categories</h1>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <TbAccessibleOffFilled
            style={{ fontSize: "1rem" }}
          ></TbAccessibleOffFilled>
          <h1>Accessibility</h1>
        </div>
        <div>
          <h1>12,896</h1>
        </div>
      </div>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <HiBellAlert style={{ fontSize: "1rem" }} />
          <h1>Alert</h1>
        </div>
        <div>
          <h1>11</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <FaAdn style={{ fontSize: "1rem" }} />
          <h1>Alphabet</h1>
        </div>
        <div>
          <h1>30</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <FaCat style={{ fontSize: "1rem" }} />
          <h1>Animals</h1>
        </div>
        <div>
          <h1>25</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <BsFillArrowUpRightSquareFill style={{ fontSize: "1rem" }} />
          <h1>Arrow</h1>
        </div>
        <div>
          <h1>128</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <AiFillCar style={{ fontSize: "1rem" }} />
          <h1>Automotive</h1>
        </div>
        <div>
          <h1>9</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <TbBuildingStore style={{ fontSize: "1rem" }}></TbBuildingStore>
          <h1>Buildings</h1>
        </div>
        <div>
          <h1>76</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <PiBagFill style={{ fontSize: "1rem" }} />
          <h1>Business</h1>
        </div>
        <div>
          <h1>116</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <PiCampfireFill style={{ fontSize: "1rem" }} />
          <h1>Camping</h1>
        </div>
        <div>
          <h1>39</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <GiLovers style={{ fontSize: "1rem" }} />
          <h1>Charity</h1>
        </div>
        <div>
          <h1>22</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <FaChartSimple style={{ fontSize: "1rem" }} />
          <h1>Charts + Diagrams</h1>
        </div>
        <div>
          <h1>16</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <FaTshirt style={{ fontSize: "1rem" }} />
          <h1>Clothing</h1>
        </div>
        <div>
          <h1>25</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <BsCodeSlash style={{ fontSize: "1rem" }} />
          <h1>Coding</h1>
        </div>
        <div>
          <h1>12</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <BiSolidMessageDots style={{ fontSize: "1rem" }} />
          <h1>Communication</h1>
        </div>
        <div>
          <h1>63</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <HiOutlineAcademicCap style={{ fontSize: "1rem" }} />
          <h1>Education</h1>
        </div>
        <div>
          <h1>26</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <BsFillEmojiExpressionlessFill style={{ fontSize: "1rem" }} />
          <h1>Emoji</h1>
        </div>
        <div>
          <h1>60</h1>
        </div>
      </div>
    </div>
  );
};
export default LeftCategories;
