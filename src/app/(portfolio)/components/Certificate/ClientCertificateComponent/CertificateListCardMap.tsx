"use client";
import CertificateList from "~/assets/CertificateList/CertificateList";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CertificatePreviewList from "~/assets/CertificateList/CertificatPreviewList";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

export default function CertificateListCardMap() {
  const MotionBox = motion(Box);
  const reversedCertificatePreviewList =
    CertificatePreviewList.slice().reverse();

  const itemVariants = (index: number) => {
    return {
      hidden: { opacity: 0, y: 50 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
        delay: 0.05 * index,
      },
    };
  };

  return (
    <PhotoProvider>
      {CertificateList.slice()
        .reverse()
        .map((certificate, index) => (
          <MotionBox
            key={index + 1}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1 }}
            custom={index}
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
    </PhotoProvider>
  );
}
