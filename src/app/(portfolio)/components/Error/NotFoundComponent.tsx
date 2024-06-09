import { Box } from "@chakra-ui/react";
import FramerMotion from "./ClientError/framerMotion";
const NotFoundComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url(/images/background.jpg)"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <FramerMotion />
    </Box>
  );
};

export default NotFoundComponent;
