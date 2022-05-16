import { Box, Typography, styled, keyframes } from "@mui/material";
import React, { useState, useEffect } from "react";
import ReactRev from "../../Images/ReactRev.svg";

const ContentImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const rollInLeft = keyframes`

  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}


`;

const TextBox = styled(Box)(({ roll }) => ({
  width: "500px",
  fontSize: "20px",
}));

const TextTypo = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "700",
  marginTop: "25px",
  textAlign: "left",
  color: "#17252A",

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    fontSize: "18px",
    textAlign: "center",
  },
}));

const ImageContainer = styled(Box)(({ roll }) => ({
  visibility: !roll && "hidden",
  animation: roll && `${rollInLeft} 0.6s ease-out both`,
}));

export default function ContentImage() {
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // animation
      setRoll(true);
    }, 500);
  }, []);
  return (
    <ContentImageBox>
      <TextBox>
        <TextTypo>
          <span className="studentSpan"> A Student</span>, a Future developer,
          and a Goal-setter.
        </TextTypo>
      </TextBox>
      <ImageContainer roll={roll}>
        <img
          className="ReactDevImage"
          src={ReactRev}
          alt=""
          height="350px"
          width="350px"
        />
      </ImageContainer>
    </ContentImageBox>
  );
}
