import React from "react";

const Education = () => {
	return (
		<div className="tw-w-full tw-bg-slate-900">
			<div className="tw-flex tw-flex-col md:tw-grid tw-grid-cols-9 tw-mx-auto tw-p-8 tw-text-blue-50">
				{/* <!-- left --> */}
				<div className="tw-flex tw-flex-row-reverse md:tw-contents">
					<div className="tw-bg-slate-600 tw-col-start-1 tw-col-end-5 tw-p-4 tw-rounded-xl tw-my-4 tw-ml-auto tw-shadow-md tw-text-center">
						<h5 className="tw-leading-tight tw-text-center tw-text-pink-400 tw-font-bold">
							2009-2012
						</h5>
						<h3 className="tw-font-semibold tw-text-lg tw-mb-1">
							Instituto Superior Argentino de Computación
						</h3>
						<h4 className="tw-font-semibold tw-text-lg tw-mb-1">
							Analista de Sistemas
						</h4>
						<p className="tw-leading-tight tw-text-center">
							Legalizado y Certificado en el Ministerio de
							Relaciones Exteriores para poder trabajar en el
							Exterior.
						</p>
					</div>
					<div className="tw-col-start-5 tw-col-end-6 md:tw-mx-auto tw-relative tw-mr-10">
						<div className="tw-h-full tw-w-6 tw-flex tw-items-center tw-justify-center">
							<div className="tw-h-full tw-w-1 tw-bg-pink-600 tw-pointer-events-none"></div>
						</div>
						<div className="tw-w-6 tw-h-6 tw-absolute tw-top-1/2 tw--mt-3 tw-rounded-full tw-bg-pink-400 tw-shadow"></div>
					</div>
				</div>
				{/* <!-- right --> */}
				<div className="tw-flex md:tw-contents">
					<div className="tw-col-start-5 tw-col-end-6 tw-mr-10 md:tw-mx-auto tw-relative">
						<div className="tw-h-full tw-w-6 tw-flex tw-items-center tw-justify-center ">
							<div className="tw-h-full tw-w-1 tw-bg-pink-600 tw-pointer-events-none"></div>
						</div>
						<div className="tw-w-6 tw-h-6 tw-absolute tw-top-1/2 tw--mt-3 tw-rounded-full tw-bg-pink-400 tw-shadow"></div>
					</div>
					<div className="tw-bg-slate-600 tw-col-start-6 tw-col-end-10 tw-p-4 tw-rounded-xl tw-my-4 tw-mr-auto tw-shadow-md tw-text-center">
						<h5 className="tw-leading-tight tw-text-center tw-text-pink-400 tw-font-bold">
							2002-2006
						</h5>
						<h3 className="tw-font-semibold tw-text-lg tw-mb-1">
							Nuestra Sra. del Buen y Perpetuo Socorro
						</h3>
						<h4>Bachillerato</h4>
						<p className="tw-leading-tight tw-text-center">
							Perito Mercantil
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
