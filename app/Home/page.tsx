"use client"
import React from 'react'
import About from './About'
import Courses from './Courses'
import Header from './Header'
import Navbar from './Navbar'
import PrgOfStd from './PrgOfStd'
import { ChakraProvider } from "@chakra-ui/react";
export default function Page() {
  return (
    <>
   {/* <Navbar /> */}
   <ChakraProvider>
   <Header />
   <About />
   <PrgOfStd />
   <Courses />
   </ChakraProvider>
  
    </>
  )
}
