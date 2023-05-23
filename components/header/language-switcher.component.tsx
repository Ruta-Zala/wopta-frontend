import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { locales } from '../../locales';

const LanguageSwitcher = () => {
	const router = useRouter();
	const { locale, setLocale } = useContext(LocaleContext);

	const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLocale(e.target.value);
		if (router.query.product_slug) {
			router.push({
				query: {
					locale: e.target.value,
					product_slug: router.query.product_slug,
				},
			});
		} else {
			router.push({
				query: {
					locale: e.target.value,
				},
			});
		}
	};

	return (
		<select
			className="bg-[#FBFAFF] cursor-pointer appearance-none font-bold text-xs focus:border-none rounded-xl py-[0.950rem] px-[1.075rem] focus:outline-none"
			value={locale}
			onChange={(e) => changeLocale(e)}
		>
			{locales.map((locale, index) => (
				<option value={locale} key={index}>
					{locale.toUpperCase()}
				</option>
			))}
		</select>
	);
};

export default LanguageSwitcher;
