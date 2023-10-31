import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: 'purple.800', // Change the background color to a dark purple
          color: 'white',
        },
      },
    },
    colors: {
      purple: {
        50: '#EDE7F6',
        100: '#D1C4E9',
        200: '#B39DDB',
        300: '#8367C7',
        400: '#4527A0',
        500: '#6B7280', // Text color
        600: '#5A67D8', // Adjusted shade
        700: '#473B8E', // Adjusted shade
        800: '#311B92', // Dark background
        900: '#1E0E3A',
      },
    },
  });

export default customTheme;