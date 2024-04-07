import { Grid, GridItem } from "@chakra-ui/react";
import jsonData from "../data.json";

const data = jsonData;

const AboutMe = () => {
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
          <span style={{ fontWeight: "bold" }}>Hi there!</span>
          <br />
          <br />
          <div>{data.aboutMe1}</div>
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={2}>
              <img
                src="\icons\engSocLights.jpg"
                alt="Myself leaning on the Engineering Society donated light display at Waterloo Park Wonders of Winter"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <div>{data.aboutMe2}</div>
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={2}>
              <img
                src="\icons\hockeyTeam.jpg"
                alt="Girls hockey team championship on ice"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <div>{data.aboutMe3}</div>
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={2}>
              <img
                src="\icons\engSocPin.jpg"
                alt="A custom UW and KPL pin is held in front of the KPL main branch"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <div>{data.aboutMe4}</div>
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colStart={2}>
              <img
                src="\icons\lectureHall.jpg"
                alt="Myself sitting in an empty lecture hall with school work spread on the desk"
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={3} />
        <GridItem colSpan={3} />
      </Grid>
    </>
  );
};

export default AboutMe;
