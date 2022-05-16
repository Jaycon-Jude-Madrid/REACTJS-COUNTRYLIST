import React from "react";
import AvatarPng from "../../Images/Avatar.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Link,
  Box,
  Typography,
  Avatar,
  Paper,
  IconButton,
  styled,
} from "@mui/material";
const AvatarSocialsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const AvatarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "200px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "230px",

    width: "100%",
  },
}));

const SocialsIconButton = styled(IconButton)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "skyblue",
  },
}));
function AvatarName() {
  return (
    <AvatarSocialsBox>
      <AvatarBox>
        <Avatar
          alt="Jaycon Madrid"
          src={AvatarPng}
          sx={{ width: 100, height: 100, marginRight: "50px", zIndex: "-2" }}
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Hi, I'm Jaycon
          <img
            className="Manlogo"
            width="30px"
            height="30px"
            src="https://cdn-icons.flaticon.com/png/512/3242/premium/3242257.png?token=exp=1650729474~hmac=5f36c51a122597847c48d36ef944dd80"
            alt=""
            title=""
            class="loaded"
          />
        </Typography>
      </AvatarBox>

      <Box>
        <Paper
          variant="outlined"
          elevation={3}
          sx={{
            width: "250px",
            padding: "10px  ",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", fontWeight: "500", textAlign: "center" }}
          >
            {" "}
            Socials
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="https://www.facebook.com/JayconWasMad/" target="_blank">
              <SocialsIconButton>
                <FacebookIcon />
              </SocialsIconButton>
            </Link>
            <Link href="https://www.instagram.com/jycnmdrd/" target="_blank">
              <SocialsIconButton>
                <InstagramIcon />
              </SocialsIconButton>
            </Link>
            <Link href="https://github.com/Jaycon-Jude-Madrid" target="_blank">
              <SocialsIconButton>
                <GitHubIcon />
              </SocialsIconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jaycon-madrid-a29801230/"
              target="_blank"
            >
              <SocialsIconButton>
                <LinkedInIcon />
              </SocialsIconButton>
            </Link>
          </Box>
        </Paper>
      </Box>
    </AvatarSocialsBox>
  );
}

export default AvatarName;
