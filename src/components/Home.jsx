import React, { Fragment } from "react";
import NavigationWrapper from "./NavigationWrapper";
import Cover from "./Cover";
import Section from "./Section";
import Journey from "./Journey";
import Copyright from "./Copyright";
import GetInTouch from "./GetInTouch";
import Project from "./Project";
import Skills from "./Skills";
import Pricing from "./Pricing";

/*
	Home page
*/

const Home = () => (
	<Fragment>
		<NavigationWrapper />
		<Cover />
		<Section
			id="journey"
			title="Let me tell a story"
			subtitle="Once upon a time..."
		>
			<Fragment>
				I have some experience in the software engineering. Here let me tell you a tale, a of a passionate developer in the world of programmation. Everything I have done since then is to learn again and again, trying to build apps successfully by myself though tutorials. Yeah I&apos;m self taught, I didn&apos;t had the opportunity to finish my studies but I swear I&apos;m more than skilled to do the job ! Nowadays, a bunch of new technologies are released every year and programming languages evolve rapidly with new features. So, learning and mastering quickly new frameworks or libraries is a key for a successfull developer. These tools are meant to ease the development process, to build better apps with less code and more structurated patterns.
			</Fragment>
		</Section>
		<div className="container">
			<Journey />
		</div>
		<Skills />
		<Project />
		<Pricing />
		<GetInTouch />
		<Copyright />
	</Fragment>
);

export default Home;
