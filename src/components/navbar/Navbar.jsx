import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      {/* <Sidebar/> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nitheshwar K R
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/nitheshwar_117?igsh=MXJkbnoyM3BidWsxNw==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nitheshwar-k-r-583678190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/Linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
