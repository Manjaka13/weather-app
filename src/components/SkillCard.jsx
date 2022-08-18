import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const SkillCard = ({ skill }) => {
	const imageName = skill.name.replace(" ", "").toLowerCase();
	const style = {
		background: skill.color
	};

	return (
		<article className="skill-card bg-white" style={ style }>
			<div
				className="fold w-100 h-100 f-c-ce-ce"
				style={ style }
			>
				<Image
					alt={ skill.name }
					height={ 100 }
					src={ `assets/skills/${imageName}.png` }
				/>
			</div>
			<div className="back w-100 h-100 f-c-ce-ce p-n n-s">
				<div className="content br-5">
					<h4 className="white pd-10 fs-120">{ skill.name }</h4>
					<p className="tx-j whitesmoke pd-10 pd-t-0">{ skill.description }</p>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
