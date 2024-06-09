"use server";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";

export default async function AboutComponent() {
  return (
    <Flex
      bg={"whitesmoke"}
      boxShadow={"xl"}
      rounded={"xl"}
      p={8}
      flex={1}
      flexDir={"column"}
      gap={5}
    >
      <Heading
        textAlign={"center"}
        bgColor={"yellow.400"}
        rounded={"2xl"}
        size={"lg"}
        py={1}
      >
        About Me
      </Heading>
      <Text as={"p"} textAlign={"left"} lineHeight={"1.5em"}>
        Greetings! I&apos;m <b>Irfan Kurniawan Suthiono</b>, an enthusiastic
        React developer diving into the world of front-end and back-end
        development. As a passionate learner in the field, I&apos;m on a journey
        to master the art of crafting engaging and responsive user interfaces
        using React. Driven by curiosity and a thirst for knowledge, I&apos;m
        exploring the dynamic landscape of web development and honing my skills
        in building modern, user-friendly interfaces. My journey as a React
        developer is just beginning, and I&apos;m excited about the endless
        possibilities for growth and innovation in this ever-evolving field.
        Join me on this learning adventure, where every line of code is a step
        towards creating seamless and visually appealing front-end experiences.
      </Text>
      <Box display={"flex"} justifyContent={"flex-end"} w={"full"}>
        <Button
          fontSize={{ base: "sm", sm: "md" }}
          as={Link}
          href="/projects"
          w={{ base: "50%", md: "50%", lg: "40%" }}
          colorScheme={"yellow"}
          rounded={"xl"}
          leftIcon={<GrProjects />}
        >
          My Portfolio
        </Button>
      </Box>
    </Flex>
  );
}
