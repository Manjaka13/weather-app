import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Anime from "animejs";

/*
	Bottom part of home cover
*/

const socialList = [
	{
		icon: ["fab", "github"],
		link: "https://github.com/Manjaka13",
		title: "Visit my github profile !"
	},
	{
		icon: ["fab", "linkedin"],
		link: "http://linkedin.com/in/harijaona-rajaonson",
		title: "Add me on LinkedIn !"
	},
	{
		icon: ["fab", "facebook"],
		link: "https://facebook.com/Manjaka13",
		title: "Add me on Facebook"
	},
	{
		icon: ["fas", "envelope"],
		link: "#get-in-touch",
		title: "Send me a message !"
	}
];

const mappedSocial = socialList.map(({ link, title, icon}) => (
	<li className="mg-l-10 mg-r-10" key={ uuidv4() }>
		<a
			className="link white fs-300 tr-200"
			href={ link }
			title={ title }
		>
			<Icon icon={ icon } />
		</a>
	</li>
));

const CoverBottom = () => {
	useEffect(() => {
		Anime({
			targets: ".cover-bottom__separator",
			width: "60%",
			easing: "spring(1, 80, 5, 0)",
			delay: 2000
		});
	}, []);
	return (
		<div className="cover-bottom w-100 h-20 f-c-ce-st o-h">
			<div className="cover-bottom__separator bg-white mg-a"></div>
			<ul className="cover-bottom__social w-100 f-r-ce-ce">
				{ mappedSocial }
			</ul>
		</div>
	);
}

export default CoverBottom;
