"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Image as ImageChakra } from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Certificate } from "~/assets/CertificateList/CertificateList";
import { useState, useEffect, useRef } from "react";
type CertificateCardProps = Certificate;
import { useOnClickOutside } from "usehooks-ts";
export default function CertificateCard({
  id,
  img,
  altImg,
  blurDataURL,
}: CertificateCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setSelectedId(null);
  });

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  const MotionImageNextJS = motion(Image);
  const MotionBox = motion(Box);
  const MotionImageChakra = motion(ImageChakra);
  const MotionFlex = motion(Flex);

  const containerID = `container_${id}`;
  return (
    <>
      <MotionFlex
        onClick={() => setSelectedId(id.toString())}
        justifyContent={"center"}
        alignItems={"center"}
        _hover={{
          cursor: "pointer",
        }}
        filter={"grayscale(100%)"}
        layoutId={containerID}
        whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
      >
        <MotionBox
          maxW={445}
          borderRadius={"xl"}
          overflow={"hidden !important"}
          layoutId={id.toString()}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <MotionImageNextJS
            src={img}
            alt={altImg}
            loading="lazy"
            height={283}
            width={445}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </MotionBox>
      </MotionFlex>
      <AnimatePresence>
        {selectedId === id.toString() && (
          <MotionFlex
            initial={{ backgroundColor: "transparent" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            layoutId={containerID}
            userSelect={"none"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            pos={"fixed"}
            alignItems={"center"}
            justifyContent={"center"}
            zIndex={9999}
          >
            <MotionImageChakra
              ref={ref}
              src={img}
              alt={altImg}
              width={{ base: "90vw", xl: "120vh" }}
              layoutId={id.toString()}
            />
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
}
