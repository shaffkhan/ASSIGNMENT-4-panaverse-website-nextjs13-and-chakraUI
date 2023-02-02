"use client"
import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import YT from "../icons/YT";
import GH from "../icons/GH";
import Twitter from "../icons/Twitter";
import FB from "../icons/FB";
import Logo from "../icons/Logo";
import Panacloud from "../icons/Panacloud";

export default function Footer() {
  return (
    <Box
      maxH={"500px"}
      bg="black"
      px="100px"
      py="50px"
      display={"flex"}
      justifyContent="space-between"
    >
      <Box>
        <Box display="flex" alignItems={"center"} gap="20px">
          <Logo />
          <Text fontSize={"30px"} fontWeight={"bold"} color="white">
            Panaverse DAO
          </Text>
        </Box>
        <Text
          fontSize={"26px"}
          fontWeight={"bold"}
          color="white"
          maxW={"450px"}
          mt="30px"
        >
          Become a certified web3.0 and metaverse developer and lead the world.
        </Text>
        <Text fontSize={"25px"} color="white" mt="30px">
          Earn while you learn.
        </Text>
        <Text fontSize={"20px"} fontWeight={"bold"} color="white" mt="30px">
          Reach to US:
        </Text>
        <Box display={"flex"} gap="30px" mt="20px">
          <YT />
          <GH />
          <Twitter />
          <FB />
        </Box>
      </Box>
      <Box fontSize={"30px"} fontWeight={"bold"} color="white">
        <Text mt="30px">Created by:</Text>
        <Text>SHAFF KHAN</Text>
        <Text mt="30px">contact Us:</Text>
        <Text>+92302-5897279</Text>
      </Box>
      <Box>
        <Text fontSize={"30px"} fontWeight={"bold"} color="white" mt="30px">
          In Collaboration With:
        </Text>
        <Box display={'flex'} justifyContent='center' mt='30px'>
          <Panacloud />
        </Box>
      </Box>
    </Box>
  );
}
