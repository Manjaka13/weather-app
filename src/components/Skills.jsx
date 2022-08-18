import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";
import SkillCard from "./SkillCard";

/*
	Skills section
*/

const skillList = [
	{
		name: "React",
		description:
			"Call me papa React, I love this library at least as much as playing games. I spent one whole year learning it and it still has many secrets that has yet to be discovered.",
		color: "rgb(34, 34, 34)"
	},
	{
		name: "NextJS",
		description:
			"An SSR technology extension to react, this framework is used in many many maaaaany websites and web apps out there, so I just learnt it okey ? No more questions please ;)",
		color: "black"
	},
	{
		name: "Javascript",
		description:
			"Vanilla Javascript is a bunch of code jam that is still needed when comes with modern frameworks, although there are better solutions, I sometimes still love play with pure Javascript code.",
		color: "rgb(238, 202, 0)"
	},
	{
		name: "Typescript",
		description:
			"As a superset of Javascript, it's adding types to a consistent scalable code and avoid suprises ! I like to use it when a big project is coming in.",
		color: "rgb(25, 46, 108)"
	},
	{
		name: "VueJS",
		description:
			"What a powerfull tool we have here, one of the most easiest and scalable front end frameworks I learnt. Everything you see here now is displayed with VueJS.",
		color: "rgb(126, 255, 100)"
	},
	{
		name: "HTML 5",
		description:
			"The foundation of the web, HTML is the most used techologies above all in the web, a markup language that has evolved though the years along with the internet.",
		color: "rgb(230, 75, 35)"
	},
	{
		name: "CSS3",
		description:
			"What is HTML without CSS ? A shit that has no name. Styling beautiful and user friendly interfaces for websites and applications, that what the CSS power does !",
		color: "rgb(67, 124, 213)"
	},
	{
		name: "SASS",
		description:
			"I know a lot of CSS lovers, but SASS is considerably speeding styles production and enforces better codebase when it comes to designing apps from scratch.",
		color: "rgb(174, 59, 160)"
	},
];

const mappedSkills = skillList.map(skill => (
	<SkillCard skill={ skill } key={ uuidv4() }/>
));

const Skills = () => (
	<Fragment>
		<Section
			id="skills"
			title="Try, fail and learn"
			subtitle="The skills I builded"
		>
			<Fragment>
				These skills helped me a lot to realize such refined applications. Some of them could appear simple, but the logic behind the stack it uses is the major part of it is hidden from the public eye. If you want to know more about, I invite you to take a look at my Github repositories.
			</Fragment>
		</Section>
		<div className="container">
			<div className="skills w-100">
				{ mappedSkills }
			</div>
		</div>
	</Fragment>
);

export default Skills;