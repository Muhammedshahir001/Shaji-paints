import React, { useEffect, useState } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import aboutImg from "../../images/About-bg.png";
import team from "../../images/Team.png";
import ProductQuality from "../../images/Product Quality.png";
import customerSatisfaction from "../../images/reputation.png";
import banner1 from "../../images/banner-new.jpg";
import aboutLeft from "../../images/image25.png";
import aboutRight from "../../images/Rectangle-2.png";
import whatWeDo from "../../images/Graphic.png";
import menuImage from "../../images/Img 1.png";
import { Link } from "react-router-dom";
import imageInCorner from "../../images/image44.png";
import image45 from "../../images/image45.png";
// import image44 from "../../images/image44.png";
import image26 from "../../images/image26.png";
import image27 from "../../images/image27.png";
import image28 from "../../images/image28.png";
import image29 from "../../images/image29.png";
import Booking from "../../images/Book A Demo.png";
import { FaArrowRight } from "react-icons/fa";
import stroke from  "../../images/Stroke.png"
import { FaPlus } from "react-icons/fa";

function Home() {
  const features = [
    {
      title: "Distibution",
      description:
        "Our distribution channel will be our reference to maintain our level of excellence.",
      icon: image26,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Competitive Price",
      description:
        "Point of balance between the profitability and offering a competitive price.",
      icon: image27,
      bgColor: "bg-pink-600",
    },
    {
      title: "Experience",
      description:
        "More than 30 years of experience in manufacturing printing consumables.",
      icon: image28,
      bgColor: "bg-green-700",
    },
    {
      title: "Painting Supplies",
      description:
        "At SHAJI you can buy Original consumables, remanufactured paints & Color Accessories.",
      icon: image29,
      bgColor: "bg-black",
    },
  ];
  const countersData = [
    { id: 1, target: 25, title: "Year Of Experience" },
    { id: 2, target: 182, title: "Employees" },
    { id: 3, target: 196, title: "Distributors" },
    { id: 4, target: 245, title: "Happy Customers" },
    { id: 5, target: 18, title: "Products" },
  ];

  const [counters, setCounters] = useState(
    countersData.map((counter) => ({ ...counter, value: 0 }))
  );

  useEffect(() => {
    const updateCount = () => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          const { target, value } = counter;
          const speed = 200;
          const increment = target / speed;

          if (value < target) {
            return { ...counter, value: Math.min(value + increment, target) };
          }
          return counter;
        })
      );
    };

    const interval = setInterval(updateCount, 30);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      {/* Banner  */}
      <div className="mx-auto w-svw overflow-x-hidden">
        <div
          id="carouselExampleControls"
          className="relative"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
              data-twe-carousel-active
            >
              <div className="banner-content absolute top-0 left-0 right-0 p-4 sm:p-8 text-center">
                <h1 className="text-white text-xl sm:text-4xl font-bold mb-2 sm:mb-4">
                  Leading Manufacturer Of <br className="hidden sm:block" />{" "}
                  Industrial Paints
                </h1>
                <p className="text-white   font-semibold text-[10px] sm:text-lg md:text-xl lg:text-2xl xl:text-sm">
                  More than 30 years of experience in paint manufacturing.
                </p>
                <button className="bg-green-700 shadow-black text-white px-4 py-2 mt-6 sm:mt-10 rounded-2xl w-40 sm:w-60 font-bold">
                  Contact us
                </button>
              </div>
              <img
                src={banner1}
                className="block max-w-full h-auto"
                alt="Wild Landscape"
              />
            </div>
          </div>
        </div>

        {/* About started */}
        <div className="flex flex-col md:flex-row items-center md:items-start pt-8 md:pt-28 pl-4 lg:pl-28 rounded-lg">
          <div className="lg:w-1/2 md:w-2/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full  h-auto lg:pl-40  md:max-w-full md:ml-4"
            />
          </div>
          <div className="md:w-1/2 md:ml-4  text-center md:text-left md:pl-6">
            <h4 className="text-lg font-bold mb-2 text-slate-700">About Us</h4>
            <h2 className="text-2xl font-bold mb-2">
              <span className="about-heading">SHAJI Paint</span> <br />{" "}
              <img className="pl-28  xl:pl-0" src={stroke} alt="" style={{ marginTop: 1 }} />
              Manufactures{" "}
            </h2>

            <div className="md:block flex justify-center">
              <p className="w-2/3 text-sm text-gray-700 mb-4 flex text-left">
                Shaji as focused on formulating new materials to meet emerging
                needs. We’re experienced in serving a wide variety of fields,
                not just because of our technical knowledge, but also just from
                having been around so long.
              </p>
            </div>

            <div className="flex lg:px-0 md:px-0 px-12 sm:px-0 flex-col mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={team}
                  className="w-12   sm:w-12 icon-img"
                  alt="Team"
                />
                <p className="font-bold ml-2 text-sm sm:text-base">
                  Team Of Professionals
                </p>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={ProductQuality}
                  className="w-12 sm:w-12 icon-img"
                  alt="Product Quality"
                />
                <p className="font-bold ml-2 text-sm sm:text-base">
                  Product Quality
                </p>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={customerSatisfaction}
                  className="w-12 sm:w-12 icon-img"
                  alt="Customer Satisfaction"
                />
                <p className="font-bold ml-2 text-sm sm:text-base">
                  Customer Satisfaction
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-black text-white  shadow-black px-6 md:px-10 py-2 mt-4 rounded-3xl  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="relative flex flex-wrap justify-center p-6 sm:p-10 md:p-20">
          <img
            src={aboutLeft}
            alt="Background"
            className="absolute top-1 right-4 sm:right-10 md:right-20 lg:right-40  w-52  h-48 sm:w-20 sm:h-20 md:w-60 md:h-48 left-image"
          />

          <img
            src={aboutRight}
            alt="Background"
            className="absolute -bottom-0 -left-4 sm:left-10 md:left-20 lg:left-40 w-52 h-48 sm:w-20 sm:h-20 md:w-60 md:h-48 right-image"
          />

          {features.map((feature, index) => (
            <div
              key={index}
              className={`m-2 sm:m-4 p-4 sm:p-6 rounded-lg shadow-lg text-white ${feature.bgColor}   w-60  h-64 sm:w-60 sm:h-72 flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-xl relative`}
            >
              <div className="flex justify-center w-full mb-2 sm:mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-13  sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-lg sm:text-base font-bold mb-1 sm:mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-xs sm:text- text-center">
                {feature.description}
              </p>

              <Link
                href="#"
                className="mt-2 sm:mt-4 py-1 sm:py-2 px-2 sm:px-4 bg-transparent shadow-md text-black rounded-full flex items-center justify-center"
              >
                <div
                  style={{
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "9px",
                  }}
                >
                  <FaArrowRight className="right-arrow" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-bannerImg h-fit bg-no-repeat bg-cover w-auto flex items-center justify-center lg:p-32  p-4">
          <div className="flex flex-col md:flex-row w-full max-w-4xl">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center md:items-start p-4">
              <img
                src={whatWeDo}
                alt=""
                className="max-w-full  h-auto rounded lg:-ml-[129px]  md:-ml-[1px]"
              />
            </div>

            <div className="w-full md:w-1/2 mt-10 md:mt-20 text-white px-4">
              <h1 className="lg:text-4xl md:text-3xl sm:text-base text-3xl font-bold ">
                <span className="sub-heading">What We Do Us</span>
              </h1>
              <img src={stroke} alt="" style={{ marginTop: 1 }} />

              <p className="text-base md:text-sm  lg:text-left mt-6  about-section">
                Welcome to ShajiPaints, where colors come to life and your
                imagination takes center stage. As a leading paint company, we
                are dedicated to transforming spaces and enhancing your
                surroundings with a palette of vibrant hues and top-notch paint
                solutions.
                <br />
                <br />
                Welcome to ShajiPaints, where colors come to life and your
                imagination takes center stage. As a leading paint company, we
                are dedicated to transforming.
              </p>
              <div>
                <Link
                  to="#"
                  className="bg-gray-900 text-white px-4 py-2 mt-6  shadow-black mb-20 rounded-2xl w-full md:w-60 font-bold text-center block" // Changed mt-32 to mt-6
                  style={{ display: "block" }} // Ensuring the link is displayed as a block element
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="counter-section section-gap pt-16">
          <div className="container mx-auto">
            <div className="counter-inner">
              <div className="flex flex-wrap justify-center gap-6">
                {counters.map(({ id, value, target, title }) => (
                  <div
                    key={id}
                    className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48"
                  >
                    <div className="counter-wrap flex justify-center items-center">
                      <span className="counter text-4xl text-green-700 font-bold">
                        {Math.ceil(value)}
                      </span>
                      <span className="suffix text-2xl text-green-700 ml-2">
                        <FaPlus />
                      </span>
                    </div>
                    <h6 className="title text-base text-black font-semibold mt-2">
                      {title}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white h-auto w-full flex flex-col md:ml-5 md:flex-row items-center justify-center md:justify-end pt-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-5/6">
            <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
              <h1 className="mb-4 text-3xl md:text-4xl font-extrabold">
                The Manufacturing <br /> Process Of The Shaji <br />{" "}
                <span className="menufacture">Products</span>
              </h1>
              <div>
                <p className="mb-6 text-sm md:text-base">
                  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
              <Link
                to="#"
                className="bg-gray-900 text-white px-4 py-2  shadow-black mt-10 rounded-2xl w-full md:w-60 font-bold mb-10 text-center block shadow-md"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-2/3 flex justify-center md:justify-end">
              <img
                src={menuImage}
                alt=""
                className="w-full  pb-10 md:max-w-md object-cover " // Adjusted width here
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  marginBottom: "30px",
                }} // Ensure image responsiveness
              />
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center px-4">
          <div className="relative w-full max-w-5xl">
            <img
              className=" w-full lg:h-96 h-80 rounded-2xl mb-14 md:mr-60"
              src={Booking}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center  items-center">
              {/* Container */}
              <div className="bg-white shadow-black lg:mb-24  rounded-lg lg:p-6 p-3 text-black ml-0 md:ml-[25rem]">
                {/* Heading */}
                <h2 className="text-2xl w-full md:w-64 font-bold mb-4">
                  Need to try our <br />
                  professional paints?
                </h2>
                {/* Button */}
                <Link
                  to="#"
                  className="bg-green-700 shadow-black text-white px-4 py-2 mt-10 rounded-2xl w-full md:w-60 font-bold text-center block"
                >
                  Book A Demo 
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <img src={image44} alt="" /> */}

        <section className="relative flex justify-center items-center">
          <div className="relative w-full">
            <img
              src={image45}
              alt=""
              className="w-full lg:h-auto h-28 mb-3  button-img"
              style={{ display: "block" }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-black mb-1  md:pt-10 lg:pt-0 lg:text-3xl md:text-2xl  text-[13px] sm:text-base font-extrabold leading-tight pt-4 sm:pt-0 custom-heading">
                The Paints Recommended <br /> By Professionals
              </h2>
              <button
                to="#"
                className="bg-gray-900 shadow-black text-white px-4 py-2 mt-1 mb-4 sm:mb-10 md:mb-10 lg:mt-8 rounded-2xl w-[6rem] md:w-48 lg:w-full sm:text-sm text-[9px]  font-bold text-center block max-w-xs md:max-w-md custom-button"
              >
                Become A Distributor
              </button>
            </div>
            <img
              src={imageInCorner}
              alt=""
              className="absolute -top-10 left-0 w-12 h-12 md:w-16 md:h-16  "
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
