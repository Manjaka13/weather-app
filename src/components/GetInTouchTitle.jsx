import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const GetInTouchTitle = ({ title, icon }) => (
	<div className="get-in-touch-title n-s">
		<h2 className="theme pd-20">
			{icon && <Icon icon={ icon } />} { title || "Title" }
		</h2>
		<div className="separator mg-l-20"></div>
	</div>
);

export default GetInTouchTitle;
