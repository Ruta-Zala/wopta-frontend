import React from 'react';
import headerBorder from '../../icons/assist-border.svg';
import Image from 'next/image';

export function Assist() {
	return (
		<section className="mt-28 text-w-dark">
			<div className="font-sans 2xl:container 2xl:mx-auto 2xl:px-4">
				<div className="flex-col flex gap-8 justify-center items-center">
					<div className="mt-5 text-[28px] md:text-[32px] justify-center flex flex-wrap">
						<span>Sorridi</span>
						<div className="relative mx-2 text-w-dark-pink font-medium text-center">
							<span> sei al sicuro</span>
							<div className="absolute -bottom-5 hidden lg:block">
								<Image src={headerBorder} alt="headerBorder" />
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<div className="bg-white shadow-custom rounded-xl">
							<div className="text-sm py-7 px-6">
							conveniente pagamento mensile e finanziamento franchigia
							</div>
						</div>
						<div className="bg-white shadow-custom rounded-xl">
							<div className="text-sm py-7 px-6">
							completa paghi uguale ti copriamo di piu
							</div>
						</div>
						<div className="bg-white shadow-custom rounded-xl">
							<div className="text-sm py-7 px-6">
							paghiamo il premio se ti succede qualcosa
							</div>
						</div>
						<div className="bg-white shadow-custom rounded-xl">
							<div className="text-sm py-7 px-6">
							se hai un sinistro paghiamo il tuo rinnovo
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
