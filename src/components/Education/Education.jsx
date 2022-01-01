import allContent from "../../content/data.json";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const Education = () => {
	return (
		<div className="tw-w-full tw-bg-slate-900">
			<div className="tw-flex tw-flex-col md:tw-grid tw-grid-cols-9 tw-mx-auto tw-p-8 tw-text-blue-50">
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
								<LeftBox
									date={date}
									country={country}
									position={position}
									company={company}
									tasks={tasks}
									technologies={technologies}
								/>
							) : (
								<RightBox
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
		</div>
	);
};

export default Education;
