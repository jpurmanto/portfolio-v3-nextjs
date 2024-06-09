"use server";
import { Container, Box } from "@chakra-ui/react";
import ContactComponent from "./components/ContactComponent";
export default async function Contact() {
  return (
    <Container maxW={"7xl"}>
      <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <ContactComponent />
      </Box>
    </Container>
  );
}
