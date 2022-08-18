import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectEmpty from "./ProjectEmpty";
// import { useProject } from "../hooks/useProject";

/*
	Displays list of projects
*/

const projects = [
	{
		name: "Namanagasycar",
		date: "2015",
		description: "Jonathan's Namanagasy website were one of my first projects, it was originally designed with HTML/CSS and currently using NextJS.",
		image: "/assets/projects/namanagasycar.jpg",
		link: {
			github: "https://github.com/Manjaka13/namanagasycar",
			link: "https://namanagasycar.vercel.app"
		},
		tag: ["react", "next", "typescript", "sass", "node", "express", "mongo"],
	},
	{
		name: "BobaBee",
		date: "2021",
		description: "I were making a template for boba bee, a bubble tee seller. Unfortunately they have money issues and couldn't affort it.",
		image: "/assets/projects/bobabee.jpg",
		link: {
			github: "https://github.com/Manjaka13/bobabee",
			link: "https://bobabee.vercel.app"
		},
		tag: ["react", "next", "typescript", "sass"],
	},
	{
		name: "Tamirah - Fleur de vie",
		date: "2022",
		description: "A non caritative association of women that projects many activities to help poor people, the elderly and children.",
		image: "/assets/projects/tamirah.jpg",
		link: {
			github: "https://github.com/Manjaka13/tamirah",
			link: "https://tamirah.vercel.app"
		},
		tag: ["react", "next", "typescript", "sass"],
	},
	{
		name: "Aventure Couture",
		date: "2020",
		description: "Part of the french group \"Singer\", selling sewing machines for a very long time in France, they needed a website to advert their products.",
		image: "/assets/projects/singer.jpg",
		link: {
			github: "https://github.com/Manjaka13/singer",
			link: "https://singer.vercel.app"
		},
		tag: ["react", "next", "typescript", "sass"],
	}
];

const ProjectList = () => {
	const mappedProjects = projects.map((project) => (
		<ProjectCard project={ project } key={ uuidv4() } />
	));

	return (
		<Fragment>
			{/*<ProjectEmpty />*/}
			<div className="project-list container">
				<div className="list w-100 pd-t-20 pd-b-20">
					{ mappedProjects }
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectList;
