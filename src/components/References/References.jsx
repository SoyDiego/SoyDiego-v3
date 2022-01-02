import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import allContent from "../../content/data.json";

const References = () => {
	const flickityOptions = {
		initialIndex: 2,
		freeScroll: true,
		wrapAround: true,
		autoPlay: true,
	};
	return (
		<div className="tw-overflow-hidden tw-py-20">
			<Flickity
				className={"carousel"} // default ''
				elementType={"div"} // default 'div'
				options={flickityOptions} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate={false} // default false
				static={false} // default false
			>
				{allContent.references.map((ref) => (
					<div className="tw-max-w-md tw-py-4 tw-px-8 tw-bg-white tw-shadow-lg tw-rounded-lg md:tw-m-20">
						<div className="tw-flex tw-justify-center md:tw-justify-end md:tw--mt-16">
							<img
								className="tw-w-20 tw-h-20 tw-object-cover tw-rounded-full tw-border-2 tw-border-pink-500"
								src={require("../../assets/img/lisenn.jpg")}
								alt={ref.name}
							/>
						</div>
						<div>
							<p className="tw-mt-2 tw-text-gray-600 tw-text-sm">
								{ref.reference}
							</p>
						</div>
						<div className="tw-flex tw-justify-end tw-items-center tw-mt-4 tw-text-md tw-font-medium tw-text-pink-500">
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
