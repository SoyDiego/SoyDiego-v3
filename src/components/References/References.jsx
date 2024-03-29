import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const References = ({ allContent }) => {
	const flickityOptions = {
		initialIndex: 2,
		freeScroll: false,
		wrapAround: true,
		autoPlay: 2000,
	};
	return (
		<div className="tw-overflow-hidden tw-py-20">
			<div className="tw-text-center tw-py-8">
				<h2 className="title tw-text-xl tw-text-white tw-font-extrabold md:tw-text-3xl tw-mb-5">
					{allContent.references.titleReferences}
				</h2>
			</div>
			<Flickity
				className={"carousel-references"} // default ''
				elementType={"div"} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate={false} // default false
				static={false} // default false
			>
				{allContent.references.content.map((ref, index) => (
					<div
						key={index + ref.name}
						className="tw-max-w-md tw-py-4 tw-px-8 tw-bg-white tw-shadow-lg tw-rounded-lg tw-mx-2 md:tw-m-20 md:tw-mb-0">
						<div className="tw-flex tw-justify-center md:tw-justify-end md:tw--mt-16">
							<img
								className="tw-w-20 tw-h-20 tw-object-cover tw-rounded-full tw-border-2 tw-border-pink-500"
								src={ref.avatar}
								alt={ref.name}
							/>
						</div>
						<div>
							<p className="tw-mt-2 tw-text-gray-600 tw-text-sm">
								{ref.reference}
							</p>
						</div>
						<div className="tw-flex tw-justify-end tw-items-center tw-mt-4 tw-text-xs tw-font-medium tw-text-pink-500">
							{ref.name} -{" "}
							<span className="tw-ml-2 tw-text-xs">
								{ref.position}
							</span>
						</div>
					</div>
				))}
			</Flickity>
		</div>
	);
};

export default References;
