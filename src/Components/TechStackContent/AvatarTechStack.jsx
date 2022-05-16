import { Box } from "@mui/material";
import Programmer from "../../Images/Programmer.svg";
import React from "react";

function AvatarTechStack() {
  return (
    <Box>
      <img
        className="ProgrammerLogo"
        src={Programmer}
        alt=""
        width="450px"
        height="350px"
      />
    </Box>
  );
}

export default AvatarTechStack;
