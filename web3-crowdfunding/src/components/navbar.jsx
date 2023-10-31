import React from 'react';
import { Box, Button, ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react';
import customTheme from '../theme'

function Navbar() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box bgGradient="linear(to-l, purple.400, purple.600)" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              My Blockchain App
            </Text>
          </Box>
          <Flex>
            <Button colorScheme="purple" variant="solid" mr={4}>
              Home
            </Button>
            <Button colorScheme="purple" variant="solid" mr={4}>
              Create Campaign
            </Button>
            <Button
              colorScheme="purple"
              variant="outline"
              _hover={{ bg: 'purple.600', color: 'white' }}
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

function handleConnectWallet() {
  // Implement your wallet connection logic here
  alert('Connect your wallet functionality goes here');
}

export default Navbar;