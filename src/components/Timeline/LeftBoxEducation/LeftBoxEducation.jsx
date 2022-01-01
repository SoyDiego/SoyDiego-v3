const LeftBoxEducation = ({ date, country, institute, title, description }) => {
	return (
		<div className="tw-flex tw-flex-row-reverse md:tw-contents">
			<div className="tw-bg-pink-600 tw-col-start-1 tw-col-end-5 tw-p-4 tw-rounded-xl tw-my-4 tw-mr-auto tw-shadow-md tw-text-center hover:tw-bg-pink-700 tw-animate-fadeInLeft">
				<h3 className="tw-font-semibold tw-text-lg tw-mb-1">
					{title}
				</h3>
				<h5 className="tw-leading-tight tw-text-center tw-text-slate-800 tw-text-xs tw-font-bold">
					{date} - {country}
				</h5>
				<h4 className="tw-font-semibold tw-text-lg tw-my-1">
					{institute}
				</h4>

				<ul className="tw-list-disc tw-text-left tw-pl-3">
					{Object.values(description).map((desc) => (
						<li>{desc}</li>
					))}
				</ul>
			</div>
			<div className="tw-col-start-5 tw-col-end-6 tw-mr-10 md:tw-mx-auto tw-relative">
				<div className="tw-h-full tw-w-6 tw-flex tw-items-center tw-justify-center ">
					<div className="tw-h-full tw-w-1 tw-bg-pink-600 tw-pointer-events-none"></div>
				</div>
				<div className="tw-w-6 tw-h-6 tw-absolute tw-top-1/2 tw--mt-3 tw-rounded-full tw-bg-pink-400 tw-shadow"></div>
			</div>
		</div>
	);
};

export default LeftBoxEducation;
