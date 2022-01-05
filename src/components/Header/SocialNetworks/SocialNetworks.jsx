import IcGitHub from "../../Icons/IcGitHub";
import IcInstagram from "../../Icons/IcInstagram";
import IcLinkedIn from "../../Icons/IcLinkedIn";

const SocialNetworks = ({ social }) => {
	return (
		<div className="tw-py-4">
			<div className="tw-flex tw-justify-around md:tw-justify-between tw-animate-zoomIn">
				{social.map(({ name, url }, index) => (
					<a
						key={index + name}
						href={url}
						target="_blank"
						rel="noopener noreferrer">
						{name === "Instagram" ? (
							<IcInstagram
								color="#FFFFFF"
								width="30"
								height="30"
							/>
						) : name === "GitHub" ? (
							<IcGitHub color="#FFFFFF" width="30" height="30" />
						) : (
							<IcLinkedIn
								color="#FFFFFF"
								width="30"
								height="30"
							/>
						)}
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialNetworks;
