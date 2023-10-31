import { ChakraProvider, extendTheme, CSSReset, Box, Text } from '@chakra-ui/react';
import customTheme from './theme';
import Navbar from './components/navbar';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Navbar />
      <Box p={8}>
        <Text fontSize="xl">Dark Cool Background</Text>
      </Box>
      {/* Your app content goes here */}
    </ChakraProvider>
  );
}

export default App;