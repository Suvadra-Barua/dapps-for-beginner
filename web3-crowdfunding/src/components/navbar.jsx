import React from 'react';
import { Box, Button, ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react';
import customTheme from '../theme';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box bgGradient="linear(to-l, purple.400, purple.600)" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              <NavLink to="/">
               My Blockchain App
              </NavLink>   
            </Text>
          </Box>
          <Flex>
            {/* <Button colorScheme="purple" variant="solid" mr={4}>
              Home
            </Button> */}
            {/* <NavLink to="/createCampaign" style={({isActive})=>({
              colorScheme:isActive? 'purple':'ash'
            })}> */}
            <NavLink to="/createCampaign">
              <Button colorScheme="purple" variant="solid" mr={4}>
                Create Campaign
              </Button>
            </NavLink>
            <ConnectButton />
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
