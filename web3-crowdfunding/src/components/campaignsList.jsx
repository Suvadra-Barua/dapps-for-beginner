import React, { useState, useEffect } from 'react';
import { Box, Button, extendTheme, Text, ChakraProvider, VStack } from '@chakra-ui/react';
import customTheme from '../theme';
import { useContractRead , useContractReads, useAccount} from 'wagmi';
import CrowdfundingFactory from '../../abi/CrowdfundingFactory.json';
import CrowdfundingCampaign from '../../abi/CrowdfundingCampaign.json';


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
          {campaign.campaignName}
        </Text>
        <Text>
          Launch Date: {Number(campaign.launchDate)}
        </Text>
        <Text>
          {/* Deadline: {new Date((Number(campaign.deadline)+Number(campaign.launchDate))*1000)} */}
          Deadline: {Number(campaign.deadline)}
        </Text>
        <Text>
          Funding Goal: {campaign.fundingGoal} ETH
        </Text>
        <Text>
          Address: {campaign.campaignAddress}
        </Text>
        <Button colorScheme="teal" mt={4}>
          Fund
        </Button>
      </Box>
    </ChakraProvider>
  );
}

function CampaignList() {
    const {isConnected} =useAccount();
    const initialCampaignDetails = {
        name: '',
        deadline: '',
        launchDate: '',
        fundingGoal: '',
        owner:''
      };
    const [campaigns, setCampaigns] = useState([]);
    const { data:allCampaigns,refetch:fetch }=useContractRead({
        address: '0xDA69358460103bAC3d18d2959206f064dcc2B5cB',
        abi: CrowdfundingFactory,
        functionName: 'getAllCampaignDetails',
        onError(error){
            console.log("error: ",error)
        }
    })
    // console.log(fetch());
    // async function getCampaignsList(){
    //   fetch();
    //   console.log(campaignsAddresses);
    // //   let data, isError, isLoading ;
    //  campaignsAddresses?campaignsAddresses.map(async (campaignAddress) => {
    //         const { data, isError, isLoading } = useContractReads({
    //         contracts: [
    //           {
    //             address: campaignAddress,
    //             abi: CrowdfundingCampaign,
    //             functionName: 'campaignName',
    //           },
    //           {
    //             address: campaignAddress,
    //             abi:CrowdfundingCampaign,
    //             functionName: 'launchDate',
    //           },
    //           {
    //             address: campaignAddress,
    //             abi: CrowdfundingCampaign,
    //             functionName: 'deadline',
    //           },
    //           {
    //             address: campaignAddress,
    //             abi: CrowdfundingCampaign,
    //             functionName: 'fundingGoal',
    //           },
    //           {
    //             address: campaignAddress,
    //             abi: CrowdfundingCampaign,
    //             functionName: 'totalFunds',
    //         },   
    //         ],
    //       });
    //       console.log(data);
    //     });
    // }
    async function getCampaignsList() {
        fetch();
        console.log("All Campaigns :",allCampaigns);
        setCampaigns(allCampaigns);
        
    }
        
    
      
    
    useEffect(() => {
        const fetchData = async () => {
          await getCampaignsList();
        };
      
        fetchData();
      }, []);
  
    return (
      <ChakraProvider theme={customTheme}>
        <Box p={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            All Campaigns
          </Text>
          <VStack spacing={4}>
            {campaigns?campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            )):<></>}
          </VStack>
        </Box>
      </ChakraProvider>
    );
  
    }
  export default CampaignList;
 