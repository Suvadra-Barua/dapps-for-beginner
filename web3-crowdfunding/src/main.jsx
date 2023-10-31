import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'coolGray.800', // Dark background color
        color: 'white', // Text color
      },
    },
  },
  colors: {
    // Define your custom cool colors here
    coolGray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937', // Dark background
      900: '#111827',
    },
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
