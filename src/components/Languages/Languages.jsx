import Reveal from "../Utils/Reveal";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Languages = ({ allContent }) => {
	return (
		<div className="tw-py-20 tw-flex tw-flex-col tw-justify-center tw-bg-slate-900">
			<div className="tw-text-center tw-py-8">
				<h2 className="title tw-text-xl tw-text-white tw-font-extrabold md:tw-text-3xl tw-mb-5">
					{allContent.languages.titleLanguages}
				</h2>
			</div>
			<Reveal
				className="tw-w-full tw-flex tw-flex-col tw-items-center md:tw-flex-row tw-justify-evenly"
				effect={[
					"tw-animate-fadeInLeftBig",
					"tw-animate-fadeInRightBig",
				]}>
				{allContent.languages.content.map(
					({ language, percentage }, index) => (
						<div
							key={language}
							className={`${
								index === 0 && "tw-mb-10 md:tw-mb-0"
							} tw-w-52 tw-h-52`}>
							<CircularProgressBar
								percent={percentage}
								colorCircle="#c9c7c7"
								fontColor="#FFFFFF"
								fontSize="1rem"
								stroke={7}
								strokeBottom={4}
								speed={50}
								linearGradient={[
									"#db2777",
									"#ec4899",
									"#f472b6",
								]}>
								<div className="tw-text-center">
									<p className="tw-mt-14 tw-text-pink-500 tw-font-extrabold tw-uppercase">
										{language}
									</p>
								</div>
							</CircularProgressBar>
						</div>
					)
				)}
			</Reveal>
		</div>
	);
};

export default Languages;
