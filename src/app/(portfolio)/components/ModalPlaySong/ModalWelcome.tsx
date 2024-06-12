"use client";
import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedTextWord from "./AnimatedWelcomeText/AnimatedWelcomeText";
import { MdOpenInNew } from "react-icons/md";
import { TbMusicOff, TbMusic } from "react-icons/tb";
export default function ModalWelcome() {
  const [isShowed, setIsShowed] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsAudioPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isAudioPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (!isShowed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowed]);

  return (
    <>
      {isShowed == false && (
        <MotionFlex
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          bgColor={"blackAlpha.800"}
          position={"fixed"}
          zIndex={999999}
          justifyContent={"center"}
          alignItems={"center"}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <MotionFlex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            w={{ base: "80vw", sm: "60vw", md: "40vw", lg: "30vw" }}
            backdropFilter={"blur(16px) saturate(180%)"}
            bgColor={"rgba(255, 255, 255, 0.75)"}
            borderRadius={"12px"}
            py={8}
            overflow={"hidden"}
          >
            <MotionBox color="black" fontWeight={"bold"} textAlign={"center"}>
              <AnimatedTextWord
                text={"Welcome To My Portfolio"}
                fontSize={{ base: "xl" }}
              />
            </MotionBox>
            <MotionFlex
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
              mt={4}
              w={"full"}
              as={"a"}
              href="https://www.youtube.com/watch?v=jVmpzWwWU00&ab_channel=VannySothea"
              target={"_blank"}
            >
              <MotionText fontWeight={"bold"} color="gray.500">
                Song Credit
              </MotionText>
              <Icon as={MdOpenInNew} size={24} />
            </MotionFlex>
            <MotionFlex gap={5} justifyContent={"center"} mt={4}>
              <MotionButton
                size={{ base: "lg" }}
                onClick={() => {
                  playAudio();
                  setIsShowed(true);
                }}
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                colorScheme="yellow"
              >
                <Icon as={TbMusic} size={24} />
              </MotionButton>
              <MotionButton
                size={{ base: "lg" }}
                onClick={() => setIsShowed(true)}
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                colorScheme="red"
              >
                <Icon as={TbMusicOff} size={24} />
              </MotionButton>
            </MotionFlex>
          </MotionFlex>
        </MotionFlex>
      )}
      <audio
        ref={audioRef}
        src={"/audio/song.mp3"}
        loop
        style={{ display: "none" }}
      />
    </>
  );
}
