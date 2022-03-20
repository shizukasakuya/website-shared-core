import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Center,
  theme,
} from '@chakra-ui/react';

import { Header } from './header';
import { Footer } from './footer';

theme.colors.white ='#F7F2EF'
theme.colors.black = '1E0E0E'

export function AppWrapper({children}) {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack width={[ "100%", 5/6, 6/7, 'container.md' ]} spacing="0" >
          <Box h={["7vh", "15vh"]} w="inherit">
            <Header/>
          </Box>
          <Box h={["90vh", "80vh"]} w="inherit" overflow="visible" >
            {children}
          </Box>
          <Box h={["3vh", "3vh"]} w="inherit" >
            <Footer/>
          </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

