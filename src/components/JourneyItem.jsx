import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import JourneyCard from "./JourneyCard";
import JourneyLine from "./JourneyLine";

/*
	A row in the journey
*/

const JourneyItem = ({
	className,
	start,
	end,
	reversed,
	journey
}) => {
	return (
		<section className={ `journey-item ${reversed ? "journey-item--reversed" : ""} ${className ? className : ""} f-r-st-ce` }>
			<JourneyCard
				image={ journey.image }
				establishment={ journey.establishment }
				location={ journey.location }
				about={ journey.about }
				position={ journey.position }
				duration={ journey.duration }
				date={ journey.date }
			>
				{ journey.description }
			</JourneyCard>
			<JourneyLine start={ start } end={ end } icon={ journey.icon }/>
			<Image
				className="journey-item__lottie w-200px h-200px n-s br-10 o-h"
				alt={ journey.image }
				width={ 200 }
				height={ 200 }
				src={ journey.lottie }
			/>
		</section>
	);
};

export default JourneyItem;
