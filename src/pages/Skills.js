import {
  SimpleGrid,
  Highlight,
  Divider,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <br />
      <br />
      <Grid
        templateColumns="1fr auto 1fr"
        templateRows="auto 1fr auto"
        h="calc(100vh - 175px)"
        w="calc(100vw - 60px)"
        gap={4}
      >
        <GridItem colSpan={3} />
        <GridItem rowSpan={3} />
        <GridItem
          alignSelf="center"
          justifySelf="center"
          borderWidth="3px"
          borderRadius="20px"
          bgColor="#f2f2f2"
          p={20}
        >
          <span style={{ fontWeight: "bold" }}>Software</span>
          <br />
          <br />
          <SimpleGrid columns="4" spacingY="8" spacingX="20">
            <Box>
              <Highlight
                query="Javascript"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Javascript
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="CSS"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                CSS
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="HTML"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                HTML
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="C++"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                C++
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="React"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                React
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Git"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Git
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Jira"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Jira
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Python"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Python
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="OpenCV"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                OpenCV
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Agile/Scrum"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Agile/Scrum
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Jest"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Jest
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Jenkins"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Jenkins
              </Highlight>
            </Box>
          </SimpleGrid>
          <br />
          <Divider colorScheme="blue" />
          <br />
          <span style={{ fontWeight: "bold" }}>Mechanical/Electrical</span>
          <br />
          <br />
          <SimpleGrid columns="3" spacingY="7">
            <Box>
              <Highlight
                query="SolidWorks"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                SolidWorks
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="AutoCAD"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                AutoCAD
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Rapid Prototyping"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Rapid Prototyping
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="GD&T"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                GD&T
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Arduino Prototyping"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Arduino Prototyping
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Soldering - Through Hole"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Soldering - Through Hole
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Soldering - Surface Mount"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Soldering - Surface Mount
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="VHDL"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                VHDL
              </Highlight>
            </Box>
            <Box>
              <Highlight
                query="Verilog"
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#708C7D",
                  color: "white",
                }}
              >
                Verilog
              </Highlight>
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem rowSpan={3} />
        <GridItem colSpan={3} />
      </Grid>
    </>
  );
};

export default Skills;
