import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout SuccessFully!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      backgroundColor={"rgba(0,0,255,0.1)"}
      p={"1rem 20%"}
      textAlign={"centre"}
      sx={{ boxShadow: 5, mb: 5 }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography
        variant="h2"
        color={"primary"}
        fontWeight="bold"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <pre>Open-Ai CLONE</pre>
      </Typography>
      <Stack direction="row" spacing={2} display={"flex"} flexWrap={"wrap"}>
        {loggedIn ? (
          <>
            <Button variant="contained">
              <NavLink to="./">Home</NavLink>
            </Button>
            <Button variant="contained">
              <NavLink to="./login" onClick={handleLogout}>
                Logout
              </NavLink>
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained">
              <NavLink to="./register">Sign up</NavLink>
            </Button>

            <Button variant="contained">
              <NavLink to="./Login">Sign in</NavLink>
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
