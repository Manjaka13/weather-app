import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

/*
	Folds image on hover and shows content
*/

const linkList = [
	{ icon:  ["fab", "github"], title: "Go to respository."},
	{ icon:  ["fas", "link"], title: "View website."},
	{ icon:  ["fas", "share"], title: "Share this link."}
];

const ProjectImage = ({ date, image, links }) => {
	const ref = useRef(null);
	const [size, setSize] = useState(0);

	useEffect(() => {
		const updateSize = () => setSize(ref.current.clientWidth);
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// List of links
	const mappedLinks = linkList.filter((link, key) => key === 0 && links.github ? true : key === 1 && links.link ? true : false).map(link => (
		<div
			className="link tr-200 fs-250 mg-r-10 p"
			title={ link.title }
			key={ uuidv4() }
		>
			<Icon icon={ link.icon } />
		</div>
	));

	return (
		<div
			className="project-image w-100 b-b f-r-st-st o-h"
			style={{ height: `${Math.floor((size * 200) / 300)}px` }}
		>
			<div className="w-50 h-100bg-theme2"></div>
			<div className="project-image__links w-50 h-100 o-h f-c-en-ce tr-200">
				{ mappedLinks }
			</div>
			<div className="project-image__bg w-100 h-100 f-r-st-st tr-500" ref={ ref }>
				<div className="project-image__content w-100 h-100">
					<Image
						className="w-100 h-100"
						alt="Namanagasycar"
						src={ image }
					/>
					<p className="text white pd-5 pd-l-10 pd-r-10 br-5">
						{ date || "" }
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectImage;
