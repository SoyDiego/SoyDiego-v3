import IcArrowUp from "../Icons/IcArrowUp";

const ContactMe = ({ allContent }) => {
	return (
		<div className="tw-bg-white tw-text-center tw-w-full tw-mx-auto tw-py-12 tw-px-4 bg-contact-gradient">
			<h2 className="tw-text-xl tw-font-extrabold tw-text-black sm:tw-text-3xl">
				<span className="tw-block tw-mb-2">
					{allContent.contactMe.titleOne}
				</span>
				<span className="tw-block tw-text-pink-500">
					{allContent.contactMe.titleTwo}
				</span>
			</h2>
			<div className="lg:tw-mt-0 lg:tw-flex-shrink-0">
				<div className="tw-mt-12 tw-inline-flex tw-rounded-md tw-shadow">
					<a href="#header">
						<button
							type="button"
							className="tw-py-2 tw-px-3 tw-bg-pink-500 hover:tw-bg-pink-600 tw-text-white tw-w-full tw-transition tw-ease-in tw-duration-200 tw-text-center tw-text-base tw-font-semibold tw-shadow-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2  tw-rounded-lg tw-flex tw-items-center tw-animate-ping">
							<IcArrowUp width="24" height="24" color="#FFFFFF" />
							<span className="tw-ml-2">
								{allContent.contactMe.textButton}
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
