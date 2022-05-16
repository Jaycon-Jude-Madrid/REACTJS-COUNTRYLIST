import * as React from "react";
import "./LabelBottomNav.css";
import Logo from "../../Images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Paper,
  styled,
  Typography,
  Menu,
  MenuItem,
  Button,
  Fade,
  Link,
  List,
  ListItem,
} from "@mui/material";

const NavBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  color: "white",
  background: "black",
  opacity: "0.9",
  zIndex: "1",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Nav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const Navigation = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    position: "fixed",
    background: "black",
    opacity: "0.9",
    zIndex: "1",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const ListItemContainer = styled(ListItem)(({ theme }) => ({}));

const ListContainer = styled(List)(({ theme }) => ({
  display: "flex",
  width: "400px",
  justifyContent: "center",
  fontSize: "12px",
}));
const MenuItemContainer = styled(MenuItem)(({ theme }) => ({
  fontSize: "12px",
  padding: "10px",
}));

const LinkNav = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  "&:hover": {
    color: "skyblue",
  },
}));
const LinkMobileNav = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "skyblue",
  },
}));
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(" ");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Nav>
      <NavBar>
        <Box>
          <ListContainer>
            <ListItemContainer>
              <LinkNav href="#homePage">Home</LinkNav>
            </ListItemContainer>

            <ListItemContainer>
              {" "}
              <LinkNav href="#AboutMe">About Me </LinkNav>
            </ListItemContainer>

            <ListItemContainer>
              <LinkNav href="#techStack">Tech Stack</LinkNav>
            </ListItemContainer>
            <ListItemContainer>
              <LinkNav href="#Portfolio">Portfolio</LinkNav>
            </ListItemContainer>
          </ListContainer>
        </Box>
      </NavBar>

      <Navigation>
        <Button onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {" "}
          <LinkMobileNav href="#homePage">
            <MenuItemContainer onClick={handleClose}>Home</MenuItemContainer>
          </LinkMobileNav>
          <LinkMobileNav href="#AboutMe">
            <MenuItemContainer onClick={handleClose}>
              {" "}
              About Me
            </MenuItemContainer>
          </LinkMobileNav>
          <LinkMobileNav href="#techStack">
            <MenuItemContainer onClick={handleClose}>
              Tech Stack
            </MenuItemContainer>
          </LinkMobileNav>
          <LinkMobileNav href="#Portfolio">
            <MenuItemContainer onClick={handleClose}>
              {" "}
              Portfolio
            </MenuItemContainer>
          </LinkMobileNav>
        </Menu>
      </Navigation>
    </Nav>
  );
}
