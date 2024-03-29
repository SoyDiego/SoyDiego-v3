import { Children, cloneElement, createElement } from "react";
import { useInView } from "react-intersection-observer";

const RevealCore = ({ children, className }) => {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
	const child = Children.only(children);

	return cloneElement(child, {
		ref,
		className: `${child.props?.className ?? ""} ${
			inView
				? `${className} tw-animate-distance-[500px] tw-animate-duration-[1500ms]`
				: "!tw-opacity-0"
		}`,
	});
};

const Reveal = ({ as, children, effect, ...props }) =>
	createElement(
		as ?? "div",
		props,
		Children.map(children, (child, index) =>
			RevealCore({
				children: child,
				className: `${
					effect[index] ?? effect[effect.length - 1]
				} tw-animate-delay-[${index * 500}ms]`,
			})
		)
	);

export default Reveal;
export { RevealCore };

/*
safelist

animate-delay-[500ms]
animate-delay-[1000ms]
animate-delay-[1500ms]
*/
