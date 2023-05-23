import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import {useEffect, useState} from "react";
import {useContext} from "react";
import {LocaleContext} from "../../context/LocaleContext";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";

const ContactForm = () => {
	const [successFullInfo, setSuccessFullInfo] = useState(false);
	const { locale } = useContext(LocaleContext);

	useEffect(()=>{
			setTimeout(function() {
				setSuccessFullInfo(false)
			}, 3000);
		},
		[successFullInfo]);

	// form validation rules
	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.required('First Name is required'),
		lastName: Yup.string()
			.required('Last name is required'),
		subject: Yup.string()
			.required('Subject is required'),
		email: Yup.string()
			.required('Email is required')
			.email('Email is invalid'),
		describe: Yup.string()
			.required('Describe name is required')
	});

	const contactSchema = { resolver: yupResolver(validationSchema)};

	const { register, handleSubmit, reset, formState } = useForm(contactSchema);
	const { errors } = formState;

	const onSubmit = async (data:any) => {
		const formData = {
			to: "capobecchino@gmail.com" || `${process.env.SUPPORT_EMAIL}`,
			from: data.email,
			subject: `A message from wopta.it : ${data.subject}`,
			html: `<b>firstName:</b> ${data.firstName}<br><b>lastName:</b> ${data.lastName}<br><br><b>Message:</b>${data.describe}`
		};
		try {
			let res = await fetch(`${process.env.API_BASE_URL}/email`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${process.env.API_TOKEN}`
				},
				body: JSON.stringify(formData),
			});
			const result = await res.json();
			reset();
			setSuccessFullInfo(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="text-center relative">
				<form
					className="flex gap-6 flex-col pt-20 md:w-[690px] mx-auto text-left"
				>
					<div className="flex gap-4 flex-col md:flex-row">
						<div className="flex-1">
							<div className="text-base relative border rounded-lg appearance-none label-floating text-left border-w-light-blue">
								<input
									type="text"
									className="js-name w-full py-2 px-3 h-[60px] leading-normal rounded-lg placeholder:invisible"
									placeholder="First Name"
									id="firstName"
									{...register('firstName')}
								/>
								<label
									htmlFor="firstName"
									className="absolute block top-2/4 transform -translate-y-2/4 text-base left-0 w-full px-3 py-2 leading-normal"
								>
									First Name
								</label>
								<div className="absolute -bottom-5 left-2 text-w-dark-pink text-xs">{errors.firstName?.message}</div>
							</div>
						</div>
						<div className="flex-1">
							<div className="text-base relative border rounded-lg appearance-none label-floating text-left border-w-light-blue">
								<input
									type="text"
									className="w-full py-2 px-3 h-[60px] leading-normal rounded-lg placeholder:invisible"
									placeholder="Last Name"
									id="lastName"
									{...register('lastName')}
								/>
								<label
									htmlFor="lastName"
									className="absolute block top-2/4 transform -translate-y-2/4 text-base left-0 w-full px-3 py-2 leading-normal"
								>
									Last Name
								</label>
								<div className="absolute -bottom-5 left-2 text-w-dark-pink text-xs">{errors.lastName?.message}</div>
							</div>
						</div>
					</div>
					<div className="text-base relative border rounded-lg appearance-none label-floating text-left border-w-light-blue">
						<input
							type="email"
							className="w-full py-2 px-3 h-[60px] leading-normal rounded-lg placeholder:invisible"
							placeholder="Email"
							id="email"
							{...register('email')}
						/>
						<label
							htmlFor="email"
							className="absolute block top-2/4 transform -translate-y-2/4 text-base left-0 w-full px-3 py-2 leading-normal"
						>
							Email
						</label>
						<div className="absolute -bottom-5 left-2 text-w-dark-pink text-xs">{errors.email?.message}</div>
					</div>
					<div className="text-base relative border rounded-lg appearance-none label-floating text-left border-w-light-blue">
						<select id="subject" {...register('subject')} placeholder="Select Any Subject"
								className={`w-full py-2 px-3 h-[60px] leading-normal rounded-lg placeholder:invisible ${errors.title ? 'is-invalid' : ''}`}>
							<option value=""/>
							<option value="I need an insurance">I need an insurance</option>
							<option value="I want to be part of WOPTA team">I want to be part of WOPTA team</option>
						</select>
						<label htmlFor="subject"
							   className="absolute w-10 block top-2/4 transform -translate-y-2/4 text-base left-0 w-full px-3 py-2 leading-normal">Subject</label>
						<div className="absolute -bottom-5 left-2 text-w-dark-pink text-xs">{errors.subject?.message}</div>
					</div>
					<div className="text-base relative border rounded-lg appearance-none label-floating text-left border-w-light-blue">
							<textarea
								className="leading-normal placeholder:invisible  text-base pt-3 pb-2 block h-[60px] w-full px-4 rounded-lg mt-0 bg-white border border-w-light-blue appearance-none focus:outline-none border-gray-200"
								placeholder="Describe what you are looking for"
								id="describe"
								{...register('describe')}
							/>
						<label
							htmlFor="describe"
							className="absolute block text-base top-[8.5px] left-0 w-full px-4 py-2 leading-normal"
						>
							Describe what you are looking for
						</label>
					</div>
					<div className="flex items-center">
						<div className="relative">
							<input
								className="appearance-none h-9 w-9 border border-gray-300 rounded-lg bg-white checked:bg-w-dark-pink checked:border-bg-w-dark-pink focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
								type="checkbox"
								id="flexCheckDefault"
							/>
							<div className="h-3 w-3 rounded-full absolute top-2/4 left-2/4 transform translate -translate-y-2/4 -translate-x-2/4 bg-white" />
						</div>
						<label
							className="text-w-dark text-sm ml-3"
							htmlFor="flexCheckDefault"
						>
							I’d like to receive news and marketing emails from WOPTA
						</label>
					</div>
					<div className="flex justify-center">
					<button
						className="flex items-center justify-center bg-w-dark-pink h-[46px] w-[204px] text-white font-semibold hover:shadow-lg bg-back-grad-2 p-4 text-center rounded-xl"
						type="button" onClick={handleSubmit(onSubmit)}
					>
						<span className="text-sm block">Send</span>
					</button>
				</div>
				</form>
				{successFullInfo &&
					<div className="text-center font-semibold text-green-600 text-base absolute -bottom-16 transform left-/4 -translate-Y-2/4 w-full">
						{ locale === 'en' &&<span>Thanks to contacting us, message send successfully.</span>}
						{ locale === 'it' &&<span>Grazie di averci contatto, messaggio inviato correttamente.</span>}
					</div>
				}
			</div>
		</>
	);
};

export default ContactForm;
