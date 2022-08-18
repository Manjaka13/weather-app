import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CoverQuote from "./CoverQuote";

const titleList = [
	(<span key={ uuidv4() }>Do the work with <span className="theme">passion</span>, write the code with <span className="theme">magic</span></span>),
	(<span key={ uuidv4() }>The <span className="theme">future</span>  is in your hands, I am the <span className="theme">key</span> to open it</span>),
	(<span key={ uuidv4() }>A world full of <span className="theme">love</span> is a dream full of <span className="theme">smile</span></span>),
	(<span key={ uuidv4() }>Be the <span className="theme">change</span> everyone is waiting for</span>)
];

const CoverRight = () => {
	const [currentDisplay, setCurrentDisplay] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentDisplay((prevState) => prevState + 1 >= titleList.length ? 0 : prevState + 1);
		}, 4700);
		return () => clearInterval(id);
	}, []);

	const mappedTitle = titleList.map((title, key) => (
		<h2
			className={`cover-right__title ${currentDisplay === key ? "cover-right__title--shown" : ""} fs-450 white p-n n-s tr-1000`}
			key={ key }
		>
			{ title }
		</h2>
	));

	return (
		<div className="cover-right h-100 mg-l-20 mg-r-20 o-h f-c-en-be">
			<div className="cover-right__title-box w-100 f-c-ce-ce">
				<div className="cover-right__title-list w-100">
					{ mappedTitle }
				</div>
				<a className="cover-right__link br-10 theme tr-200 fs-120 pd-10 pd-l-20 pd-r-20 b" href="#0">
					Discover magic
				</a>
			</div>
			<CoverQuote />
		</div>
	);
};

export default CoverRight;
