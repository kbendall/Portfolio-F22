import { Grid, GridItem, Box, Button } from "@chakra-ui/react";
import React from "react";

export const OptionsGrid = () => {
  return (
    <>
      <Box textAlign="right" textColor="white">
        <Grid templateColumns="repeat(3, 1fr)" gap="40px" padding="20px">
          <GridItem w="100%" h="300">
            <Button
              w="100%"
              h="300"
              variant="outline"
              bgColor={"orange.300"}
              transition={"1s"}
              _hover={{ opacity: 0.5, transform: "scale(1.08)" }}
            >
              <div>Projects</div>
            </Button>
          </GridItem>
          <GridItem w="100%" h="300">
            <Button
              w="100%"
              h="300"
              variant="outline"
              bgColor={"orange.500"}
              transition={"1s"}
              _hover={{ opacity: 0.5, transform: "scale(1.08)" }}
            >
              <div>Skills</div>
            </Button>
          </GridItem>
          <GridItem w="100%" h="300">
            <Button
              w="100%"
              h="300"
              variant="outline"
              bgColor={"orange.700"}
              transition={"1s"}
              _hover={{ opacity: 0.5, transform: "scale(1.08)" }}
            >
              <div>About Me</div>
            </Button>
          </GridItem>
        </Grid>
      </Box>
      ;
    </>
  );
};
