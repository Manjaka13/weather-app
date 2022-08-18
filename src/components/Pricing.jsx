import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import Section from "./Section";

/*
	Display prices
*/

const offerList = [
	{
		name: "Full website",
		price: "599 €",
		description: "This offer is for full multiple page websites, on-demand functionnality and heavy referenced content.",
		checks: [
			"Multiple page website",
			"SEO and mobile friendly",
			"Full functionnality"
		]
	},
	{
		name: "Single page website",
		price: "199 €",
		description: "One landing page website that is used mainly for business ad, personal biography and local community or organization presentation.",
		checks: [
			"A website with modern design",
			"Fully responsive and mobile friendly",
			"Lowest price out there",
			"High quality animations",
			"Pixel perfect"
		]
	},
	{
		name: "Website model",
		price: "0 €",
		description: (<span>A model for your future website for <span className="b">FREE</span> ! So that you can see in advance how it&apos;ll look like.</span>),
		checks: [
			"Completely FREE",
			"Finished within a week",
			"Preview of future website"
		]
	}
];

const mappedOfferList = offerList.map((offer, key) => {
	const mappedChecks = offer.checks.map(check => (
		<li className="item pd-20 pd-t-0" key={ uuidv4() }>
			<span className="green mg-r-10">
				<Icon icon={ ["fas", "check-circle"] } />
			</span>
			{ check }
		</li>
	));
	return (
		<div
			id="pricing"
			className={ `pricing__item br-10 bg-white tr-200 ${key === 1 ? "big" : "little"}` }
			key={ uuidv4() }
		>
			<h4 className="pd-20 fs-130 n-s p-n">{ offer.name }</h4>
			<p className="tx-j pd-20 n-s p-n pd-t-0">
				{ offer.description }
			</p>
			<ul className="pricing__checks p-n n-s">
				{ mappedChecks }
			</ul>
			<div className="separator mg-l-20"></div>
			<div className="pricing-info">
				<p className="text green tx-c pd-t-20 b u n-s p-n">
					{ key === 2 ? "It's FREE, why not try ?" : "Starting from:" }
				</p>
				<p className="price tx-c green fs-200 pd-b-20 b n-s p-n">
					{ offer.price }
				</p>
			</div>
			<p className="tx-c">
				<button className="shop bg-green pd-10 pd-l-0 pd-r-0 white br-5 p tr-200 mg-b-20 o-h">
					<Icon icon={ ["fas", "shopping-cart"] } /> { key === 2 ? "Try" : "Take this" }
				</button>
			</p>
			{ key === 1 && (
				<Image
					className="pricing__recommended"
					alt="Recommended"
					src="/assets/recommended.png"
				/>
			)}
		</div>
	);
});

const Pricing = () => {
	return (
		<Fragment>
			<Section
				id="pricing"
				title="Pricing"
				subtitle="Let's make a website !"
			/>
			<div className="container">
				<div className="pricing w-100 f-r-be-ce pd-b-20">
					{ mappedOfferList }
				</div>
			</div>
		</Fragment>
	);
}

export default Pricing;