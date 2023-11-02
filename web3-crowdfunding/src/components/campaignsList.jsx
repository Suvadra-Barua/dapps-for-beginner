import React, { useState, useEffect } from 'react';
import { Box, Button, extendTheme, Text, ChakraProvider, VStack } from '@chakra-ui/react';
import customTheme from '../theme';

// Sample data for the campaigns
const sampleCampaigns = [
    {
      id: 1,
      name: 'Campaign 1',
      deadline: '2023-12-31',
      launchDate: '2023-10-01',
      fundingGoal: 100,
    },
    {
      id: 2,
      name: 'Campaign 2',
      deadline: '2023-11-15',
      launchDate: '2023-09-01',
      fundingGoal: 150,
    },
    // Add more campaigns as needed
  ];

function CampaignCard({ campaign }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        m={4}
        boxShadow="lg"
        bg="white"
        color="black"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {campaign.name}
        </Text>
        <Text>
          Launch Date: {campaign.launchDate}
        </Text>
        <Text>
          Deadline: {campaign.deadline}
        </Text>
        <Text>
          Funding Goal: {campaign.fundingGoal} ETH
        </Text>
        <Button colorScheme="teal" mt={4}>
          Fund
        </Button>
      </Box>
    </ChakraProvider>
  );
}

function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);
  
    // Simulating fetching campaign data (you can replace this with actual data fetching)
    useEffect(() => {
      // In a real application, you would fetch the campaign data from an API
      // For now, we're using sampleCampaigns
      setCampaigns(sampleCampaigns);
    }, []);
  
    return (
      <ChakraProvider theme={customTheme}>
        <Box p={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            All Campaigns
          </Text>
          <VStack spacing={4}>
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </VStack>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default CampaignList;
 