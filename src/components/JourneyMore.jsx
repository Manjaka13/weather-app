import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Journey button view more
*/

const JourneyMore = ({ atClick }) => (
	<div className="journey-more w-100 f-c-ce-ce pd-b-20">
		<div className="line bg-theme"></div>
		<button
			className="journey-more__button bg-theme pd-20 pd-t-10 pd-b-10 br-5 p tr-200"
			title="View the full journey"
			onClick={ () => {
				if(typeof atClick === "function")
					atClick();
			}}
		>
			<Icon icon={ ["fas", "plus-circle"] }/> View all
		</button>
	</div>
);

export default JourneyMore;