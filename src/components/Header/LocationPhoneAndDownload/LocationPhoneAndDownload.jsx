import React from "react";
import IcDownload from "../../Icons/IcDownload";
import IcLocation from "../../Icons/IcLocation";
import IcMobile from "../../Icons/IcMobile";

const LocationPhoneAndDownload = ({ location, mobile, urlCV }) => {
	return (
		<>
			<div className="tw-py-8">
				<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-around">
					<div className="tw-flex tw-flex-col tw-items-center tw-animate-fadeInLeft">
						<IcLocation color="#FFFFFF" width="30" height="30" />
						<p className="tw-text-white tw-font-bold tw-pt-2">
							{location}
						</p>
					</div>
					<div className="tw-pt-5 tw-flex tw-flex-col tw-items-center md:tw-pt-0 tw-animate-fadeInRight">
						<IcMobile color="#FFFFFF" width="30" height="30" />
						<p className="tw-text-white tw-font-bold tw-pt-2">
							{mobile}
						</p>
					</div>
				</div>
			</div>

			<div className="download-CV tw-animate-fadeInUp tw-mx-auto">
				<a href={urlCV} target="_blank" rel="noopener noreferrer">
					<button className="tw-px-6 tw-py-2 tw-text-sm tw-transition-colors tw-duration-300 tw-rounded tw-shadow-xl tw-text-violet-100 tw-bg-pink-500 hover:tw-bg-pink-600 tw-shadow-pink-500/50 tw-font-bold tw-flex tw-items-center">
						<IcDownload width="24" height="24" color="#FFFFFF" />
						<span className="tw-ml-2">Descargar CV</span>
					</button>
				</a>
			</div>
		</>
	);
};

export default LocationPhoneAndDownload;
