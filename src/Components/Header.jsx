import { PiFlagDuotone } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto  mt-4 font">
        <div className="navbar bg-base-100">
          <div className="flex-1 justify-evenly">
            <a className="normal-case " style={{ fontSize: "1.7rem" }}>
              <PiFlagDuotone></PiFlagDuotone>
            </a>
            <a className="normal-case ">Start</a>
            <a className="normal-case " style={{ fontSize: "1.5rem" }}>
              <AiOutlineSearch></AiOutlineSearch>
            </a>
            <a className="normal-case ">Icons</a>
            <a className="normal-case ">Docs</a>
            <a className="normal-case ">Plans</a>
            <a className="normal-case ">Support</a>
            <a className="normal-case ">Podcast</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fontSize: "1.5rem" }}
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
