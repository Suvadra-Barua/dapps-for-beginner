import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Box, Button, ChakraProvider, extendTheme, Text, Center, Input } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
    },
  },
});
function App() {
  return (
    <>
    
    <Box
      p={3}
      m={3}
      bgColor="white"
      maxW="sm"
    >
        <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />
    </Box>
    
    <ChakraProvider theme={customTheme}>
      <Center>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="xl"
          bgColor="purple.300"
          maxW="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Hello World!
          </Text>
          <Input placeholder="Your Message" size="md" mb={4} />
          <Button colorScheme="purple" size="lg">
            Set Your Message
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
    </>
  );
}

export default App;

