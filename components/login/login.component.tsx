import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import Button from '../button/button.component';

const Login = (props: any) => {
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.name === 'username') {
			setUserName(event.currentTarget.value);
		} else if ((event.currentTarget.name = 'password')) {
			setPassword(event.currentTarget.value);
		}
	};

	const onLogin = () => {
		if (
			userName === process.env.AUTH_USERNAME &&
			password === process.env.AUTH_PASSWORD
		) {
			dispatch(getUser({ data: { username: userName } }));
		} else {
			setMessage('You have entered an invalid username or password.');
			dispatch(getUser(null));
		}
	};

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			onLogin();
		}
	};

	return (
		<div className="h-[500px] w-full">
			<div className="pin flex items-center">
				<div className="fixed pin bg-black opacity-75 z-10"></div>

				<div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
					<div className="shadow-lg bg-white rounded-lg p-8">
						<h1 className="text-center text-2xl text-green-dark">Login</h1>
						<form className="pt-6 pb-2 my-2">
							<div className="mb-4">
								<label
									className="block text-sm font-bold mb-2"
									htmlFor="username"
								>
									Username
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									id="username"
									name="username"
									type="text"
									placeholder="Username"
									onChange={onChangeInput}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-sm font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
									id="password"
									name="password"
									type="password"
									placeholder="Password"
									onChange={onChangeInput}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="block md:flex items-center justify-between">
								<div onClick={onLogin}>
									<Button
										className="bg-w-dark-pink text-white font-semibold hover:shadow-lg bg-gradient-to-l
                                    from-[#E50075]
                                    to-[#FF2897] p-4 text-center rounded-xl"
										default={<span>Login</span>}
									></Button>
								</div>
							</div>
						</form>
						<span>{message}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
