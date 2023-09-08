import { PiFlagDuotone } from "react-icons/pi";
import { AiFillHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#183153] ">
      <div className="flex justify-around items-center p-10  text-white max-w-7xl mx-auto">
        <div className="space-y-3">
          <PiFlagDuotone style={{ fontSize: "2rem" }}></PiFlagDuotone>
          <h1 className="font-bold">Go Make Something Awesome</h1>
          <p className="w-[400px]">
            Font Awesome is the internet s icon library and toolkit used by
            millions of designers, developers, and content creators.
          </p>

          <p className="w-[420px] flex  justify-center">
            Made with
            <AiFillHeart style={{ fontSize: "30px" }} className="ms-1 me-1" />
            and in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas
            City, Seattle, Tampa, and Vergennes.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 justify-around ">
          <div className="flex gap-8  justify-around w-full">
            <div className="flex flex-col space-y-2">
              <header className="footer-title  ">Project</header>
              <a className="footer-hover">Download</a>
              <a className=" footer-hover">Changelog</a>
              <a className=" footer-hover ">Commission Icons</a>
              <a className=" footer-hover">All Versions</a>
            </div>
            <div className="flex flex-col space-y-2">
              <header className="footer-title">Community</header>
              <a className="footer-hover text-lg">Github</a>
              <a className="footer-hover">Icon Requests</a>
              <a className="footer-hover">Twitter</a>
              <a className="footer-hover">Blog Awesome</a>
            </div>
            <div className="flex flex-col space-y-2">
              <header className="footer-title">Help</header>
              <a className="footer-hover">Support</a>
              <a className="footer-hover">Troubleshooting</a>
              <a className="footer-hover">Contact Us</a>
              <a className="footer-hover">Status</a>
            </div>
          </div>
          <div className="flex gap-3 justify-evenly ">
            <p className="footer-hover">License</p>
            <p className="footer-hover">Terms of Service</p>
            <p className="footer-hover">Privacy Policy</p>
            <p className="footer-hover">Refunds</p>
            <p>&#169; Fonticons, Inc.</p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
