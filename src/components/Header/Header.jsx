import allContent from "../../content/data.json";
import SocialNetworks from "./SocialNetworks";
import LocationPhoneAndDownload from "./LocationPhoneAndDownload";
import NameAndProfession from "./NameAndProfession";

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
				<NameAndProfession
					name={name}
					surname={surname}
					splitProfession={splitProfession}
				/>

				<SocialNetworks social={social} />

				<LocationPhoneAndDownload
					location={location}
					mobile={mobile}
					urlCV={urlCV}
				/>
			</div>
		</div>
	);
};

export default Header;
