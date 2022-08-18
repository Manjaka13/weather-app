import React from "react";
import { v4 as uuidv4 } from "uuid";

/*
	Technology tag list in project card
*/

const tags = {
	react: {name: "ReactJS", color: "#149299"},
	next: {name: "NextJS", color: "black"},
	typescript: {name: "Typescript", color: "#283eab"},
	sass: {name: "SASS", color: "#f33d5d"},
	node: {name: "NodeJS", color: "gold"},
	express: {name: "ExpressJS", color: "purple"},
	mongo: {name: "MongoDB", color: "green"}
};

const ProjectTags = ({ list }) => {
	const mappedTags = list.map(tag => (
		<li
			className="project-tags__item white br-5 fs-90 mg-r-5 mg-t-5 p"
			style={{
				background: tags[tag].color
			}}
			key={ uuidv4() }
		>
			{ tags[tag].name }
		</li>
	));

	return (
		<ul className="project-tags f-r-st-st pd-10 pd-t-0">
			{ mappedTags }
		</ul>
	);
};

export default ProjectTags;
