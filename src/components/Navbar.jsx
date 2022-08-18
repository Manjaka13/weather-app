import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { useMenu } from "../hooks";

/*
	Navigation bar
*/

const title = "Harijaona";
const splittedTittle = title.split("");

const Navbar = () => {
	const { toggle, links } = useMenu();
	const [currentChar, setCurrentChar] = useState(-1);
	const [cube, setCube] = useState("cube");

	useEffect(() => {
		setTimeout(() => {
			setCube("cube cube--shine");
			setTimeout(() => {
				setCube("cube cube--show");
			}, 500);
		}, 2300);
	}, []);

	useEffect(() => {
		const startDelay = 1000;
		const delay = 100;
		setTimeout(() => {
			if(currentChar < splittedTittle.length)
				setTimeout(() => {
					setCurrentChar(prevState => prevState + 1);
				}, delay);
		}, currentChar === -1 ? startDelay : 0);
	}, [currentChar]);

	const mappedChars = splittedTittle.map((c, key) => (
		<span
			className={`char white tr-200 ${currentChar >= key && 'char--visible'} ${key < 4 && 'theme'}`}
			key={key}
		>
			{c}
		</span>
	));

	const mappedLinks = links.map((link) => (
		<li key={ uuidv4() }>
			<a
				className="link fs-110 b pd-10 pd-l-20 pd-r-20 br-5 tr-200"
				href={ link.anchor }
				title={ link.title }
			>
				<Icon icon={ link.icon } /> { link.content }
			</a>
		</li>
	));

	return (
		<nav className="navbar w-100 bg-theme2 f-r-ce-ce">
			<div className="container">
				<div className="w-100 f-r-be-ce">
					<div className="f-r-st-ce">
						<Image
							className="logo mg-r-20 br-50 o-h n-s"
							style={{ background: "rgb(20, 20, 20)" }}
							alt="Logo"
							src="/assets/heart.png"
						/>
						<div className="f-r-st-st">
							<div className="title">
								<h1 className="fs-250 n-s p-n">
									{ mappedChars }
								</h1>
								<h2 className="title-shadow fs-250 n-s p-n">
									{ title }
								</h2>
							</div>
							<div className={ `${cube} w-10px h-10px` }></div>
						</div>
					</div>
					<ul className="navbar__links f-r-st-ce">
						{ mappedLinks }
					</ul>
					<div
						className="navbar__trigger w-50px h-50px br-50 white p n-s tr-200"
						title="Open menu."
						onClick={ toggle }
					>
						<Icon icon={ ["fas", "bars"] } />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;