import { ChakraProvider, extendTheme, CSSReset, Box, Text } from '@chakra-ui/react';
import customTheme from './theme';
import Navbar from './components/navbar';
import CampaignCreation from './components/createCampaign';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/createCampaign' element={<CampaignCreation />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;