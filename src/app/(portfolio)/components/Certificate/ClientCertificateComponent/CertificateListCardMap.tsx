"use client";
import CertificateList from "~/assets/CertificateList/CertificateList";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CertificatePreviewList from "~/assets/CertificateList/CertificatPreviewList";
import "react-photo-view/dist/react-photo-view.css";
import { delay, motion } from "framer-motion";

export default function CertificateListCardMap() {
  const MotionBox = motion(Box);
  const MotionPhotoProvider = motion(PhotoProvider);
  const reversedCertificatePreviewList =
    CertificatePreviewList.slice().reverse();

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <MotionPhotoProvider>
      {CertificateList.slice()
        .reverse()
        .map((certificate, index) => (
          <MotionBox
            rounded={"md"}
            overflow={"hidden"}
            key={index + 1}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <PhotoView src={reversedCertificatePreviewList[index].img}>
              <Image
                placeholder="blur"
                loading="lazy"
                alt={`Certificate ${index + 1}`}
                height={283}
                width={445}
                src={certificate}
              />
            </PhotoView>
          </MotionBox>
        ))}
    </MotionPhotoProvider>
  );
}
