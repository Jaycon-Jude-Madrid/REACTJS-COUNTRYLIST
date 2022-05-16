import { Box, styled, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Dasboard from "../../Images/dashboard.png";

import { Button, CardActionArea, CardActions } from "@mui/material";
import React from "react";

const ParentContainerBox = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "black",
  paddingBottom: "70px",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  padding: "30px",
  [theme.breakpoints.down("sm")]: { display: "flex", flexDirection: "column" },
}));
function Portfolio() {
  return (
    <ParentContainerBox
      id="Portfolio"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "white",
          paddingTop: "70px",
        }}
      >
        Portfolio
      </Typography>

      <CardContainer>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={Dasboard}
            alt="Dashboard"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Panaghiusa Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This dashboard was designed using Reactjs and Firebase
              technologies. Its purpose is to allow you to read all of the
              entries that have been produced in our Panaghiusa application.
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://github.com/Jaycon-Jude-Madrid/Dashboard-React-Js"
              target="_blank"
            >
              <Button size="small" sx={{ color: "black" }}>
                <GitHubIcon />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={Dasboard}
            alt="Dashboard"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Panaghiusa Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This dashboard was designed using Reactjs and Firebase
              technologies. Its purpose is to allow you to read all of the
              entries that have been produced in our Panaghiusa application.
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://github.com/Jaycon-Jude-Madrid/Dashboard-React-Js"
              target="_blank"
            >
              <Button size="small" sx={{ color: "black" }}>
                <GitHubIcon />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={Dasboard}
            alt="Dashboard"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Panaghiusa Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This dashboard was designed using Reactjs and Firebase
              technologies. Its purpose is to allow you to read all of the
              entries that have been produced in our Panaghiusa application.
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://github.com/Jaycon-Jude-Madrid/Dashboard-React-Js"
              target="_blank"
            >
              <Button size="small" sx={{ color: "black" }}>
                <GitHubIcon />
              </Button>
            </Link>
          </CardActions>
        </Card>
      </CardContainer>
    </ParentContainerBox>
  );
}

export default Portfolio;
