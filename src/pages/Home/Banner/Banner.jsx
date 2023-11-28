import "./Banner.css";
import banner1 from "../../../assets/img/banner/banner1.jpg";
import banner2 from "../../../assets/img/banner/banner2.jpg";
import { FaHandPointRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="hero relative w-full  min-h-screen  ">
      <div className="overlay"></div>
      <div className="bg-img"></div>
      <div className="hero-content  text-center text-neutral-content relative z-20">
        <div className="max-w-2xl mt-10 md:mt-4">
          <h1 className="mb-1 md:mb-2   md:text-3xl  font-semibold text-white">
            Welcome To Recipe World
          </h1>
          <p className="mb-2 md:mb-5 text-center md:text-base text-white flex items-center gap-2 justify-center">
            <span className="flex items-center text-3xl  md:text-6xl font-bold gap-2 md:gap-4">
              Menu <FaHandPointRight />{" "}
            </span>
            <span className="text-3xl md:text-6xl changingContent font-bold"></span>
          </p>
          <p className="text-sm md:text-lg text-center  md:mt-4 mb-6 md:mb-10">
            Savor the extraordinary with our menu, a culinary journey of
            innovative dishes that celebrate the art of fine dining.
          </p>
          <button className="btn bg-primary-color border-none text-white md:text-lg md:font-semibold hover:bg-white hover:text-primary-color rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
