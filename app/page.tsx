"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./Home/Footer";
import Navbar from "./Home/Navbar";
import Page from "./Home/page";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Page />
      <Footer />
    </ChakraProvider>
  );
}
