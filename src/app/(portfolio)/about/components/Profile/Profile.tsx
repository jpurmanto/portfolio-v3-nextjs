import {
  AbsoluteCenter,
  Divider,
  Text,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import ProfilePicture from "~/home/profile-picture.webp";
import TechStackPage from "./ServerProfile/TechStackPage";
import TechStackList, {
  type TechStackListProps,
} from "~/assets/TechStackList/TechStackList";
import { getBlur } from "@/app/utils/GetBlur";
import { IconMdOpenInNew } from "@/app/(portfolio)/components/Home/ClientHome/ClientHome";

const ProfileComponent = async () => {
  const techStackUpdateBlur: TechStackListProps[] = await Promise.all(
    TechStackList.map(async (TechStack: any) => {
      const blurData = await getBlur(TechStack.src);
      return {
        ...TechStack,
        blurDataURL: blurData?.base64 || "",
      };
    })
  );
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
        <Box
          flex={{ base: 1, lg: 0.6 }}
          rounded={"2xl"}
          overflow={"hidden"}
          objectFit={"cover"}
          objectPosition={"center"}
        >
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            placeholder={"blur"}
          />
        </Box>
        <Flex
          flex={1}
          gap={1}
          bgColor={"gray.300"}
          rounded={"2xl"}
          w={"full"}
          px={5}
          py={5}
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
                  <Flex
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    gap={{ base: 1, sm: 2 }}
                    as={"a"}
                    target="_blank"
                    href={"https://maps.app.goo.gl/YZYu7uXsfuD94U8FA"}
                  >
                    <Text color={"crimson"} fontSize={{ base: "sm", sm: "md" }}>
                      Padang
                    </Text>
                    <IconMdOpenInNew color={"crimson"} />
                  </Flex>
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
      <TechStackPage techStackList={techStackUpdateBlur} />
    </Box>
  );
};

export default ProfileComponent;
