"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carousel() {
  const imagenes = [1, 2, 3, 4, 5];

  const swiperRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  //crear un estado con el nombre index y un valor 0

  const itemClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
        navigation={true}
        modules={[Navigation]}
        className=" !pt-10 !select-none"
      >
        {imagenes.map((imagen) => (
          <SwiperSlide
            key={imagen}
            className=" w-full !flex  justify-center }  "
          >
            <div className="w-full  max-w-4xl aspect-[5/3] overflow-hidden rounded-xl bg-slate-100">
              <Image
                className="w-full h-full object-cover"
                src={`/casa${imagen}.PNG`}
                alt="imagen"
                width={500}
                height={300}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" w-full flex justify-center py-2 select-none">
        <div className="w-full max-w-4xl flex space-x-2 ">
          {imagenes.map((imagen, index) => (
            <div
              onClick={() => itemClick(index)}
              key={index}
              className={` cursor-pointer  flex-1 aspect-[5/3] overflow-hidden rounded-lg bg-slate-100 ${
                index === currentSlide ? "opacity-100 shadow-lg" : "opacity-50"
              }`}
            >
              <Image
                className="w-full h-full object-cover"
                src={`/casa${imagen}.PNG`}
                alt="imagen"
                width={100}
                height={60}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
