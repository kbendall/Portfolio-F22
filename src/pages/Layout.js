import { Outlet, Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Highlight,
  Heading,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <Grid templateColumns="repeat(30, 1fr)" padding="20px" height="80px">
          <GridItem colSpan={15} colStart={1} paddingLeft={"10px"}>
            <Heading color="white">
              <Link to="/">
                <Highlight
                  query="Bendall"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "#708C7D",
                    color: "white",
                  }}
                >
                  Kate Bendall
                </Highlight>
              </Link>
            </Heading>
            <Outlet />
          </GridItem>
          <GridItem colStart={20} paddingTop={"10px"}>
            <Link to="/Projects">
              <Text color="white">Projects</Text>
            </Link>
          </GridItem>
          <GridItem colStart={22} paddingTop={"10px"}>
            <Link to="/skills">
              <Text color="white">Skills</Text>
            </Link>
          </GridItem>
          <GridItem colStart={24} paddingTop={"10px"}>
            <Link to="/Courses">
              <Text color="white">Courses</Text>
            </Link>
          </GridItem>
          <GridItem colStart={26} paddingTop={"10px"}>
            <Link to="/aboutMe">
              <Text color="white">About</Text>
            </Link>
          </GridItem>
          <GridItem colStart={28} paddingTop={"10px"}>
            <Menu>
              <MenuButton>
                <Text color="white">Contact</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a
                    href="mailto:kbendall@uwaterloo.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email: kbendall@uwaterloo.ca
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/kbendall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub: kbendall
                  </a>
                  {/*TODO: Add link icons */}
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://www.linkedin.com/in/kbendall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn: kbendall
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>
        <Divider />
      </ChakraProvider>
    </>
  );
};

export default Layout;
