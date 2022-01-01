import { RevealCore } from "../../Utils/Reveal";

const RightBoxExperience = ({
	date,
	country,
	position,
	company,
	tasks,
	technologies,
}) => {
	return (
		<div className="tw-flex md:tw-contents">
			<RevealCore className="tw-animate-fadeInDown">
				<div className="tw-col-start-5 tw-col-end-6 tw-mr-10 md:tw-mx-auto tw-relative">
					<div className="tw-h-full tw-w-6 tw-flex tw-items-center tw-justify-center">
						<div className="tw-h-full tw-w-1 tw-bg-pink-600 tw-pointer-events-none"></div>
					</div>
					<div className="tw-w-6 tw-h-6 tw-absolute tw-top-1/2 tw--mt-3 tw-rounded-full tw-bg-pink-400 tw-shadow"></div>
				</div>
			</RevealCore>

			<RevealCore className="tw-animate-fadeInRight">
				<div className="tw-bg-slate-600 tw-col-start-6 tw-col-end-10 tw-p-4 tw-rounded-xl tw-my-4 tw-mr-auto tw-shadow-md tw-text-center hover:tw-bg-slate-700">
					<h3 className="tw-font-semibold tw-text-lg tw-mb-1">
						{position}
					</h3>
					<h5 className="tw-leading-tight tw-text-center tw-text-pink-400 tw-font-bold tw-text-xs">
						{date} - {country}
					</h5>
					<h4 className="tw-font-semibold tw-text-lg tw-my-1 group-hover:tw-text-pink-400">
						{company}
					</h4>
					<ul className="tw-list-disc tw-text-left tw-pl-3">
						{Object.values(tasks).map((task) => (
							<li>{task}</li>
						))}
						<li>
							<span className="tw-font-bold tw-underline tw-decoration-wavy">
								Tecnologías:
								<br />
							</span>
							{technologies}
						</li>
					</ul>
				</div>
			</RevealCore>
		</div>
	);
};

export default RightBoxExperience;
