import { Box, Typography, styled } from "@mui/material";
import React from "react";
import AvatarTechStack from "../../Components/TechStackContent/AvatarTechStack";
import PaperStack from "../../Components/TechStackContent/PaperStack";

const TechStackContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "150px",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  height: "65vh",
  [theme.breakpoints.down("sm")]: {
    height: "85vh",
  },
}));
function TechStackPage() {
  return (
    <ContainerBox
      id="techStack"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "700",
          textAlign: "center",
          padding: "40px",
        }}
      >
        {" "}
        TECH STACK{" "}
      </Typography>
      <TechStackContainer>
        <AvatarTechStack />
        <PaperStack />
      </TechStackContainer>
    </ContainerBox>
  );
}

export default TechStackPage;
