import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const routeChange_web = () => {
    let path = `https://wolferstech.com/website.html`;
    window.location.href = path;
  };

  const routeChange_degi = () => {
    let path = `https://wolferstech.com/Digital%20Marketing.html`;
    window.location.href = path;
  };

  const routeChange_aplication = () => {
    let path = `https://wolferstech.com/Application.html`;
    window.location.href = path;
  };

  const routeChange_branding = () => {
    let path = `https://wolferstech.com/branding.html`;
    window.location.href = path;
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>We Turn Your Idead Into Scalable StartUp!</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>AI</motion.b> For
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>EveryOne</motion.b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website</h2>
          <p>
            We produce stunningly attractive websites that perform for you.
            Websites including Professional, Small Business, Brochure,
            E-commerce, Photography, School, Wholesaler, Government, Arts, Food
            Service, Start-Up…etc.
          </p>
          <button onClick={routeChange_web}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Digital Marketing Services</h2>
          <p>
            The goal of digital marketing is simple - grow your business through
            online marketing and advertising strategies. These strategies
            revolve around digital technologies, from search engine optimization
            to social media marketing and more.
          </p>
          <button onClick={routeChange_degi}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Android App Development</h2>
          <p>
            Android/IOS app can help you stay competitive but creating it puts a
            big strain on your teams. And off-the-shelf options never do exactly
            what you need them to. We build exactly what you want with
            guaranteed costs and all your timings, before you start.
          </p>
          <button onClick={routeChange_aplication}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personal Branding/Business Branding</h2>
          <p>
            Branding allows you to build relationships with your audience, which
            can eventually turn them into loyal customers. You can create a
            brand that people actually care about and put yourself ahead of
            businesses that aren't using this to their advantage.
          </p>
          <button onClick={routeChange_branding}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
