import {
  Grid,
  GridItem,
  Box,
  Button,
  PopoverTrigger,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  PopoverProjectsContent,
  PopoverSkillsContent,
  PopoverAboutMeContent,
} from "./popoverContent";
import { React } from "react";

export const OptionsGrid = () => {
  return (
    <>
      <Box textAlign="right" textColor="white">
        <Grid templateColumns="repeat(3, 1fr)" gap="40px" padding="20px">
          <GridItem w="100%" h="300">
            <Popover>
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent
                textAlign="left"
                textColor="black"
                minWidth="1626"
                marginLeft={"20px"}
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Projects</PopoverHeader>
                <PopoverBody>
                  <PopoverProjectsContent />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem w="100%" h="300">
            <Popover>
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent
                textAlign="left"
                textColor="black"
                minWidth="1626"
                marginLeft={"20px"}
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Skills</PopoverHeader>
                <PopoverBody>
                  <PopoverSkillsContent />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
          <GridItem w="100%" h="300">
            <Popover>
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent
                textAlign="left"
                textColor="black"
                minWidth="1626"
                marginRight={"20px"}
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>About Me</PopoverHeader>
                <PopoverBody>
                  <PopoverAboutMeContent />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
