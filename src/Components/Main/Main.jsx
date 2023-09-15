import LeftDiv from "../LeftDiv/LeftDiv";
import RightDiv from "../RightDiv/RightDiv";

const Main = ({data,filteredObjects,styleFilterOption}) => {

  return (
    <div>
      {/*--------------- Main Section------------*/}

      <div className="flex  justify-between  max-w-screen-2xl mx-auto p-8 bg-[#F0F1F3] flex-wrap ">
        <div>
          <LeftDiv styleFilterOption={styleFilterOption}></LeftDiv>
        </div>
        <div className="w-[80%]">
          {/* <RightDiv filteredObjects={filteredObjects}></RightDiv> */}
          <RightDiv data={data}  filteredObjects={filteredObjects}></RightDiv>
        </div>
      </div>
    </div>
  );
};

export default Main;
