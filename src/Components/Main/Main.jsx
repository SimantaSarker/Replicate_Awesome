import LeftDiv from "../LeftDiv/LeftDiv";
import RightDiv from "../RightDiv/RightDiv";

const Main = () => {
  
  return (
    //------------- Main Section---------
    <div className="flex  justify-between  max-w-screen-2xl mx-auto p-8 bg-[#F0F1F3] flex-wrap ">
      <div>
        <LeftDiv></LeftDiv>
      </div>
      <div className="w-[80%]">
        <RightDiv></RightDiv>
      </div>
    </div>
  );
};

export default Main;
