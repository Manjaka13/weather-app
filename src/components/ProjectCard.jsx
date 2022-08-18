import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import ProjectImage from "./ProjectImage";
import ProjectTags from "./ProjectTags";

/*
	Displays project item info
*/

const ProjectCard = ({project}) => (
	<div className="project-card bg-white f-c-st-st tr-200">
		<ProjectImage date={ project.date } image={ project.image } links={ project.link } />
		<div className="body f-c-st-be n-s">
			<div>
				<h4 className="pd-10 fs-110">{ project.name }</h4>
				<div className="separator bg-theme w-30 mg-l-10"></div>
				<p className="tx-j fs-90 pd-10">{ project.description }</p>
			</div>
			<ProjectTags list={ project.tag } />
		</div>
	</div>
);

export default ProjectCard;