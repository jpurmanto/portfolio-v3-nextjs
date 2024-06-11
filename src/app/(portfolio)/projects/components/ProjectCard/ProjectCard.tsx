import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { VscPreview } from "react-icons/vsc";
type ProjectCardProps = {
  category: string;
  title: string;
  img: string;
  altImg: string;
  dateFinished: string;
  repository?: string;
  liveView?: string;
};
export default function ProjectCard({
  category,
  title,
  img,
  altImg,
  dateFinished,
  repository,
  liveView,
}: ProjectCardProps) {
  return (
    <Center>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={"white"}
        boxShadow={"xl"}
        rounded={"xl"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"100%"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image src={img} alt={altImg} loading={"lazy"} />
        </Box>
        <Stack>
          <Text
            color={"yellow.400"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {category}
          </Text>
          <Heading
            color={"gray.700"}
            fontSize={{ base: "md", sm: "2xl" }}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Stack direction={"row"}>
            {liveView ? (
              <Button
                leftIcon={<VscPreview />}
                as={Link}
                target={"_blank"}
                href={`${liveView}`}
                colorScheme="yellow"
                fontSize={{ base: "sm", sm: "sm", md: "md" }}
              >
                Preview
              </Button>
            ) : (
              <Button
                leftIcon={<VscPreview />}
                isDisabled
                fontSize={{ base: "sm", sm: "sm", md: "md" }}
              >
                Preview
              </Button>
            )}

            {repository ? (
              <Button
                leftIcon={<FaGithub />}
                as={Link}
                target={"_blank"}
                href={`${repository}`}
                fontSize={{ base: "sm", sm: "sm", md: "md" }}
              >
                Repository
              </Button>
            ) : (
              <Button
                leftIcon={<FaGithub />}
                isDisabled
                fontSize={{ base: "sm", sm: "sm", md: "md" }}
              >
                Repository
              </Button>
            )}
          </Stack>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Text color={"gray.500"}>{dateFinished}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
