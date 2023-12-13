import React from "react";
import "./style.css";

const Invetations = () => {
  return (
    <div className="flex justify-center items-center m-10 md:text-right bg-gray-100 rounded-md p-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="tracking-[.25em] text-4xl text-gray-600 font-light">
            About Us
          </h1>
          <p className="invetations text-2xl mt-4 mb-4 text-gray-600 font-semibold">
            Here We are Available
          </p>
          <p className="text-gray-600 font-light md:text-xl">
            Founded in [Year], [Your Company/Builder Name] has grown from its
            humble beginnings to become a trusted name in the industry. Our
            journey is marked by a portfolio of successful projects, satisfied
            clients, and a team that shares a passion for excellence.
          </p>
        </div>
        <div className="shadow-xl">
          <img
            src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Invetations;
