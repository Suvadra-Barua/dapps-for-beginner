import { extendTheme } from '@chakra-ui/react';

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

export default customTheme;
