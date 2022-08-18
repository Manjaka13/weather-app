import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "./helpers/icons";
import Weather from "./components/Weather";

/*
	Main entry point
*/

ReactDOM.render(
	<React.StrictMode>
		<Weather />
	</React.StrictMode>,
	document.getElementById("root")
);