import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Marquee from "react-fast-marquee";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

import { FreeMode, Pagination } from "swiper/modules";
const InnerCards = () => {
  return (
    <div className="m-10 ">
      <div className="flex justify-center p-5 md:mt-20 md:mb-20">
        <img
          src="https://theaisle.qodeinteractive.com/wp-content/uploads/2018/10/section-title-img-1.png"
          alt=""
          srcset=""
        />

        <h1 className="text-3xl md:text-6xl invetations text-gray-500">
          Our Best Work
        </h1>
      </div>
      <>
        {/* <Marquee> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
              className="shadow-2xl p-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3770883/pexels-photo-3770883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3935317/pexels-photo-3935317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3316918/pexels-photo-3316918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/269252/pexels-photo-269252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.themeslide.com/2019/10/24132049/isabella-wedding-planner-html-template_5db157d99de8b.jpeg"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2133095/pexels-photo-2133095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="shadow-2xl"
            />
          </SwiperSlide>
        </Swiper>
        {/* </Marquee> */}
      </>
    </div>
  );
};

export default InnerCards;
