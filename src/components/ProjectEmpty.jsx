import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useProject } from "../hooks";

/*
	Display this when the project list is empty
	Or when the filters do not meet any projects
*/

const filterList = [
	{ name: "name", content: "Name" },
	{ name: "date", content: "Date" },
	{ name: "maximumTech", content: "Most technologies used" },
	{ name: "minimumTech", content: "Least technologies used" }
];

const technologies = [
	"React",
	"NextJS",
	"Typescript",
	"SASS",
	"NodeJS",
	"Express",
	"MongoDB",
];

const ProjectEmpty = () => {
	const { filtersActive } = useProject();

	return (
		<div className="project-empty w-100 h-200px f-c-ce-ce mg-t-20 mg-b-20 fs-500 bg-white n-s p-n">
			<Icon icon={ ["fas", "exclamation-circle"] } />
			{!filtersActive && (
				<p className="text fs-100 pd-t-10">No projects</p>
			)}
			{filtersActive && (
				<p className="text fs-100 pd-t-10">None meets the corresponding filter(s)</p>
			)}
		</div>
	);
};

export default ProjectEmpty;
