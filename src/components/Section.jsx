import React from "react";

const Section = ({
	id,
	className,
	title,
	subtitle,
	children
}) => (
	<section className={ `section ${className ? className : ""}` } id={ id ? id : "" }>
		<div className="container section__container">
			<div className="f-r-st-ce p-n n-s">
				<div className="section__cube bg-theme w-20px h-20px mg-r-10"></div>
				<h2 className="title theme fs-200">{ title || "Title" }</h2>
			</div>
			<h3 className="subtitle fs-430 p-n n-s">{ subtitle || "This is a subtitle" }</h3>
			<div className="section__separator bg-theme w-40 h-5px mg-t-10"></div>
			<p className="tx-j pd-t-20 pd-b-20 p-n n-s">
				{ children ? children : "" }
			</p>
		</div>
	</section>
);

export default Section;