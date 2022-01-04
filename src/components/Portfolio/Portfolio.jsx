import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Portfolio = ({ allContent }) => {
	const flickityOptions = {
		initialIndex: 2,
		freeScroll: false,
		wrapAround: true,
		autoPlay: 2000,
		fullscreen: true,
	};
	return (
		<div className="tw-overflow-hidden tw-py-20 tw-bg-slate-900">
			<Flickity
				className={"carousel-portfolio"} // default ''
				elementType={"div"} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate={false} // default false
				static={false} // default false
			>
				{allContent.portfolio.map((data) => (
					<div className="tw-flex tw-mx-4">
						<div className="tw-relative tw-flex tw-flex-col md:tw-flex-row md:tw-space-x-5 tw-space-y-3 md:tw-space-y-0 tw-rounded-xl tw-shadow-lg tw-p-3 tw-max-w-xs md:tw-max-w-3xl tw-border tw-border-white tw-bg-white">
							<div className="tw-w-full md:tw-w-1/3 tw-bg-white tw-flex tw-items-center">
								<img
									src={data.picture}
									alt={data.title}
									className="tw-rounded-xl"
								/>
							</div>
							<div className="tw-w-full md:tw-w-2/3 tw-bg-white tw-flex tw-flex-col tw-space-y-2 tw-p-3">
								<h3 className="tw-font-black tw-text-gray-800 md:tw-text-3xl tw-text-xl tw-text-center">
									{data.title}
								</h3>
								<div className="tw-flex tw-justify-center md:tw-justify-evenly item-center tw-flex-wrap">
									{data.technologies.map((technology) => (
										<div className="tw-bg-pink-500 tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium tw-text-white tw-m-1">
											{technology}
										</div>
									))}
								</div>
								<p className="md:tw-text-lg tw-text-gray-500 tw-text-base">
									{data.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</Flickity>
		</div>
	);
};

export default Portfolio;
