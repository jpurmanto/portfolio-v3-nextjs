"use client";
import { useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export default function Modal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const router = useRouter();
  useOnClickOutside(ref, () => {
    router.back();
  });

  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
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
      bgColor={"rgba(0,0,0,0.8)"}
      zIndex={999}
    >
      <Flex
        ref={ref}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {children}
      </Flex>
    </Box>
  );
}
