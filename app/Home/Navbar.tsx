"use client"
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Logo from "../icons/Logo";
export default function Navbar() {
  return (
    <Box
      bg={"black"}
      display={"flex"}
      justifyContent="space-between"
      px={"100px"}
      py={"50px"}
      position='fixed'
      zIndex={'2'}
      width={'100%'}
      top='0px'
     
    >
      <Box display={"flex"} gap="200px" alignItems={"center"}>
        <Box display="flex" alignItems={"center"} gap="20px">
          <Logo />
          <Text fontSize={"30px"} fontWeight={"bold"} color="white">
            Panaverse DAO
          </Text>
        </Box>
        <Box display={"flex"} gap="50px">
          <Text fontSize={"18px"} fontWeight={"bold"} color="white">
            Home
          </Text>
          <Text fontSize={"18px"} fontWeight={"bold"} color="white">
            About
          </Text>
          <Text fontSize={"18px"} fontWeight={"bold"} color="white">
            Courses
          </Text>
        </Box>
      </Box>
      <Box>
        <Button
          color="white"
          width="200px"
          h={"50px"}
          px="24px"
          py={"15px"}
          bgGradient="linear(to-r, #42275a,  #734b6d)"
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
}
