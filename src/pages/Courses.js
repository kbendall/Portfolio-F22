import {
  SimpleGrid,
  Highlight,
  Divider,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const Courses = () => {
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
          <Heading>Completed Courses</Heading>
          <Text>
            All completed at the University of Waterloo as a candidate for a
            Bachelors of Applied Science in Honours Mechatronics Engineering
          </Text>
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>1A</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-CHE.html#CHE102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Chemistry for Engineers"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Chemistry for Engineers
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="http://www.ucalendar.uwaterloo.ca/2122/COURSE/course-MATH.html#MATH115"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Linear Algebra for Engineering"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Linear Algebra for Engineering
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MATH.html#MATH116"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Calculus 1 for Engineering"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Calculus 1 for Engineering
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Mechatronics Engineering"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Mechatronics Engineering
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Digital Computation"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Digital Computation
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
          <br />
          <Divider />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>1B</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MATH.html#MATH118"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Calculus 2 for Engineering"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Calculus 2 for Engineering
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Structure and Properties of Materials"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Structure and Properties of Materials
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Statics"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Statics
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE120"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Circuits"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Circuits
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE140"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Algorithms and Data Structures"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Algorithms and Data Structures
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
          <br />
          <Divider />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>2A</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE201"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Experimental Measurement & Statistical Analysis"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Experimental Measurement & Statistical Analysis
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Ordinary Differential Equations"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Ordinary Differential Equations
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Mechanics of Deformable Solids"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Mechanics of Deformable Solids
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Introduction to Microprocessors and Digital Logic"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Introduction to Microprocessors and Digital Logic
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-SYDE.html#SYDE182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Physics 2: Dynamics"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Physics 2: Dynamics
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
          <br />
          <Divider />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>2B</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-MTE.html#MTE203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Advanced Calculus"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Advanced Calculus
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-MTE.html#MTE204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Numerical Methods"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Numerical Methods
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-MTE.html#MTE220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Sensors and Instrumentation"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Sensors and Instrumentation
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-MTE.html#MTE241"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Introduction to Computer Structures and Real-Time Systems"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Introduction to Computer Structures and Real-Time Systems
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-SYDE.html#SYDE252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Linear Systems and Signals"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Linear Systems and Signals
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
          <br />
          <Divider />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            Additional Courses and Program Activities
          </span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-ENGL.html#ENGL108D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Digital Lives"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Digital Lives
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-PD.html#PD19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Tactics for Workplace Success"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Tactics for Workplace Success
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-PD.html#PD20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Engineering Workplace Skills 1: Developing Reasoned Conclusions"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Engineering Workplace Skills 1: Developing Reasoned
                  Conclusions
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-PD.html#PD9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Ethical Decision Making"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Ethical Decision Making
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-PD.html#PD22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Professionalism and Ethics in Engineering Practice"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Professionalism and Ethics in Engineering Practice
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-WKRPT.html#WKRPT100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Workterm Report: From Conception to Household Use: The Differences Between AR and VR"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Workterm Report: From Conception to Household Use: The
                  Differences Between AR and VR
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-WKRPT.html#WKRPT200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Workterm Report: Safety Through Manufacturing and Custom Tools"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Workterm Report: Safety Through Manufacturing and Custom Tools
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem rowSpan={3} />
        <GridItem colSpan={3} />
      </Grid>
    </>
  );
};

export default Courses;
