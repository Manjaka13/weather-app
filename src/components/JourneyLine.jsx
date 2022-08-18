import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Vertical line for journey timeline
*/

const JourneyLine = ({ start, end, icon }) => {
	return (
		<div className="journey-line mg-l-40 mg-r-40 h-270px">
			<div className="line bg-theme h-100 f-r-ce-ce"></div>
			{start && (
				<div className="start w-20px h-20px br-50 bg-theme f-r-ce-ce">
					<div className="w-10px h-10px br-50 bg-white"></div>
				</div>
			)}
			{end && (
				<div className="end w-20px h-20px br-50 bg-theme f-r-ce-ce">
					<div className="w-10px h-10px br-50 bg-white"></div>
				</div>
			)}
			<p className="icon w-60px h-60px br-50 bg-theme f-r-ce-ce fs-200 o-h">
				<Icon icon={ icon } />
			</p>
		</div>
	);
};

export default JourneyLine;
