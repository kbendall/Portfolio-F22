import { Grid, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
import flow2 from "./Videos/flow2.MOV";
import jsonData from "../data.json";

const data = jsonData;
const Projects = () => {
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
          <Heading>Projects</Heading>
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            Two Axis Machine Controller
          </span>
          <div>{data.twoAxis}</div>
          <br />
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\nucleoSTM32Stack.jpg"
                alt="A Nucleo board is stacked on top of an STM32 board. Multi-coloured wires are inserted into connectors on the Nucleo and the STM32 has a red LED."
              />
            </GridItem>
            <GridItem colStart={5} colEnd={7}>
              <img
                wifth="100%"
                src="\icons\twoAxisMachine.png"
                alt="A vertical, lead screw based two axis machine sits on a desk in a university lab with desks and chairs."
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Chess Playing Social Robot</span>
          <div>{data.socialChess}</div>
          <br />
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\catchIDI.jpg"
                alt="Booth display at a conference. A table is set up with a laptop showing a chess board and the bust of a humanoid robot. Two banners promoting the NorwAI flank the table."
              />
            </GridItem>
            <GridItem colStart={5} colEnd={7}>
              <iframe
                title="test"
                src="\icons\annualReport.pdf"
                width="100%"
                height="100%"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            Live Meeting Moderator Program
          </span>
          <div>{data.robertsRules}</div>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Canny Edge Detector</span>
          <div>{data.cannyEdge}</div>
          <br />
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\cannyEdgeOriginal.jpg"
                alt="An embroidered patch is on a wooden table. The patch is purple with the yellow Wilfred Laurier University golden hawks emblem and the text 'Laurier Engineering'"
              />
            </GridItem>
            <GridItem colStart={5} colEnd={7}>
              <img
                wifth="100%"
                src="\icons\cannyEdge.png"
                alt="A black background has a white outline of the original patch."
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Flow Meter Comparison Jig</span>
          <div>{data.flowMeter}</div>
          <br />
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\flow.jpg"
                alt="Inside of electrical flow box"
              />
            </GridItem>
            <GridItem colStart={5} colEnd={7}>
              <video src={flow2} width="800" height="400" controls />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            BuddyBackdrops Chrome Extension
          </span>
          <div>{data.chromeExtension}</div>
          <br />
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colStart={2} colEnd={5}>
              <img
                width="100%"
                src="\icons\buddyBackdrops.jpg"
                alt="Welcome screen for Buddy Backdrops Chrome Extension"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            Rulerless Measurement Device
          </span>
          <div>{data.measurementDevice}</div>
          <br />
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\measurement1.jpg"
                alt="Prototype Design Drawing"
              />
            </GridItem>
            <GridItem colStart={5} colEnd={7}>
              <img
                width="100%"
                src="\icons\measurement2.jpg"
                alt="Final Design Setup"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Balsa Wood Bridge</span>
          <div>{data.balsaBridge}</div>
          <br />
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colStart={2} colEnd={4}>
              <img
                width="100%"
                src="\icons\bridge.jpg"
                alt="Myself adding a weight to the middle dowel of the bridge"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Mario Kart Lego EV3 Robot</span>
          <div>{data.legoEV3}</div>
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={2}>
              <img
                src="\icons\marioBot.jpg"
                alt="Myself and two group mates with our modified robot"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>WonderWoman Discord Bot</span>
          <div>{data.discordBot}</div>
          <br />
          <SimpleGrid columns="2" gap={2}>
            <img
              width="100%"
              src="\icons\wwBot(1).jpg"
              alt="Demo of quiz and quote functions for WonderWoman Discord bot"
            />
            <img
              width="100%"
              src="\icons\wwBot(2).jpg"
              alt="Demo of comment flagging for WonderWoman Discord bot"
            />
          </SimpleGrid>
          <br />
          <br />
          <br />
        </GridItem>
        <GridItem rowSpan={3} />
        <GridItem colSpan={3} />
      </Grid>
    </>
  );
};

export default Projects;
