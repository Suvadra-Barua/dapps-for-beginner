import { ChakraProvider, extendTheme, CSSReset, Box, Text } from '@chakra-ui/react';
import customTheme from './theme';
import Navbar from './components/navbar';
import CampaignCreation from './components/createCampaign';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Navbar />
      <CampaignCreation />
      <Box p={8}>
      </Box>
      {/* Your app content goes here */}
    </ChakraProvider>
  );
}

export default App;