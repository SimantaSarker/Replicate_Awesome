import { TbCircleFilled, TbInfoCircle } from "react-icons/tb";
// import { BsSlashCircle } from "react-icons/bs";
import { PiCircleHalfFill } from "react-icons/pi";
import "../LeftDiv/LeftStyle.css";
const LeftStyle = () => {
  return (
    <div className="space-y-2">
      <h1 className="uppercase font-bold">Style</h1>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <TbCircleFilled style={{fontSize:"1rem"}}></TbCircleFilled>
          <h1>Solid</h1>
        </div>
        <div>
          <h1>6,440</h1>
        </div>
      </div>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <PiCircleHalfFill style={{fontSize:"1rem"}}></PiCircleHalfFill>
          <h1>Regular</h1>
        </div>
        <div>
          <h1>6,440</h1>
        </div>
      </div>
      <div className="flex items-center justify-between  single-row p-2">
        <div className="flex items-center gap-4">
          <TbInfoCircle style={{fontSize:"1rem"}}></TbInfoCircle>
          <h1>Light</h1>
        </div>
        <div>
          <h1>6,440</h1>
        </div>
      </div>
      <div className="flex items-center justify-between single-row p-2">
        <div className="flex items-center gap-4">
          <TbInfoCircle style={{fontSize:"1rem"}}></TbInfoCircle>
          <h1>Thin</h1>
        </div>
        <div>
          <h1>6,440</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftStyle;
