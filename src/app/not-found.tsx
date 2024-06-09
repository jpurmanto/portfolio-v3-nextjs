import NotFoundComponent from "./(portfolio)/components/Error/NotFoundComponent";
import { Container, Box } from "@chakra-ui/react";
export default function notFound() {
  return (
    <Container
      w={"100vw"}
      h={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <NotFoundComponent />
      </Box>
    </Container>
  );
}
