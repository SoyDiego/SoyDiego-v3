import { useEffect } from "react";
import { circliful } from "js-plugin-circliful";
import "js-plugin-circliful/dist/main.css";
import Reveal from "../Utils/Reveal";

const Languages = ({ allContent }) => {
	useEffect(() => {
		allContent.languages.map(({ language, percentage }) =>
			circliful.newCircle({
				percent: percentage,
				id: language,
				type: "simple",
				text: language.toUpperCase(),
				animateInView: true,
			})
		);
	}, [allContent]);

	return (
		<div className="tw-py-20 tw-grid tw-place-content-center tw-bg-slate-900">
			<Reveal
				className="tw-flex tw-flex-col tw-items-center md:tw-flex-row tw-justify-evenly"
				effect={[
					"tw-animate-fadeInLeftBig",
					"tw-animate-fadeInRightBig",
				]}>
				{allContent.languages.map(({ language }, index) => (
					<>
						<div
							className={`"tw-w-60 tw-h-60 ${
								index === 0 && "md:tw-mr-48"
							}`}
							id={language}></div>
					</>
				))}
			</Reveal>
		</div>
	);
};

export default Languages;
