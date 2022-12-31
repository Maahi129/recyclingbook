import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from "react"
import img12 from './images/pic1.jpg';
import img13 from './images/pic2.jpg';
import img14 from './images/img.jpg';
import img15 from './images/tree_save.jpg';


import 'swiper/css/autoplay';


function createSlide1() {
  return (
    <SwiperSlide>
      <img className="img" src={img12} alt="" />
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide>
      <img className="img" src={img13} alt="" />
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide>
      <img className="img" src={img14} alt="" />
    </SwiperSlide>
  );
}

function createSlide4() {
  return (
    <SwiperSlide>
      <img className="img" src={img15} alt="" />
    </SwiperSlide>
  );
}


const Slide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
    >
      {createSlide1()}
      {createSlide2()}
      {createSlide3()}
      {createSlide4()}
    </Swiper>
  );
};

export default Slide