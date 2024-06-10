import {
  AbsoluteCenter,
  Divider,
  Text,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import TechStackListComponent from "./ClientProfile/TechStackList";
import ProfilePicture from "../../../../../../public/home/profile-picture.webp";
export default function ProfileComponent() {
  const year = new Date().getFullYear();

  return (
    <Box
      bg={"whitesmoke"}
      boxShadow={"xl"}
      rounded={"xl"}
      p={8}
      w={{ base: "full", sm: "full" }}
      flex={{ base: 1, lg: 1 }}
      display={"flex"}
      flexDir={"column"}
      gap={5}
      overflow={"hidden"}
    >
      <Heading
        textAlign={"center"}
        bgColor={"yellow.400"}
        rounded={"2xl"}
        size={"lg"}
        py={1}
      >
        Profile
      </Heading>
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={5}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box flex={0.5} rounded={"2xl"} overflow={"hidden"}>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            placeholder={"blur"}
          />
        </Box>
        <Flex
          flex={1}
          flexDir={"column"}
          gap={1}
          p={5}
          bgColor={"gray.200"}
          rounded={"2xl"}
          w={"full"}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <Text fontWeight={"bold"} fontSize={{ base: "sm", sm: "md" }}>
                    Name
                  </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>
                    Irfan Kurniawan
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text fontWeight={"bold"} fontSize={{ base: "sm", sm: "md" }}>
                    Age
                  </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>
                    {year - 2004} years old
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text fontWeight={"bold"} fontSize={{ base: "sm", sm: "md" }}>
                    Gender
                  </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>: </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>Male</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text fontWeight={"bold"} fontSize={{ base: "sm", sm: "md" }}>
                    Address
                  </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>
                    Padang, Sumatera Barat
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text fontWeight={"bold"} fontSize={{ base: "sm", sm: "md" }}>
                    Nationality
                  </Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                </td>
                <td>
                  <Text fontSize={{ base: "sm", sm: "md" }}>Indonesia</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>
      <Box position={"relative"} mt={5} mb={5}>
        <Divider borderColor={"yellow.400"} />
        <AbsoluteCenter
          bgColor={"yellow.400"}
          px={4}
          borderRadius={"xl"}
          fontSize={".8em"}
          fontWeight={"50"}
        >
          Tech Stack
        </AbsoluteCenter>
      </Box>
      <TechStackListComponent />
    </Box>
  );
}
