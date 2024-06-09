"use client";
import Link from "next/link";
import { Flex, Icon, Button, Text } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { usePathname } from "next/navigation";

export default function ClientNavbar() {
  const location = usePathname();
  const buttonList = [
    {
      name: "Home",
      icon: IoHomeOutline,
      path: "/",
    },
    {
      name: "About",
      icon: CgProfile,
      path: "/about",
    },
    {
      name: "Projects",
      icon: GrProjects,
      path: "/projects",
    },
    {
      name: "Contact",
      icon: FiPhone,
      path: "/contact",
    },
  ];
  return buttonList.map((item) => (
    <Button
      key={item.name}
      as={Link}
      href={item.path}
      boxShadow={"2xl"}
      rounded={"xl"}
      bgColor={location === item.path ? "yellow.400" : "gray.200"}
      _hover={{ base: { opacity: 1 }, xl: { opacity: 0.6 } }}
    >
      <Flex alignItems={"center"} gap={2}>
        <Icon as={item.icon} />
        <Text display={{ base: "none", sm: "block" }}>{item.name}</Text>
      </Flex>
    </Button>
  ));
}
