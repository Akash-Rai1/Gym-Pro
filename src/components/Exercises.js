import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { exerciseOption, fetchData } from "../utils/fetchData";
const Exercises = ({ exercise, setExercise, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisePerPage = 10;
    console.log(exercise);
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []; // this is used since setExercise was not called here and it  was not upadating when clicked

            // console.log(bodyPart);

            if (bodyPart === "all") {
                exercisesData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises/",
                    exerciseOption
                );
            } else {
                if (!bodyPart) return;
                // console.log("other boy part");
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOption
                );
            }

            setExercise(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end

    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const currentExercises = exercise.slice(
        indexOfFirstExercise, // they both are providing the index of the array to be sliced so that only those many exercise will be shown to the current page
        indexOfLastExercise
    );
    // const currentExercises = ["hello", "hi"];
    console.log(exercise);

    const paginate = (e, value) => {
        // e,value both are provided by mui behind the scene
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: "smooth" }); //when next button of any nnumber is clicked it take us to that page
    };
    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: "109px" } }}
            mt="50px"
            p="20px" // a normal div tag with styling
        >
            <Typography
                variant="h4"
                fontWeight="bold" // this typo is just h1 tag with styling
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="46px"
                color="white"
            >
                Showing Results
            </Typography>
            {currentExercises.length === 0 && (
                <Typography
                    variant="h6"
                    fontWeight="bold" // this typo is just h1 tag with styling
                    sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                    mb="46px"
                >
                    No results
                </Typography>
            )}
            <Stack
                direction="row"
                sx={{ gap: { lg: "107px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map(
                    (
                        exercise,
                        index //adding elemnt name in website
                    ) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    )
                )}
            </Stack>
            <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
                {exercise.length > exercisePerPage && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercise.length / exercisePerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
