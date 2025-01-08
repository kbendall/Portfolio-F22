import { Grid, GridItem, Heading } from "@chakra-ui/react";
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
          <Heading>About Me</Heading>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={1}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <span style={{ fontWeight: "bold" }}>Hi there!</span>
              <br />
              <br />
              <div style={{ fontSize: "18px" }}>{data.aboutMe1}</div>
            </GridItem>
            <GridItem colStart={2} padding={"10px"}>
              <img
                src="\icons\engSocLights.jpg"
                alt="Myself leaning on the Engineering Society donated light display at Waterloo Park Wonders of Winter"
              />
            </GridItem>
            <GridItem colStart={3} padding={"10px"}>
              <img
                width="100%"
                src="\icons\roros.png"
                alt="Myself smiling towards the camera in front of a snow covered valley in Norway with red buildings in the skyline"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={2}
              colSpan={2}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe2}</div>
            </GridItem>
            <GridItem colStart={1} padding={"10px"}>
              <img
                src="\icons\hockeyTeam.jpg"
                alt="Girls hockey team championship on ice"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={1}
              colSpan={2}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe3}</div>
            </GridItem>
            <GridItem
              colStart={3}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <img
                src="\icons\busPush.jpg"
                alt="A group of engineering students wave at the camera while in two lines in front of a yellow school bus holding a thick rope"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={3}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe4}</div>
            </GridItem>
            <GridItem colStart={2} padding={"10px"} justifySelf="center">
              <img
                width="75%"
                src="\icons\orientation.png"
                alt="I smile into the camera holding up two thumbs up. I am dressed in a red hard hat with purple face paint coating my arms"
              />
            </GridItem>
            <GridItem colStart={1} padding={"10px"} rowStart={1}>
              <img
                src="\icons\warriorsOrientation.jpg"
                alt="I smile into the camera holding a thumbs up. I am in front of a table of University of Waterloo merchandise with two others, also smiling"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={2}
              colSpan={2}
              rowStart={1}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe5}</div>
            </GridItem>
            <GridItem colStart={1} padding={"10px"}>
              <img
                src="\icons\deepBlue.png"
                alt="Light blue submarine on white background white ombre wave shapes and UW Deep Blue text."
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={1}
              colSpan={2}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe6}</div>
            </GridItem>
            <GridItem colStart={3} padding={"10px"} rowStart={1}>
              <img
                src="\icons\TEDxUW.jpg"
                alt="I stand on a stage holding a microphone and speaking to the side. A red and white TEDxUW sign is on the stage with me"
              />
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem
              colStart={2}
              colSpan={2}
              padding={"10px"}
              alignSelf="center"
            >
              <div style={{ fontSize: "18px" }}>{data.aboutMe7}</div>
            </GridItem>
            <GridItem colStart={1} padding={"10px"} rowStart={1}>
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
