import { ChakraProvider, CSSReset, Box, Text } from '@chakra-ui/react';
import customTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Box p={8}>
        <Text fontSize="xl">Dark Cool Background</Text>
      </Box>
      {/* Your app content goes here */}
    </ChakraProvider>
  );
}

export default App;