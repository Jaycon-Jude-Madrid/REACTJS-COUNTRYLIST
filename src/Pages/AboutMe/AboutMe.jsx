import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";

function AboutMe() {
  const AboutMeBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#121212",

    height: "250px",
  }));
  const ContentContainer = styled(Box)(({ theme }) => ({
    padding: "100px",
    width: "1000px",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "40px",
    },
  }));

  const Content = styled(Typography)(({ theme }) => ({
    fontSize: "20px ",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      color: "white",
      textAlign: "center",
    },
  }));
  return (
    <Box sx={{ height: "30vh" }} id="AboutMe">
      <AboutMeBox>
        <ContentContainer>
          <Content>
            {" "}
            I'm a student interested in becoming a web developer. Right now, I'm
            learning how to use the newest front-end technologies to develop
            dynamic, responsive websites.
          </Content>
        </ContentContainer>
      </AboutMeBox>
    </Box>
  );
}

export default AboutMe;
