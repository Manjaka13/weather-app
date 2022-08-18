import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

/*
	Card that displays journey item content
*/

const JourneyCard = ({
	image,
	establishment,
	location,
	about,
	position,
	duration,
	date,
	children
}) => {
	return (
		<article className="journey-card o-h br-10 tr-200 bg-white f-r-st-ce">
			<div className="journey-card__representation w-270px h-100 o-h">
				<Image
					className="journey-card__image"
					alt={ establishment }
					width={ 270 }
					height={ 270 }
					src={ image }
				/>
				<div className="journey-card__establishment p-n n-s tr-200">
					<h5 className="pd-10 white fs-100">{ establishment }</h5>
					<p className="pd-l-10 pd-r-10 theme b fs-90"><Icon icon={ ["fas", "map-marker-alt"] } /> { location }</p>
					<p className="tx-j pd-10 fs-90 white">
						{ about }
					</p>
					<p className="mg-b-10 mg-r-10 tx-r">
						<span className="pd-5 br-5 bg-theme theme2 fs-90"><Icon icon={ ["fas", "calendar-alt"] } /> { date }</span>
					</p>
				</div>
			</div>
			<div className="journey-card__about h-100 p-n n-s">
				<div className="f-r-be-ce">
					<h4 className="pd-10 fs-120">{ position }</h4>
					<p className="journey-card__years2 mg-r-10 tx-r"><Icon icon={ ["fas", "clock"] } /> { duration }</p>
				</div>
				<div className="journey-card__separator mg-l-10 mg-r-10"></div>
				<p className="tx-j pd-10 fs-90">
					{ children || "" }
				</p>
				<p className="journey-card__years mg-r-10 tx-r"><Icon icon={ ["fas", "clock"] } /> { duration }</p>
			</div>
		</article>
	);
};

export default JourneyCard;
