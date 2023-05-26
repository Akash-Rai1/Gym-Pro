import React from "react";
import { Box } from "@mui/material";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import "../components/HeroBanner.css"

const HorizontalScrollbar = ({ data,bodyPart,setBodyPart }) => {
    return (
       <div className="scroller-ar">
         <ScrollMenu>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    item_id={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyParts
                        item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
       </div>
    );
};

export default HorizontalScrollbar;
