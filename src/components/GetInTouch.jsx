import React from "react";
import SendMessage from "./SendMessage";
import Contacts from "./Contacts";
import Meet from "./Meet";

const GetInTouch = () => (
	<section id="get-in-touch" className="get-in-touch">
		<div className="get-in-touch__box bg-white w-100">
			<div className="container">
				<div className="list f-r-be-ce w-100">
					<div className="box msg">
						<SendMessage />
					</div>
					<div className="box reach">
						<Contacts />
					</div>
					<div className="box lets-meet">
						<Meet />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
