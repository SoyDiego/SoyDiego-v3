import IcGitHub from "../Icons/IcGitHub";
import IcInstagram from "../Icons/IcInstagram";
import IcLinkedIn from "../Icons/IcLinkedIn";

const SocialNetworks = ({ social }) => {
	return (
		<div className="tw-py-4">
			<div className="tw-flex tw-justify-around md:tw-justify-between">
				{social.map(({ name, url }) => (
					<a href={url} target="_blank" rel="noopener noreferrer">
						{name === "Instagram" ? (
							<IcInstagram
								color="#FFFFFF"
								width="40"
								height="40"
							/>
						) : name === "GitHub" ? (
							<IcGitHub color="#FFFFFF" width="40" height="40" />
						) : (
							<IcLinkedIn
								color="#FFFFFF"
								width="40"
								height="40"
							/>
						)}
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialNetworks;
