import SocialNetworks from "./SocialNetworks";
import LocationPhoneAndDownload from "./LocationPhoneAndDownload";
import NameAndProfession from "./NameAndProfession";

const Header = ({ allContent, setAllContent, allContentEN, allContentES }) => {
	const changeLanguage = () => {
		setAllContent(
			allContent === allContentES ? allContentEN : allContentES
		);
	};

	const {
		name,
		surname,
		profession,
		location,
		mobile,
		urlCV,
		bgHeader,
		social,
		textDownloadCV,
	} = allContent.header;
	const splitProfession = profession.split(" ");

	return (
		<div
			id="header"
			className="tw-relative tw-h-screen tw-grid tw-place-content-center tw-bg-cover tw-bg-no-repeat tw-bg-center tw-bg-slate-300"
			style={{
				backgroundImage: `url(${bgHeader})`,
			}}>
			<div className="tw-bg-black/50 tw-absolute tw-top-0 tw-w-full tw-h-full tw-full tw-z-0"></div>

			<div className="tw-relative sm:tw-h-full md:tw-h-screen tw-grid tw-place-content-center tw-z-10">
				<div
					onClick={changeLanguage}
					className="tw-p-1 tw-bg-pink-500 tw-text-white tw-text-xs tw-font-bold tw-z-10 tw-rounded tw-cursor-pointer tw-mx-auto tw-mb-5">
					{allContent.header.language}
				</div>

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
					textDownloadCV={textDownloadCV}
				/>
			</div>
		</div>
	);
};

export default Header;
