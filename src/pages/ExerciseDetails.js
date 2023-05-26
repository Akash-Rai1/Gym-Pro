import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOption, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail.js";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // console.log("scroll");

        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseOption
            );
            setExerciseDetail(exerciseDetailData); //fetching exercise details using api

            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
                youtubeOptions
            );
            setExerciseVideos(exerciseVideosData.contents);
        };

        fetchExercisesData();
        window.scrollTo({ top: -1000, behavior: "smooth" });
    }, [id]);
    // if (!exerciseDetail) return <div>No Data</div>;

    return (
        <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
        </Box>
    );
};

export default ExerciseDetail;
