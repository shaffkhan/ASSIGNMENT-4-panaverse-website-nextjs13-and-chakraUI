"use client";
import React from "react";

import { Box, Text, Button, Heading } from "@chakra-ui/react";
import Headert from "./../icons/Header";
export default function Header() {
  return (
    <Box
      h={"650px"}
      bgGradient="linear(to-r, #42275a,  #734b6d)"
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      px="100px"
      mt={'150px'}
    >
      <Box>
        <Heading color={"white"} >
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </Heading>
        <Heading as={"h5"} color="white" mt="40px">
          Certified Web 3.0 and Metaverse Developer
        </Heading>
        <Text fontSize={"25px"} color="white" mt="20px">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet Consolidating
          Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
          Computing/IoT, Network Automation, and Bioinformatics Technologies
        </Text>
        <Button
          border={"2px solid white"}
          mt="30px"
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
      <Box>
        <Headert />
      </Box>
    </Box>
  );
}
