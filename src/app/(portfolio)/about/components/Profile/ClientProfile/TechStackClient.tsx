// components/TechStackClient.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

type TechStackListProps = {
  src: string;
  alt: string;
  blurDataURL?: string;
};

type TechStackListComponentProps = {
  techStackList: TechStackListProps[];
};

const TechStackListComponent = ({
  techStackList,
}: TechStackListComponentProps) => {
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
        {techStackList.map((item, index) => (
          <SwiperSlide
            key={index}
            className="animate__animated animate__fadeIn"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={96}
              height={96}
              blurDataURL={item.blurDataURL}
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TechStackListComponent;
