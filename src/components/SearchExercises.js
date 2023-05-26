import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOption, fetchData } from "../utils/fetchData"; //build in diffrent folder to make the code more redable
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercise ,setBodyPart,bodyPart}) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOption
            );

            setBodyParts(["all", ...bodyPartsData]);
        };
        fetchExerciseData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOption // coming from fetchData.js
            );
            const searchedExercise = exerciseData.filter(
                // filter out the search result for particular keywords
                (search_content) =>
                    search_content.name.toLowerCase().includes(search) ||
                    search_content.target.toLowerCase().includes(search) ||
                    search_content.equipment.toLowerCase().includes(search) ||
                    search_content.bodyPart.toLowerCase().includes(search)
            );
            setSearch("");
            setExercise(searchedExercise);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
            color="#A0522D"
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="49px"
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: { lg: "1170px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />

                <Button
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "173px", xs: "80px" },
                        height: "56px",
                        position: "absolute",
                        right: "0px",
                        fontSize: { lg: "20px", xs: "14px" },
                        "&:hover": { backgroundColor: "blue" },
                    }}
                    onClick={handleSearch}
                >
                    Search1
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
                    setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    );
};

export default SearchExercises;
