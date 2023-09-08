
import { AiTwotoneHeart,AiFillDollarCircle } from "react-icons/ai"; 
import {RiSparklingLine } from "react-icons/ri";
import "../LeftDiv/LeftStyle.css";
const LeftFeatured = () => {
  return (
    <div className="space-y-2">
      <h1 className="uppercase font-bold">Featured</h1>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <RiSparklingLine style={{fontSize:"1rem"}}></RiSparklingLine>
          <h1>New In V6</h1>
        </div>
        <div>
          <h1>12,896</h1>
        </div>
      </div>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <AiFillDollarCircle style={{fontSize:"1rem"}}></AiFillDollarCircle>
          <h1>Sponsored</h1>
        </div>
        <div>
          <h1>5,249</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <AiTwotoneHeart style={{fontSize:"1rem"}}></AiTwotoneHeart>
          <h1>Staff Favorites</h1>
        </div>
        <div>
          <h1>913</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftFeatured;
