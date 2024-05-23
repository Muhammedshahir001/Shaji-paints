import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import aboutImg from "../../images/About-bg.png";
import team from "../../images/Team.png";
import ProductQuality from "../../images/Product Quality.png";
import customerSatisfaction from "../../images/reputation.png";
import banner1 from "../../images/1.jpg";
import aboutLeft from "../../images/Rectangle.png";
import aboutRight from "../../images/Rectangle-2.png";
import whatWeDo from "../../images/Graphic.png";
import menuImage from "../../images/Img 1.png";
import { Link } from "react-router-dom";
import imageInCorner from "../../images/image44.png";
import image45 from "../../images/image45.png";
import image44 from "../../images/image44.png";
import Booking from "../../images/Book A Demo.png";

function Home() {
  const features = [
    {
      title: "Distibution",
      description:
        "Our distribution channel will be our reference to maintain our level of excellence.",
      icon: "🤝", // Placeholder for the icon
      bgColor: "bg-yellow-500",
    },
    {
      title: "Competitive Price",
      description:
        "Point of balance between the profitability and offering a competitive price.",
      icon: "🏷️", // Placeholder for the icon
      bgColor: "bg-pink-500",
    },
    {
      title: "Experience",
      description:
        "More than 30 years of experience in manufacturing printing consumables.",
      icon: "💼", // Placeholder for the icon
      bgColor: "bg-green-500",
    },
    {
      title: "Painting Supplies",
      description:
        "At SHAJI you can buy Original consumables, remanufactured paints & Color Accessories.",
      icon: "🎨", // Placeholder for the icon
      bgColor: "bg-gray-800",
    },
  ];
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
              <div className="banner-content absolute top-0 left-0 right-0 p-8 text-center">
                <h1 className="text-white text-4xl font-bold mb-4 ">
                  Leading Manufacturer Of <br /> Industrial Paints
                </h1>
                <button className="bg-green-700 text-white px-4 py-2 mt-10 rounded-2xl w-60 font-bold">
                  Contact us
                </button>
              </div>

              <img
                src={banner1}
                className="block max-w-full h-auto sm:h-2/4"
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
              Manufactures{" "}
            </h2>
            <div className="md:block flex justify-center">
              <p className=" w-2/3 md:w-full text-lg text-gray-700 mb-4 text-justify">
                Shaji as focused on formulating new materials to meet emerging
                needs. We’re experienced in serving a wide variety of fields,
                not just because of our technical knowledge, but also just from
                having been around so long.
              </p>
            </div>

            <div className="flex lg:px-0 md:px-0   px-16 sm:px-0  flex-col mb-4">
              <div className="flex   items-center mb-2">
                <img src={team} style={{ width: "50px" }} alt="" />
                <p>Team Of Professionals</p>
              </div>
              <div className="flex  items-center mb-2">
                <img src={ProductQuality} style={{ width: "50px" }} alt="" />
                <p>Product Quality</p>
              </div>
              <div className="flex  items-center mb-2">
                <img
                  src={customerSatisfaction}
                  style={{ width: "50px" }}
                  alt=""
                />
                <p>Customer Satisfaction</p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-black text-white px-6 md:px-10 py-2 mt-4 rounded-2xl hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="relative flex flex-wrap justify-center p-6 sm:p-10 md:p-20">
          <img
            src={aboutLeft}
            alt="Background"
            className="absolute top-12 right-4 sm:right-10 md:right-20 lg:right-52 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />

          <img
            src={aboutRight}
            alt="Background"
            className="absolute bottom-10 left-4 sm:left-10 md:left-20 lg:left-52 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />

          {features.map((feature, index) => (
            <div
              key={index}
              className={`m-2 sm:m-4 p-4 sm:p-6 rounded-lg shadow-lg text-white ${feature.bgColor} w-full sm:w-60 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl relative`}
            >
              <div className="flex justify-center w-full mb-2 sm:mb-4">
                {typeof feature.icon === "string" ? (
                  <div className="text-2xl sm:text-3xl">{feature.icon}</div>
                ) : (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center">
                {feature.title}
              </h3>
              <p className="  text-sm sm:text-base text-center">
                {feature.description}
              </p>
              <Link className="mt-2 sm:mt-4 py-1 sm:py-2 px-2 sm:px-4 bg-white text-black rounded">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-green-600 h-auto w-auto flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row w-full max-w-4xl">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center md:items-start p-4">
              <img
                src={whatWeDo}
                alt=""
                className="max-w-full  h-auto rounded  md:-ml-[1px]"
              />
            </div>

            <div className="w-full md:w-1/2 mt-10 md:mt-0 text-white px-4">
              <h1 className="text-3xl font-bold mb-4">
                <span className="sub-heading">What We Do Us</span>
              </h1>
              <p className="text-lg text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate.
              </p>
              <Link
                to="#"
                className="bg-gray-900 text-white px-4 py-2 mt-10 rounded-2xl w-full md:w-60 font-bold text-center block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <section className="counter-section section-gap pt-16">
          <div className="container mx-auto">
            <div className="counter-inner">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48">
                  <div className="counter-wrap">
                    <span className="counter text-4xl text-green-700 font-bold">
                      25
                    </span>
                    <span className="suffix text-2xl text-green-700">+</span>
                  </div>
                  <h6 className="title text-base text-green-700 font-semibold mt-2">
                    Year Of Experience
                  </h6>
                </div>
                <div className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48">
                  <div className="counter-wrap">
                    <span className="counter text-4xl text-green-700 font-bold">
                      182
                    </span>
                    <span className="suffix text-2xl text-green-700">+</span>
                  </div>
                  <h6 className="title text-base text-green-700 font-semibold mt-2">
                    Employees
                  </h6>
                </div>
                <div className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48">
                  <div className="counter-wrap">
                    <span className="counter text-4xl font-bold text-green-700">
                      196
                    </span>
                    <span className="suffix text-2xl text-green-700">+</span>
                  </div>
                  <h6 className="title text-base font-semibold mt-2 text-green-700">
                    Distributors
                  </h6>
                </div>
                <div className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48">
                  <div className="counter-wrap">
                    <span className="counter text-4xl font-bold text-green-700">
                      245
                    </span>
                    <span className="suffix text-2xl text-green-700">+</span>
                  </div>
                  <h6 className="title text-base font-semibold mt-2 text-green-700">
                    Happy Customers
                  </h6>
                </div>
                <div className="counter-item text-center p-4 bg-white shadow-lg rounded-lg w-48">
                  <div className="counter-wrap">
                    <span className="counter text-4xl font-bold text-green-700">
                      18
                    </span>
                    <span className="suffix text-2xl text-green-700">+</span>
                  </div>
                  <h6 className="title text-base font-semibold mt-2 text-green-700">
                    Products
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white h-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-end pt-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-5/6">
            <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
              <h1 className="mb-4 text-3xl md:text-4xl font-extrabold">
                The Manufacturing <br /> Process Of The Shaji <br />{" "}
                <span className="menufacture">Products</span>
              </h1>
              <p className="mb-6 text-sm md:text-base text-justify">
                Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate.
              </p>
              <Link
                to="#"
                className="bg-gray-900 text-white px-4 py-2 mt-10 rounded-2xl w-full md:w-60 font-bold mb-10 text-center block"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-2/3 flex justify-center md:justify-end">
              <img
                src={menuImage}
                alt=""
                className="w-full md:max-w-md object-cover"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center px-4">
          <div className="relative w-full max-w-5xl">
            <img
              className="w-full h-96 rounded-2xl mb-14 md:mr-60"
              src={Booking}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center  items-center">
              {/* Container */}
              <div className="bg-white mb-24 rounded-lg p-6 text-black ml-0 md:ml-[25rem]">
                {/* Heading */}
                <h2 className="text-2xl w-full md:w-64 font-bold mb-4">
                  Need to try our <br />
                  professional paints?
                </h2>
                {/* Button */}
                <Link
                  to="#"
                  className="bg-green-700 text-white px-4 py-2 mt-10 rounded-2xl w-full md:w-60 font-bold text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <img src={image44} alt="" /> */}

        <section className="relative flex justify-center items-center">
          <div className="relative w-full ">
            <img
              src={image45}
              alt=""
              className="w-full h-auto"
              style={{ display: "block" }}
            />
            <div className="absolute inset-0    flex flex-col justify-center items-center text-center p-4 h-">
              <h2 className="text-black md:pt-10 mb-1 -mt-[15px] sm:pt-4 lg:pt-0  lg:text-3xl md:text-2xl sm:text-2xl text-[13px] pt-[52px] font-extrabold leading-tight">
                The Paints Recommended <br /> By Professionals
              </h2>
              <button
                to="#"
                className="bg-gray-900  md:w-28  w-[6rem]  text-[9px] mb-[30px] lg:w-full sm:text-sm sm:mb-10 lg:mb-0 text-white px-4 py-2 mt-1 md:mb-10 lg:mt-8 rounded-2xl max-w-xs md:max-w-md font-bold text-center block"
              >
                Learn More
              </button>
            </div>
            <img
              src={imageInCorner}
              alt=""
              className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
