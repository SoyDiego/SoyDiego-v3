import LeftBoxEducation from "./LeftBoxEducation";
import LeftBoxExperience from "./LeftBoxExperience";
import RightBoxEducation from "./RightBoxEducation";
import RightBoxExperience from "./RightBoxExperience";

const Timeline = ({ allContent }) => {
	return (
		<div className="tw-w-full tw-bg-slate-900 tw-py-20">
			<div className="tw-text-center tw-py-8">
				<h2 className="tw-text-xl tw-text-white tw-font-extrabold md:tw-text-3xl">
					{allContent.header.titleTimeline}
				</h2>
			</div>
			<div className="tw-flex tw-flex-col md:tw-grid tw-grid-cols-9 tw-mx-auto tw-px-8 tw-pb-0 tw-text-blue-50 tw-overflow-hidden">
				{allContent &&
					allContent.experience.map(
						(
							{
								date,
								country,
								position,
								company,
								tasks,
								technologies,
							},
							index
						) =>
							//If is ODD -> Box in Left, else Box in Right
							index % 2 ? (
								<LeftBoxExperience
									date={date}
									country={country}
									position={position}
									company={company}
									tasks={tasks}
									technologies={technologies}
								/>
							) : (
								<RightBoxExperience
									date={date}
									country={country}
									position={position}
									company={company}
									tasks={tasks}
									technologies={technologies}
								/>
							)
					)}
			</div>

			<div className="tw-flex tw-flex-col md:tw-grid tw-grid-cols-9 tw-mx-auto tw-px-8  tw-pb-0 tw-text-blue-50 tw-overflow-hidden">
				{allContent &&
					allContent.education.map(
						(
							{ date, country, institute, title, description },
							index
						) =>
							//If is ODD -> Box in Left, else Box in Right
							!(index % 2) ? (
								<LeftBoxEducation
									date={date}
									country={country}
									institute={institute}
									title={title}
									description={description}
								/>
							) : (
								<RightBoxEducation
									date={date}
									country={country}
									institute={institute}
									title={title}
									description={description}
								/>
							)
					)}
			</div>
		</div>
	);
};

export default Timeline;
