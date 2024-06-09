"use server";
import { Container, Flex } from "@chakra-ui/react";
import ProfileComponent from "./components/Profile/Profile";
import AboutComponent from "./components/About/About";
export default async function About() {
  return (
    <Container maxW={"7xl"} userSelect={"none"}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={10}
        className="animate__animated animate__fadeIn"
      >
        <ProfileComponent />
        <AboutComponent />
      </Flex>
    </Container>
  );
}
