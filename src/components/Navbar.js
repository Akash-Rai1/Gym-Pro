import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <Stack // give direction to whole navbar and also make it responsive using mui
            direction="row"
            justifyContent="space-around" //same css property
            sx={{
                gap: { sm: "123px", xs: "40px" },
                mt: { sm: "32px", xs: "20px" },
                justifyContent: "none", // shrink the navbar if you remove it it goes back to its original size
            }}
            px="20px"
        >
            <Link to="/">
                <img
                    src={Logo} //logo goes here
                    alt="logo"
                    style={{
                        backgroundColor: "white",
                        width: "58px",
                        height: "58px",
                        margin: "0px 20px",
                        borderRadius: "12px",
                    }}
                />
            </Link>
            <Stack // this stack is for links arranging them side by side
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white", //color are here for links
                        borderBottom: "3px solid #FF2625",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
