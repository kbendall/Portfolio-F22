import { IconButton } from "@chakra-ui/react";
import React from "react";
import logo from "./icons/Portfolio Logo.png";

export const LogoButton = () => {
  const LogoImage = () => {
    return (
      <img
        src={logo}
        alt="Blue and beige hollow arcs
      progressively overlapping"
      />
    );
  };

  return (
    <>
      <IconButton
        transition={"0.5s"}
        _hover={{ opacity: 0.5 }}
        icon={<LogoImage />}
      />
    </>
  );
};
