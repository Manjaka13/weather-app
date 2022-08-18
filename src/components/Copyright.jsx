import React from "react";

const Copyright = () => {
	return (
		<footer className="copyright f-r-ce-ce pd-t-10 pd-b-10 bg-theme2 n-s">
			<p className="left tx-r pd-r-10 white b">
				<a className="link theme tr-200" href="https://linkedin.com/in/harijaona-rajaonson" title="View my LinkedIn profile.">H. Rajaonson</a>, All rights reserved.
				</p>
			<p className="right tx-l pd-l-10 white b">
				Copyright © 2017 - { new Date().getFullYear() }
			</p>
		</footer>
	);
};

export default Copyright;
