import React from "react";
import "./HomePage.css";
import ReactRev from "../../Images/ReactRev.svg";

import { Box, styled } from "@mui/material";

import AvatarName from "../../Components/Avatar&Name/AvatarName";
import ContentImage from "../../Components/Contennt&Image/ContentImage";

const ContainerBox = styled(Box)(({ theme }) => ({
  padding: "30px",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));
function HomePage() {
  return (
    <ContainerBox
      className="HomePage"
      height="65vh"
      id="homePage"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <AvatarName />
      <ContentImage />
    </ContainerBox>
  );
}

export default HomePage;
