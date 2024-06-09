"use client";
import TechStackList from "../../../../../../../public/assets/TechStackList/TechStackList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
export default function TechStackListComponent() {
  return (
    <Box rounded={"xl"} w={"full"} overflow={"hidden"}>
      <Swiper
        slidesPerView={useBreakpointValue({ base: 3, md: 4, lg: 5 })}
        spaceBetween={30}
        autoplay={{
          delay: 250,
          disableOnInteraction: false,
        }}
        style={{ display: "flex", flexWrap: "wrap" }}
        modules={[Autoplay]}
        loop={true}
      >
        {TechStackList.map((item, index) => (
          <SwiperSlide
            key={index}
            className="animate__animated animate__fadeIn"
          >
            <Image src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
