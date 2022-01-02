import "devicon/devicon.min.css";
import allContent from "../../content/data.json";

const Skills = () => {
	return (
		<div className="tw-h-screen tw-bg-slate-900">
			<div className="tw-flex tw-justify-evenly md:tw-justify-between tw-flex-wrap tw-px-10">
				{allContent.skills.map((skill) => (
					<i
						className={`${skill.icon} tw-text-7xl tw-m-3 md:tw-m-8`}></i>
				))}
			</div>
		</div>
	);
};

export default Skills;
