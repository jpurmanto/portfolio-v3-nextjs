"use client";
import { Box, Flex, Image as ImageChakra } from "@chakra-ui/react";
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
  const MotionFlex = motion(Flex);

  const containerID = `container_${id}`;
  const containerFlexID = `containerFlex_${id}`;
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
        layoutId={containerFlexID}
        whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
      >
        <MotionBox
          borderRadius={"xl"}
          overflow={"hidden !important"}
          alignItems={"center"}
          layoutId={containerID}
          justifyContent={"center"}
        >
          <MotionImageNextJS
            layoutId={id.toString()}
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
            bgColor={"rgba(0,0,0,0.8)"}
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
            <MotionBox
              borderRadius={"xl"}
              overflow={"hidden !important"}
              alignItems={"center"}
              justifyContent={"center"}
              layoutId={containerID}
              ref={ref}
              bgColor={"gray"}
              width={{ base: "90vw", xl: "120vh" }}
            >
              <MotionImageNextJS
                layoutId={id.toString()}
                src={img}
                alt={altImg}
                placeholder="blur"
                height={849}
                width={1335}
                blurDataURL={blurDataURL}
              />
            </MotionBox>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
}
