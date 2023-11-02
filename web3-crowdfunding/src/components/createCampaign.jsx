import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Text,
  Flex,
  Button,
  extendTheme,
} from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'coolGray.200',
        color: 'black',
        fontFamily: 'sans-serif',
      },
    },
  },
});

function CampaignCreation() {
  const [campaignDetails, setCampaignDetails] = useState({
    name: '',
    deadline: '',
    launchDate: '',
    fundingGoal: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignDetails({
      ...campaignDetails,
      [name]: value,
    });
  };

  const createCampaign = () => {
    // Implement campaign creation logic using campaignDetails state
    console.log('Campaign Details:', campaignDetails);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box p={40}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Create a Campaign
        </Text>
        <Flex direction="column">
          <Input
            name="name"
            placeholder="Campaign Name"
            value={campaignDetails.name}
            onChange={handleInputChange}
            mb={2}
          />
          <Input
            name="deadline"
            type="number"
            placeholder="Campaign Deadline(in days)"
            value={campaignDetails.deadline}
            onChange={handleInputChange}
            mb={2}
          />
          <Input
            name="launchDate"
            type="date"
            placeholder="Campaign Launch Date"
            value={campaignDetails.launchDate}
            onChange={handleInputChange}
            mb={2}
          />
          <Input
            name="fundingGoal"
            type="number"
            placeholder="Funding Goal (in ETH)"
            value={campaignDetails.fundingGoal}
            onChange={handleInputChange}
            mb={4}
          />
          <Button colorScheme="purple" onClick={createCampaign}>
            Create Campaign
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default CampaignCreation;
