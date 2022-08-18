import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

/*
    Displays social links
*/

const socialList = [
    {
        link: "https://www.facebook.com/Manjaka13",
        icon: ["fab", "facebook"],
        title: "View author's Facebook profile",
    },
    {
        link: "https://linkedin.com/in/harijaona-rajaonson",
        icon: ["fab", "linkedin"],
        title: "Connect with LinkedIn",
    },
    {
        link: "https://github.com/Manjaka13/weather-app",
        icon: ["fab", "github"],
        title: "View this project's repository",
    },
];

// List of social links
const mappedSocial = socialList.map((social) => (
    <li className="social__item" key={uuidv4()}>
        <a href={social.link} title={social.title} className="link">
            <Icon icon={social.icon} />
        </a>
    </li>
));

const Social = () => (
    <ul className="social">{mappedSocial}</ul>
);

export default Social;
