import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import JourneyItem from "./JourneyItem";
import JourneyMore from "./JourneyMore";

/*
	Journey timeline
*/

const journeyList = [
	{
		image: "/assets/journey/Lycée Andre Resampa Antsirabe.jpg",
		establishment: "Lycée André Resampa",
		location: "Antsirabe",
		about: "This is the most famous highschool in Antsirabe where almost all my family studied, I was obvious that I will pursue my studies there.",
		position: "Highschool",
		duration: "3 years",
		date: "2012 - 2015",
		description: "In my years in the highschool I already started programming. Once I graduated I knew I will study software engineering to follow this dream. I were not the most brilliant though, but I had one clear goal in my mind, becoming software developer.",
		icon: ["fas", "graduation-cap"],
		lottie: "/assets/journey/lottie0.jpg"
	},
	{
		image: "/assets/journey/Institut Supérieur Polytechnique de Madagascar.jpg",
		establishment: "Institut Supérieur Polytechnique de Madagascar",
		location: "Antananarivo",
		about: "ISPM is well known university in Madagascar that mostly prepares students in the field of software engineering and artificial intelligence.",
		position: "University",
		duration: "3 years",
		date: "2015 - 2018",
		description: "You know, I love programming as much as I play games. Well, understanding complex abstraction is hard but needed when it comes to computer science. Wit what I learned everyday, I first created games !",
		icon: ["fas", "pencil-alt"],
		lottie: "/assets/journey/lottie1.jpg"
	},
	{
		image: "/assets/journey/Freelance.jpg",
		establishment: "Freelance",
		location: "Antsirabe",
		about: "During these years, I had to overcome many difficulties, working hard to improve my skills and find jobs as a freelance developer.",
		position: "Fullstack developer",
		duration: "2 years",
		date: "2018 - 2020",
		description: "I dropped studies, my parents weren't rich, and we had money issues from time to time. Now I had to leave creating games, studies, and started working in the web development as a freelance worker. It was a brand new world for me.",
		icon: ["fas", "palette"],
		lottie: "/assets/journey/lottie2.jpg"
	},
	{
		image: "/assets/journey/MyAgency.jpg",
		establishment: "MyAgency",
		location: "Antsirabe",
		about: "I acquired a lot of new things learning along with pros. Work was hard but was source of precious experience that I carry til today.",
		position: "Front End React/VueJS",
		duration: "6 months",
		date: "Mar. 2021 - Oct. 2021",
		description: "Freelancing was over, I dedicated 1 year learning React and the Javascript ecosystem. Then decided to apply for a job as front end developer. I were picked from 53 other candidates, I knew my freelancing experience were a big plus, I'm close to master front end techs...",
		icon: ["fas", "laptop"],
		lottie: "/assets/journey/lottie3.jpg"
	},
	{
		image: "/assets/journey/Wazo S.A.jpg",
		establishment: "Wazo S.A Luxembourg",
		location: "Full remote",
		about: "I was working remotely part time , I made an e-commerce website with 5 mates. It was an adventure of 3 unforgettable months.",
		position: "Front End React",
		duration: "3 months",
		date: "Sep. 2021 - Nov. 2021",
		description: "In the search of experience, I was brought working with a team of 5 amazing people in the front end part of the project. It was a website that sells sunglasses and I were assigned to the payment part of the project with the help of the Banque Postale's APIs.",
		icon: ["fas", "wrench"],
		lottie: "/assets/journey/lottie4.jpg"
	},
	{
		image: "/assets/journey/Singer.jpg",
		establishment: "Singer Chantepie",
		location: "Remote",
		about: "This company sells sewing machines in France and does almost everything about sewing. I had good time building their website.",
		position: "Fullstack JS",
		duration: "2 months",
		date: "Dec. 2021 - Jan. 2022",
		description: "Singer is one of the leading sewing companies in France that sells sewing machines and various services around that domain. They wanted a website that promote their products and acting as an one page ad.",
		icon: ["fas", "ruler"],
		lottie: "/assets/journey/lottie5.jpg"
	}
];

const Journey = () => {
	const [allVisible, setAllVisible] = useState(false);

	const mappedJourney = journeyList.map((journey, key) => (
		<Fragment key={ key }>
		<JourneyItem
			className={ allVisible ? "" : (key >= 2 ? "journey-item--invisible" : "") }
			start={ key === 0 }
			end={ key === journeyList.length - 1 }
			reversed={ key % 2 === 0 }
			journey={ journey } key={ uuidv4() }
		/>
		</Fragment>
	));

	return (
		<div className="journey f-c-st-st">
			{ mappedJourney }
			<JourneyMore atClick={ () => setAllVisible(true) }/>
		</div>
	);
};

export default Journey;
