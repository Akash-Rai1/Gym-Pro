import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link
            className="exercise-card"
            to={`/exercise/${exercise.id}`} //this is a dynamic url which change with respect to id
        >
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#FFA9A9",
                        fontSize: "14px",
                        borderRadius: "20px", // not button just text which dynamicaly sows which part and target of the exercise
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#FCC757",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"               
                color="#000"
                fontWeight="bold"
                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                mt="20px"
                pb="10px"
                textTransform="capitalize"
            >
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
