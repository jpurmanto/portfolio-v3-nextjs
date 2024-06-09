import { Box, Flex, HStack } from "@chakra-ui/react";
import ClientNavbar from "./ClientComponent/ClientNavbar";
export const NavbarComponent = () => {
  return (
    <Box py={5} w={"100%"}>
      <Flex minH={"60px"} justifyContent={"center"} alignItems={"center"}>
        <Box
          backdropFilter={"blur(10px), saturate(180%)"}
          bg={"whiteAlpha.900"}
          boxShadow={"lg"}
          p={{ base: 5, sm: 4 }}
          rounded={"2xl"}
          pos={"fixed"}
          zIndex={999}
          className={"animate__animated animate__fadeInDown animate__once"}
        >
          <HStack justifyContent={"center"} gap={5}>
            <ClientNavbar />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
