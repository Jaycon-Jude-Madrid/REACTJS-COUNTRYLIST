import React from "react";
import ContactIcon from "../../Images/ContactIcon.svg";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  styled,
} from "@mui/material";

const TextFieldInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const ButtonSubmit = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  },
}));

function Footer() {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "1000px",
        margin: "0 auto",
        paddingTop: "65px",
        paddingBottom: "700px",
      }}
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
          paddingBottom: "40px",
          color: "black",
        }}
      >
        REACH ME OUT
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            sx={{ fontWeight: "500", padding: "5px", fontSize: "17px" }}
          >
            Feel free to get in touch.
          </Typography>
          <Grid>
            <Card
              style={{
                maxWidth: 350,
                padding: "10px 5px",
                margin: "0 auto",
              }}
            >
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Grid container spacing={2}>
                    <Grid xs={12} item>
                      <TextFieldInput
                        placeholder="Enter Name"
                        label="Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextFieldInput
                        placeholder="Enter Subject"
                        label="Subject"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldInput
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldInput
                        label="Message"
                        multiline
                        rows={4}
                        placeholder="Type your message here"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ButtonSubmit type="submit" variant="contained" fullWidth>
                        Submit
                      </ButtonSubmit>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Box>

        <Box>
          <img src={ContactIcon} alt="" width="450px" height="350px" />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
