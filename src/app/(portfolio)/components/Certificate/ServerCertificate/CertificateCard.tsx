"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Image as ImageChakra } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Certificate } from "~/assets/CertificateList/CertificateList";
import { useState, useEffect } from "react";
type CertificateCardProps = Certificate;

export default function CertificateCard({
  id,
  img,
  altImg,
  blurDataURL,
}: CertificateCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  const MotionImageChakra = motion(ImageChakra);
  const MotionFlex = motion(Flex);
  return (
    <>
      <MotionFlex
        onClick={() => setSelectedId(id.toString())}
        layoutId={id.toString()}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          maxW={445}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            filter: "grayscale(0%)",
          }}
          filter={"grayscale(100%)"}
          transition={"all 0.5s ease"}
          borderRadius={"xl"}
          overflow={"hidden !important"}
        >
          <Image
            src={img}
            alt={altImg}
            loading="lazy"
            height={283}
            width={445}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </Box>
      </MotionFlex>
      <AnimatePresence>
        {selectedId === id.toString() && (
          <MotionFlex
            userSelect={"none"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            pos={"fixed"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            zIndex={999}
            onClick={() => setSelectedId(null)}
            bgColor={"rgba(0,0,0,0.8)"}
          >
            <MotionImageChakra
              layoutId={id.toString()}
              src={img}
              alt={altImg}
              width={{ base: "90vw", xl: "120vh" }}
            />
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
}
