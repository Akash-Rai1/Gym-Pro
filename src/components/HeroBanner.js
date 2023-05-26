import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/man.jpg";
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <Box
            sx={{ mt: { lg: "222px", xs: "70px" }, ml: { sm: "50px" } }} //sx is used to style the box component lg,xs to meke it responsive
            position="relative"
            p="20px"
        >
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                color="#FBB917"
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }} //sx is used when you have to make it responsive
                mb="23px"
                mt="30px" // margin bottom and top mb ={} set predefined margin and mb="" can set ours
            >
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography color="#C8AD7F" fontSize="22px" mb="20px" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>

            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{
                    backgroundColor: "#CD7F32",
                    padding: "10px",
                    color: "white",
                    "&:hover": { backgroundColor: "blue", opacity: "1" },
                }}
            >
                Explore Exercires
            </Button>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: "0.2",
                    display: { lg: "block", xs: "none" },
                    fontSize: "200px",
                }}
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="Main-Image"
                className="hero-banner-img "
            />
        </Box>
    );
};

export default HeroBanner;
