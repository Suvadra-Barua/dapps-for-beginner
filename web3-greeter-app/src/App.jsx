import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Box, Button, ChakraProvider, extendTheme, Text, Center, Input } from '@chakra-ui/react';
import { ethers, formatEther } from "ethers";
import { BrowserProvider, parseUnits } from "ethers";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import abi from './ABI/Greeter.json'


const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
    },
  },
});


function App() {
  let signer = null;
  let provider;
  const [buttonMessage,setButtonMessage]=useState("Connect Metamask");
  const [greeterMessage, setGreeterMessage]=useState("Hello World");
  const [inputValue,setInputValue]=useState();
  const contractAddress='0x57E65431aF49C6A8c12c0b2Ec1176c55F2Bf80D6';
  let greeterContract,greeterContractWithSigner ;

function hendleMessage(e){
  // console.log("Handle Message ",e);
  setInputValue(e.target.value);
}

async function setGreetMessage(){
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  greeterContract= new ethers.Contract(contractAddress,abi,signer);
  const tx = await greeterContract.setGreeting(inputValue);
  await tx.wait();
  console.log(tx);
  const message= await greeterContract.greet();
  // setButtonMessage(message);
  setGreeterMessage(message);
}

async function connectWalletUsingEtherJs()
{
  if (window.ethereum == null) {

    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed so are
    // only have read-only access
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
    setButtonMessage("Install Metamask!!!");

} else {

    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer = await provider.getSigner();
    console.log(signer);
    setButtonMessage(signer.address);
    greeterContract= new ethers.Contract(contractAddress,abi,provider);
    console.log(greeterContract);
    const message= await greeterContract.greet();
    console.log(message);
    setGreeterMessage(message);
    console.log("Block Number : ",await provider.getBlockNumber());
    const balance = await provider.getBalance(signer.address);
    console.log("Balance : ",formatEther(balance));
  }
}

// useEffect(() => {
//   const interval = setInterval(async() => {
//           greetMessage=await greeterContract.greet();       
//    }, 1000); 
//   return () => {
//     clearInterval(interval);
//   };
// }, []);
  // const connectWalletUsingEtherJs=async()=>{
  //   if(window.ethereum!=undefined)
  //   {
  //     try{
  //       const metamuskReq=await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       console.log(metamuskReq);
  //       const walletAddress=await ethereum.request({method: 'eth_accounts'});
  //       console.log(walletAddress);
  //       walletAddress?setButtonMessage(walletAddress[0]):setButtonMessage("Connect Metamask");
  //     }catch(e){
  //       console.log(e);
  //     } 
  //   }
  //   else {
  //     console.log("install metamask");
  //     setButtonMessage("Install Metamask");
  //   }
  // }
 

  return (
    <>
    <Center>
      <Box
        pb={6}
        // m={3}
        bgColor="white"
        maxW="md"
      >
        <Button colorScheme="purple" size="md" onClick={()=>connectWalletUsingEtherJs()}>
              {buttonMessage}
        </Button>
      </Box>
    </Center>
  
    <ChakraProvider theme={customTheme}>
      <Center>
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="xl"
          bgColor="purple.300"
          maxW="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            {greeterMessage}
          </Text>
          <Input placeholder="Your Message" size="md" mb={4} onChange={hendleMessage}/>
          <Button colorScheme="purple" size="lg" onClick={()=>setGreetMessage()}>
            Set Your Message
          </Button>
        </Box>
      </Center>
    </ChakraProvider>
    </>
  );
}

export default App;

