"use client"
import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
export default function About() {
  return (
    <Box
      h={"600px"}
      bg="#E5E5E5"
      color={"black"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent={'center'}
    >
      <Heading>The Program in a Nutshell: Earn While You Learn</Heading>
      <Text maxW={"700px"} textAlign='center' fontSize={'28px'} mt='35px'>
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>
      
    </Box>
  );
}
