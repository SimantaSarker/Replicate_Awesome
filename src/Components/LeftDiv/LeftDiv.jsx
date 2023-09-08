import LeftStyle from "./LeftStyle";
import "../LeftDiv/LeftStyle.css";
import LeftFeatured from "../LeftFeatured/LeftFeatured";
import LeftCategories from "../LeftCategories/LeftCategories";
const LeftDiv = () => {
  return (
    <div className="space-y-8 left-div">
      <div className="w-60 bg-[#E5DBFF] shadow-xl rounded-xl  h-64 relative">
        <figure className="px-12 pt-6">
          <img src="https://source.unsplash.com/user/c_v_r" alt="" className="rounded border-4 border-white" />
        </figure>
        <div className="text-center  w-[64%] leading-5  border-cyan-300 mx-auto mt-3">
          <p className="filter-hover">
            Adobe Creative Cloud for Teams. Put creativity to work.
          </p>
          <p className="filter-hover mt-3">ads via Carbon</p>
        </div>
        <button
          className="absolute -right-4 -top-4 bg-[#6741D9] circle-hover"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <LeftStyle></LeftStyle>
      <LeftFeatured></LeftFeatured>
      <LeftCategories></LeftCategories>
    </div>
  );
};

export default LeftDiv;
