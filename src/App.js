import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ActionsBar } from "./ActionsBar";
import { OptionsGrid } from "./mainOptionsGrid";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <ActionsBar />
        <OptionsGrid />
      </ChakraProvider>
    </>
  );
};

export default App;
