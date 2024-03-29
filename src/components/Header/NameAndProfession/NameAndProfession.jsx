const NameAndProfession = ({ name, surname, splitProfession }) => {
	return (
		<div className="tw-text-center tw-py-4">
			<h1 className="tw-text-3xl md:tw-text-5xl tw-font-extrabold tw-pb-3 tw-animate-fadeInLeft">
				<span className="tw-text-white">{name}</span>
				<span className="tw-text-pink-500 tw-pl-2">{surname}</span>
			</h1>
			<h2 className="tw-text-3xl tw-font-extrabold tw-animate-fadeInRight">
				<span className="tw-text-white">{splitProfession[0]} </span>
				<span className="title md:tw-p-2">
					{splitProfession[1]}
				</span>
			</h2>
		</div>
	);
};

export default NameAndProfession;
