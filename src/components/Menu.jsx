import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { useMenu } from "../hooks";

/*
	Mobile menu
*/

const Menu = () => {
	const { opened, close, links } = useMenu();

	const mappedLinks = links.map((link) => (
		<li className="w-200px" key={ uuidv4() }>
			<a
				className="menu__link fs-110 b pd-10 pd-l-20 pd-r-20 br-5 tr-200 tx-c"
				href={ link.anchor }
				title={ link.title }
			>
				<Icon icon={ link.icon } /> { link.content }
			</a>
		</li>
	));

	return (
		<div className={ `menu ${opened ? "menu--opened" : ""} tr-200 w-100` } onClick={ close }>
			<div className="menu__content w-100">
				<ul className="menu__list bg-theme2 w-100 pd-t-10 pd-b-10 f-c-ce-st">
					{ mappedLinks }
				</ul>
				<div className="menu__bottom n-s p-n tr-200">
					<div className="balance w-100 h-100 f-r-ce-en">
						<div className="circle w-120px h-120px br-r o-h bg-theme2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
