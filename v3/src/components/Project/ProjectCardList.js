import React from "react";
import Typography from "@material-ui/core/Typography";

import DraggableWrapper from "../DragAndDrop/DraggableWrapper";
import ProjectCard from "./ProjectCard";

const ProjectCardList = ({ columns: { entities, result }, issues }) => {
    if (!result || !result.length) {
        return <Typography>Oops! There is no column.</Typography>;
    }

    const list = result.map((item, $i) => (
        <DraggableWrapper key={item} id={item} index={$i}>
            <ProjectCard
                droppableId={item}
                issue={issues[item]}
                {...entities[item]}
            />
        </DraggableWrapper>
    ));

    return list;
};

export default ProjectCardList;
