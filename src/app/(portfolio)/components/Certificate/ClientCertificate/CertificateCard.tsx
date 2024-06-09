"use client";
import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { usePreviewCertificate } from "@/app/utils/Zustand";
import { IoMdEye } from "react-icons/io";
import { useRouter } from "next/navigation";
import type { Certificate } from "../../../../../../public/assets/CertificateList/CertificateList";
import Image from "next/image";

type CertificateCardProps = Certificate;

export default function CertificateCard({
  id,
  img,
  altImg,
  blurDataURL,
}: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const router = useRouter();
  const clickHandle = (id: number) => {
    document.body.style.overflow = "hidden";
    usePreviewCertificate.setState({ previewCertificate: true });
    router.push(`#certificate_${id}`, { scroll: false });
  };

  return (
    <Center
      onClick={() => clickHandle(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
      overflow={"hidden"}
    >
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"xl"}
        rounded={"md"}
        h={"100%"}
      >
        <Box bg={"gray.200"}>
          <Image
            src={img}
            alt={altImg}
            loading="lazy"
            height={283}
            width={445}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          {isHovered && (
            <Box
              className="animate__animated animate__fadeIn animate__faster"
              bgColor={"blackAlpha.700"}
              pos={"absolute"}
              top={0}
              right={0}
              bottom={0}
              display={"flex"}
              left={0}
              color="white"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IoMdEye
                size={40}
                className="animate__animated animate__zoomIn animate__faster"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Center>
  );
}
