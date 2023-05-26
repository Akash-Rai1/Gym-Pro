import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
// import { useState } from "react";

const Home = () => {
    const [exercise, setExercise] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercise={setExercise}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercise={setExercise}
                exercise={exercise}
                // setBodyPart={setBodyPart}
                bodyPart={bodyPart}
            />
        </Box>
    );
};

export default Home;
