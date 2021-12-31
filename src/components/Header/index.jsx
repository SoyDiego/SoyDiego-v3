import React from "react";
import IcGitHub from "../Icons/IcGitHub";
import IcInstagram from "../Icons/IcInstagram";
import IcLinkedIn from "../Icons/IcLinkedIn";

const Header = () => {
	return (
		<div
			className="tw-relative tw-bg-cover tw-bg-no-repeat tw-bg-center"
			style={{
				backgroundImage: `url(
					"http://soydiego.com.ar/img/wall.jpg"
				)`,
			}}>
			<div className="tw-bg-black/50 tw-absolute tw-top-0 tw-w-full tw-h-full tw-full tw-z-0"></div>

			<div className="tw-relative tw-h-screen tw-grid tw-place-content-center tw-z-10">
				<div className="tw-text-center tw-py-4">
					<h1 className="tw-text-5xl tw-pb-3">
						<span>Diego J.</span>
						<span className="tw-text-pink-600">Franchina</span>
					</h1>
					<h2 className="tw-text-3xl tw-font-bold">
						<span>Web </span>
						<span className="tw-text-pink-600">Developer</span>
					</h2>
				</div>

				<div className="social tw-py-4">
					<div className="tw-flex tw-justify-between">
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

				<div className="info tw-py-4">
					<div className="tw-flex tw-justify-around">
						<p className="tw-text-white">Barcelona, España</p>
						<p className="tw-text-white">+34 644 464 398</p>
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
