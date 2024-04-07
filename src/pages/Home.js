import { Grid, GridItem, Box, Text, Heading } from "@chakra-ui/react";
import { React } from "react";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <Grid
        templateColumns="1fr auto"
        templateRows="auto 1fr"
        h="calc(100vh - 175px)"
        w="calc(100vw - 60px)"
        gap={4}
        color="white"
      >
        <GridItem colSpan={3} />
        <GridItem rowSpan={3}>
          <Box position="relative" h="300px" w="600px" p={4}>
            <Heading textAlign="center" marginTop="250px">
              Hi!
            </Heading>
            <Text textAlign="center" whiteSpace="pre">
              I'm happy to see you here.{"\n"}
              {"\n"}
              Check out the top menu {"\n"}
              to learn more about me...
            </Text>
            <Box position="absolute" bottom={-350} right={-1050} w="1000px">
              <img
                src="\icons\homePage.png"
                alt="A 45 degree angle headshot of me lifting the face off a humanoid robot head with smoke escaping from the inside of the head."
              />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
