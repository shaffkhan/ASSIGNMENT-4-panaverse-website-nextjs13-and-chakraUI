
import React from "react";
import {
  Box,
  Text,
  Button,
  Heading,
  CardBody,
  Card,
  CardHeader,
} from "@chakra-ui/react";
export default function Courses() {
  const content = [
    {
      heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
      body: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse.......",
    },
    {
      heading: "Cloud-Native Computing Specialization",
      body: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes...... ",
    },
    {
      heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
      body: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using..........",
    },
    {
      heading: "Ambient Computing and IoT Specialization",
      body: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories..........",
    },
    {
      heading: "Genomics and Bioinformatics Specialization",
      body: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic...........",
    },
    {
      heading: "Network Programmability and Automation Specialization",
      body: "More than ever, network engineers are finding it challenging to complete their duties entirely ...........",
    },
  ];
  return (
    <Box
    px={'100px'}
      h={"1200px"}
      bg="#E5E5E5"
      color={"black"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      pt={"100px"}
    >
      <Box textAlign="center">
        <Heading>Specialized Tracks:</Heading>
        <Text minW={"750px"} mt="35px" fontSize={"30px"}>
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Box>
      <Box display={'grid'} gridTemplateColumns='1fr 1fr 1fr' rowGap={'70px '} columnGap={'30px'} mt='50px'>
        {content.map((el) => {
          return (
            <Card>
              <CardHeader>
                <Heading size="md" fontSize={'30px'}>{el.heading}</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={'25px'}>
                  {el.body}
                </Text>
                <Button
                  variant="solid"
                  colorScheme="white"
                  mt={"24px"}
                  bgGradient="linear(to-r, #42275a,  #734b6d)"
                  color={"white"}
                  h="51px"
                  w={"180px"}
                  p="15px_75px"
                >
                  Enroll Now
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
