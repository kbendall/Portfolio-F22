import {
  Grid,
  GridItem,
  Highlight,
  Heading,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";

export const ActionsBar = () => {
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(30, 1fr)" padding="20px">
        <GridItem
          colSpan={15}
          colStart={1}
          paddingLeft={"10px"}
          paddingTop={"10px"}
        >
          <Heading>
            <Highlight
              query="Bendall"
              styles={{ px: "2", py: "1", rounded: "full", bg: "yellow.400" }}
            >
              Kate Bendall
            </Highlight>
          </Heading>
        </GridItem>
        <GridItem colStart={26}>
          <a
            href="https://github.com/kbendall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub logo as a PNG"
              />
            </button>
          </a>
        </GridItem>
        <GridItem colStart={28}>
          <a
            href="https://www.linkedin.com/in/kbendall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn logo as a PNG"
              />
            </button>
          </a>
        </GridItem>
        <GridItem colStart={30} rowSpan={2}>
          <a
            href="mailto:kbendall@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img
                src="https://www.clipartmax.com/png/full/186-1861294_email-icon-square-png.png"
                alt="Email envelope icon as a PNG"
              />
            </button>
          </a>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
