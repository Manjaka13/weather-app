import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const ProfileCard = ({ dark }) => (
	<article className={ `card-profile ${dark ? "card-profile--dark" : ""} br-10 mg-l-20 o-h` }>
		<Image
			className="card-profile__figure o-h br-5 f-r-ce-ce n-s"
			style={{
				background: "rgb(20, 20, 20)",
				margin: "auto",
				marginTop: "20px",
				display: "flex",
				justifyContent: "center"
			}}
			alt="Harijaona RAJAONSON"
			src="/assets/Harijaona RAJAONSON.jpg"
		/>
		<h2 className="card-profile__name white pd-20 pd-t-40 pd-b-10">
			Harijaona RAJAONSON
		</h2>
		<div className="card-profile__separator mg-a"></div>
		<p className="card-profile__description white tx-j pd-20 pd-b-0 pd-t-10 p-n n-s">
			As a passionate and experienced Javascript developer, I enjoy building beautiful pixel perfect apps.
		</p>
		<div className="f-r-be-ce">
			<p className="card-profile__company-label white pd-10 pd-l-20 pd-r-20 n-s">
				<Icon icon={ ["fas", "laptop"] } /> Company:
			</p>
			<a
				className="card-profile__link pd-5 br-5 mg-r-20 bg-theme tr-200 f-r-ce-ce fs-80"
				title="No company"
				href="#0"
			>
				Freelance
			</a>
		</div>
	</article>
);

export default ProfileCard;
