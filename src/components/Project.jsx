import React, { Fragment } from "react";
import { ProjectProvider } from "../context";
import Section from "./Section";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";

/*
	Project section with its context
*/

const Project = () => (
	<ProjectProvider>
		<Section
			id="projects"
			title="Creativity to another level"
			subtitle="My awesome projects"
		>
			<Fragment>
				As a developer, I already achieved many personal and professional projects to make use of my skills. These skills helped me a lot to realize such refined applications. Some of them could appear simple, but the logic behind the stack it uses is the major part of it is hidden from the public eye. If you want to know more about, I invite you to take a look at my Github repositories.
			</Fragment>
		</Section>
		<ProjectFilter />
		<ProjectList />
	</ProjectProvider>
);

export default Project;