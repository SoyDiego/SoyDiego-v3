import IcGitHub from "../Icons/IcGitHub";
import IcInstagram from "../Icons/IcInstagram";
import IcLinkedIn from "../Icons/IcLinkedIn";
import IcLocation from "../Icons/IcLocation";
import IcMobile from "../Icons/IcMobile";

const Header = () => {
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
						<span className="tw-text-white">Diego J.</span>
						<span className="tw-text-pink-600 tw-pl-2">
							Franchina
						</span>
					</h1>
					<h2 className="tw-text-3xl tw-font-bold">
						<span className="tw-text-white">Web </span>
						<span className="tw-text-pink-600 hover:tw-underline hover:tw-decoration-wavy hover:tw-decoration-2 hover:tw-underline-offset-8">
							Developer
						</span>
					</h2>
				</div>

				<div className="social tw-py-4">
					<div className="tw-flex tw-justify-around md:tw-justify-between">
						<a
							href="https://www.instagram.com/SoyDieg0"
							target="_blank"
							rel="noopener noreferrer">
							<IcInstagram
								color="#FFFFFF"
								width="40"
								height="40"
							/>
						</a>
						<a
							href="https://www.github.com/SoyDiego"
							target="_blank"
							rel="noopener noreferrer">
							<IcGitHub color="#FFFFFF" width="40" height="40" />
						</a>
						<a
							href="https://www.linkedin.com/in/SoyDiegoF"
							target="_blank"
							rel="noopener noreferrer">
							<IcLinkedIn
								color="#FFFFFF"
								width="40"
								height="40"
							/>
						</a>
					</div>
				</div>

				<div className="info tw-py-8">
					<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-around">
						<div className="tw-flex tw-flex-col tw-items-center">
							<IcLocation
								color="#FFFFFF"
								width="30"
								height="30"
							/>
							<p className="tw-text-white tw-font-bold tw-pt-2">
								Barcelona, España
							</p>
						</div>
						<div className="tw-pt-5 tw-flex tw-flex-col tw-items-center md:tw-pt-0">
							<IcMobile color="#FFFFFF" width="30" height="30" />
							<p className="tw-text-white tw-font-bold tw-pt-2">
								+34 644 464 398
							</p>
						</div>
					</div>
				</div>

				<div className="download-CV tw-text-center">
					<button class="tw-px-6 tw-py-2 tw-text-sm tw-transition-colors tw-duration-300 tw-rounded tw-shadow-xl tw-text-violet-100 tw-bg-pink-600 hover:tw-bg-pink-500 tw-shadow-pink-500/50 tw-font-bold">
						Descargar CV
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
