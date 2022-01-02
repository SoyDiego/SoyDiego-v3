import { useEffect } from "react";
import { circliful } from "js-plugin-circliful";
import "js-plugin-circliful/dist/main.css";
import Reveal from "../Utils/Reveal";

const Languages = () => {
	useEffect(() => {
		circliful.newCircle({
			percent: 100,
			id: "spanish",
			type: "simple",
			text: "ESPAÑOL",
		});

		circliful.newCircle({
			percent: 70,
			id: "english",
			type: "simple",
			text: "INGLÉS",
		});
	});

	return (
		<div className="tw-h-screen tw-grid tw-place-content-center tw-bg-slate-900">
			<Reveal
				className="tw-flex tw-flex-col tw-items-center md:tw-flex-row tw-justify-evenly"
				effect={[
					"tw-animate-fadeInLeftBig",
					"tw-animate-fadeInRightBig",
				]}>
				<div className="tw-w-60 tw-h-60 md:tw-mr-48" id="spanish"></div>

				<div className="tw-w-60 tw-h-60" id="english"></div>
			</Reveal>
		</div>
	);
};

export default Languages;
