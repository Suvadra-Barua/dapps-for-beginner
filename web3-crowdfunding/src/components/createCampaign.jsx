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
import { useAccount,useContractWrite} from 'wagmi';
import customTheme from "../theme";
import CampaignFactoryABI from "../../abi/CrowdfundingFactory.json";

function CampaignCreation() {
  const [campaignDetails, setCampaignDetails] = useState({
    name: '',
    launchDate: '',
    deadline: '',
    fundingGoal: '',
  });

  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x43da291E802313b3F349230D881038072708f8A6',
    abi: CampaignFactoryABI,
    functionName: 'createCampaign',
    args : [campaignDetails.name, Math.floor(new Date(campaignDetails.launchDate).getTime() / 1000), campaignDetails.deadline, campaignDetails.fundingGoal]
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    console.log(campaignDetails);
    setCampaignDetails({
      ...campaignDetails,
      [name]: value,
    });
  };

  const createCampaign = async() => {
    console.log('Campaign Details:', campaignDetails);
    await write();
    console.log(data);
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
