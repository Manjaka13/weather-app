import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import GetInTouchTitle from "./GetInTouchTitle";

const contactList = [
	{
		content: "manjaka.rajaonson@gmail.com",
		icon: ["fas", "envelope"]
	},
	{
		content: "+261 (0) 34 67 154 30",
		icon: ["fas", "phone"]
	},
	{
		content: "Lot 912 B 100",
		icon: ["fas", "map-marker-alt"]
	},
	{
		content: "Antsirabe 110, Madagascar",
		icon: ["fas", "globe"]
	}
];

const mappedContacts = contactList.map((contact) => (
	<li className="mg-b-20" key={ uuidv4() }>
		<Icon icon={ contact.icon } /> { contact.content }
	</li>
));

const Contacts = () => {
	return (
		<div className="contacts">
			<GetInTouchTitle title="Reach me" icon={ ["fas", "laptop"] } />
			<ul className="pd-20 pd-b-0">
				{ mappedContacts }
			</ul>
		</div>
	);
};

export default Contacts;
