import "devicon/devicon.min.css";

const Skills = ({ allContent }) => {
	return (
		<div className="tw-py-20 tw-bg-slate-900">
			<div className="tw-text-center tw-py-8">
				<h2 className="title tw-text-xl tw-text-white tw-font-extrabold md:tw-text-3xl tw-mb-5">
					{allContent.skills.titleSkills}
				</h2>
			</div>
			<div className="tw-flex tw-justify-evenly md:tw-justify-between tw-flex-wrap tw-px-5 md:tw-px-10">
				{allContent.skills.content.map((skill,index) => (
					<i
						key={index + skill}
						className={`${skill.icon} tw-text-6xl md:tw-text-7xl tw-m-3 md:tw-m-8`}></i>
				))}
			</div>
		</div>
	);
};

export default Skills;
