import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useProject } from "../hooks";

/*
	Filters for project list
*/

const ProjectFilter = () => {
	const {
		filter,
		toggle,
		filtersActive,
		reset,
		filterList,
		technos
	} = useProject();

	const mappedFilters = filterList.map(f => (
		<div
			className="project-filter__checkbox f-r-st-ce p mg-r-10 pd-t-20"
			onClick={ () => toggle(f.name) }
			key={ uuidv4() }
		>
			<input
				className="p-n n-s"
				type="checkbox"
				name={ f.name }
				checked={ filter[f.name] }
				readOnly
			/>
			<label className="mg-r-10 n-s p-n" htmlFor="date">{ f.content }</label>
		</div>
	));

	const mappedTechnologies = technos.map(techno => (
		<div
			className="project-filter__checkbox f-r-st-ce p mg-r-10 pd-t-20"
			onClick={ () => toggle(techno.name) }
			key={ uuidv4() }
		>
			<input
				className="p-n n-s"
				type="checkbox"
				name={ techno.name }
				checked={ filter[techno.name] }
				readOnly
			/>
			<label className="mg-r-10 n-s p-n" htmlFor="date">{ techno.name }</label>
		</div>
	));

	return (
		<div className="project-filter container bg-white b-b o-h">
			<div className="w-100 f-c-st-st">
				<div className="w-100 f-r-be-ce">
					<h3 className="theme pd-20"><Icon icon={ ["fas", "list"] } /> Filter list</h3>
					{filtersActive && (
						<button
							className=" project-filter__reset pd-10 pd-l-20 pd-r-20 br-5 white bg-theme p tr-200 mg-r-20"
							onClick={ reset }
						>
							<Icon icon={ ["fas", "trash"] } /> Clear filters
						</button>
					)}
				</div>
				<div className="project-filter__separator"></div>
				<form className="project-filter__list pd-20 pd-t-0 w-100">
					<div className="project-filter__list w-100 f-r-st-st">
						<p className="pd-t-20 mg-r-20 u b">Filter by:</p>
						{ mappedFilters }
					</div>
					<div className="project-filter__list w-100 f-r-st-st">
						<p className="pd-t-20 mg-r-20 u b">By technologies:</p>
						{ mappedTechnologies }
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProjectFilter;
