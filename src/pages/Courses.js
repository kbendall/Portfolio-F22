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
          <Heading>Courses</Heading>
          <br />
          <Text>
            All completed at the University of Waterloo as a candidate for a
            Bachelors of Applied Science in Honours Mechatronics Engineering.
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
          <span style={{ fontWeight: "bold" }}>3A</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE309"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Introduction to Thermodynamics and Heat Transfer"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Introduction to Thermodynamics and Heat Transfer
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE320"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Actuators and Power Electronics"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Actuators and Power Electronics
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Design and Dynamics of Machines"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Design and Dynamics of Machines
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE325"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Microprocessor Systems and Interfacing for Mechatronics Engineering"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Microprocessor Systems and Interfacing for Mechatronics
                  Engineering
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Systems Models 1"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Systems Models 1
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
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-HIST.html#HIST216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="From Gutenberg to Zuckerberg: A (Long) History of the Internet"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  From Gutenberg to Zuckerberg: A (Long) History of the Internet
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
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-PD.html#PD13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Research in the Workplace"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Research in the Workplace
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
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2324/COURSE/course-WKRPT.html#WKRPT300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Workterm Report: Ultrasonic Flow Meter Testing Apparatus"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Workterm Report: Ultrasonic Flow Meter Testing Apparatus
                </Highlight>
              </a>
            </Box>
          </SimpleGrid>
          <br />
          <Divider />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Currently enrolled: 3B</span>
          <br />
          <br />
          <SimpleGrid columns="2" spacingY="8" spacingX="20">
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2223/COURSE/course-MTE.html#MTE322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Electromechanical Machine Design"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Electromechanical Machine Design
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Automatic Control Systems"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Automatic Control Systems
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-MTE.html#MTE380"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Mechatronics Engineering Design Workshop"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Mechatronics Engineering Design Workshop
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/courses/view/65cd44b97a54056a08805232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Fluid Mechanics 1"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Fluid Mechanics 1
                </Highlight>
              </a>
            </Box>
            <Box>
              <a
                href="https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/courses/view/65ce3d7a187f5ef8f3913b98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Highlight
                  query="Engineering Economics: Financial Management for Engineers"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Engineering Economics: Financial Management for Engineers
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
