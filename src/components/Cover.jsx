import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import CoverBottom from "./CoverBottom";
import CoverQuote from "./CoverQuote";
import CoverRight from "./CoverRight";

/*
	Home cover
*/

const Cover = () => {
	const [bgCover, setBgCover] = useState(3);
	const bgColors = [
		"rgb(17, 158, 178)",
		"rgb(16, 145, 163)",
		"rgb(233, 84, 12)",
		"rgb(6, 30, 28)"
	];

	// Gets current hour as integer
	const getCurrentHour = () => {
		const date = new Date().toLocaleString("fr-FR", { hour12: false });
		return parseInt(date.split(" ")[1].split(":")[0]);
	};

	useEffect(() => {
		// Changes cover background
		const changeBgCover = () => {
			const now = getCurrentHour();
			const timeLimits = [5, 8, 16, 19];
			for (let i = 0, j = 0; i < timeLimits.length - 1; i++, j++) {
				if (now >= timeLimits[i] && now < timeLimits[i + 1]) {
					setBgCover(j);
					break;
				}
			}
		};
		// Checks regularly for bg change as time passes
		const id = setInterval(() => {
			changeBgCover();
		}, 5000);
		// Apply current default
		changeBgCover();
		return () => clearInterval(id);
	}, []);

	return (
		<div className="cover w-100 o-h">
			<div className={ `w-100 h-100 cover__bgcolor--${bgCover}` }></div>
			<div className="container cover__container h-100">
				<div className={ `cover__bg--${bgCover} w-100 h-100 f-c-st-st` }>
					<div className="w-100 h-80 o-h f-r-be-ce">
						<ProfileCard dark={ getCurrentHour() >= 19 } />
						<CoverRight />
					</div>
					<CoverBottom />
				</div>
			</div>
		</div>
	);
}

export default Cover;
