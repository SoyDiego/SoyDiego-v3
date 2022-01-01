import IcLocation from "../Icons/IcLocation";
import IcMobile from "../Icons/IcMobile";
import allContent from "../../content/data.json";
import SocialNetworks from "../SocialNetworks";

const Header = () => {
	const { name, surname, profession, location, mobile, urlCV, social } =
		allContent;
	const splitProfession = profession.split(" ");

	return (
		<div
			className="tw-relative tw-h-screen tw-grid tw-place-content-center tw-bg-cover tw-bg-no-repeat tw-bg-center"
			style={{
				backgroundImage: `url(
					"http://soydiego.com.ar/img/wall.jpg"
				)`,
			}}>
			<div className="tw-bg-black/50 tw-absolute tw-top-0 tw-w-full tw-h-full tw-full tw-z-0"></div>

			<div className="tw-relative sm:tw-h-full md:tw-h-screen tw-grid tw-place-content-center tw-z-10">
				<div className="tw-text-center tw-py-4">
					<h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-pb-3">
						<span className="tw-text-white">{name}</span>
						<span className="tw-text-pink-600 tw-pl-2">
							{surname}
						</span>
					</h1>
					<h2 className="tw-text-3xl tw-font-bold">
						<span className="tw-text-white">
							{splitProfession[0]}{" "}
						</span>
						<span className="tw-text-pink-600 hover:tw-underline hover:tw-decoration-wavy hover:tw-decoration-2 hover:tw-underline-offset-8">
							{splitProfession[1]}
						</span>
					</h2>
				</div>

				<SocialNetworks social={social} />

				<div className="tw-py-8">
					<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-around">
						<div className="tw-flex tw-flex-col tw-items-center">
							<IcLocation
								color="#FFFFFF"
								width="30"
								height="30"
							/>
							<p className="tw-text-white tw-font-bold tw-pt-2">
								{location}
							</p>
						</div>
						<div className="tw-pt-5 tw-flex tw-flex-col tw-items-center md:tw-pt-0">
							<IcMobile color="#FFFFFF" width="30" height="30" />
							<p className="tw-text-white tw-font-bold tw-pt-2">
								{mobile}
							</p>
						</div>
					</div>
				</div>

				<div className="download-CV tw-text-center">
					<a href={urlCV} target="_blank" rel="noopener noreferrer">
						<button class="tw-px-6 tw-py-2 tw-text-sm tw-transition-colors tw-duration-300 tw-rounded tw-shadow-xl tw-text-violet-100 tw-bg-pink-600 hover:tw-bg-pink-500 tw-shadow-pink-500/50 tw-font-bold">
							Descargar CV
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
