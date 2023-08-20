import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { REGISTER_API } from "../../api/api_list";

export default function Registration() {
	const Navigate = useNavigate();
	const toast = useToast();

	const schema = yup.object().shape({
		username: yup
			.string()
			.required("Required")
			.min(3, "Username is too short - should be 3 chars minimum."),
		email: yup.string().required("Required").email("Email must be valid"),
		password: yup
			.string()
			.required("Required")
			.min(8, "Password is too short - should be 8 chars minimum.")
			.max(20),
		confirmPassword: yup
			.string()
			.required("Required")
			.oneOf([yup.ref("password")], "Your passwords do not match."),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleRegistration = async (values) => {
		const user = {
			username: values.username,
			email: values.email,
			password: values.password,
		};

		try {
			const response = await Axios.post(REGISTER_API, user);

			if (response.status === 200) {
				toast({
					title: "Account successfully created!",
					description: "We've created your account for you.",
					status: "success",
					duration: 3000,
					isClosable: true,
					position: "top-right",
				});
				Navigate("/");
			}
		} catch (error) {
			toast({
				title: "Failed creating an account!",
				description: "Please check your email and password.",
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top-right",
			});
		}
	};
	return (
		<div>
			<div className=" text-white bg-white flex overflow-auto">
				<div className="mx-auto h-screen flex justify-center items-center p-20">
					<div className="flex flex-col w-full mx-auto max-w-lg px-4 py-4 rounded-md">
						<div className="flex flex-col gap-y-2 mb-4">
							<h1 className="text-5xl font-bold text-black text-center">
								Create an Account!
							</h1>
							<span className="text-md tracking-wider text-center text-black">
								Welcome back to Christ community!
							</span>
						</div>

						<form
							onSubmit={handleSubmit(handleRegistration)}
							noValidate
						>
							<div className="flex flex-col gap-y-2">
								<div className="flex flex-col gap-x-10 justify-start">
									<label
										htmlFor="username"
										className="font-bold text-zinc-600"
									>
										username
									</label>
									<input
										type="text"
										placeholder="username"
										className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
										{...register("username")}
									/>
									{errors.username && (
										<p className="text-red-500">
											{errors.username.message?.toString()}
										</p>
									)}
								</div>
								<div className="flex flex-col gap-x-10 justify-start">
									<label
										htmlFor="name"
										className="font-bold text-zinc-600"
									>
										Email
									</label>
									<input
										type="email"
										placeholder="Email"
										required
										className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
										{...register("email")}
									/>
									{errors.email && (
										<p className="text-red-500">
											{errors.email.message?.toString()}
										</p>
									)}
								</div>
								<div className="flex flex-col gap-x-10 justify-start">
									<label
										htmlFor="password"
										className="font-bold text-zinc-600"
									>
										Password
									</label>
									<input
										minLength="6"
										type="password"
										placeholder="Enter Password"
										required
										className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
										{...register("password")}
									/>
									{errors.password && (
										<p className="text-red-500">
											{errors.password.message?.toString()}
										</p>
									)}
								</div>
								<div className="flex flex-col gap-x-10 justify-start">
									<label
										htmlFor="password"
										className="font-bold text-zinc-600"
									>
										Confirm Password
									</label>
									<input
										type="password"
										placeholder="Confirm Password"
										className="ring-1 ring-zinc-800 text-gray-500 px-4 py-2 pr-20 rounded-md"
										{...register("confirmPassword")}
									/>
									{errors.confirmPassword && (
										<p className="text-red-500">
											{errors.confirmPassword.message?.toString()}
										</p>
									)}
								</div>
								<div className="flex justify-end">
									<span className="text-black">
										Already have an account?{" "}
										<Link
											to="/"
											className="text-[#59A52C] font-bold"
										>
											login!
										</Link>
									</span>
								</div>
								<div className="flex justify-center items-center mt-4">
									<button
										type="submit"
										className="px-10 py-2 rounded-md w-full bg-black"
									>
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
