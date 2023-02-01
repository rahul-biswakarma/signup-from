import React, { useRef } from "react";

import LockIcon from "../assets/icons/lock.svg";
import EmailIcon from "../assets/icons/email.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import IdCardIcon from "../assets/icons/id-card.svg";

export default function SignupForm() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const emailLabelRef = useRef(null);

	function handleSignupFormSubmit(e) {
		e.preventDefault();
		let emailInput = emailRef.current.value;

		let publicDomains = [
			"@google.com",
			"@yahoo.com",
			"@outlook.com",
			"@hotmail.com",
		];
		let isWorkEmail = true;

		publicDomains.map((publicDomain) => {
			if (emailInput.includes(publicDomain)) isWorkEmail = false;
		});

		if (isWorkEmail) alert(`Signup Successfull`);
		else {
			emailRef.current.style.borderColor = "red";
			emailLabelRef.current.innerText = "Please enter your Work Email";
		}

		nameRef.current.value = "";
		emailRef.current.value = "";
		passwordRef.current.value = "";
	}
	return (
		<form className="py-[3rem] flex flex-col gap-[2rem] max-[600px]:gap-[1rem]">
			<div>
				<label
					className=" text-black/60 text-sm"
					htmlFor="email"
				>
					Full Name
				</label>
				<div className="flex mt-[0.3rem]">
					<span className="w-[3rem] h-[2.5rem] flex justify-center items-center bg-input_bg rounded-l">
						<img
							src={IdCardIcon}
							alt="id card icon"
							className="w-5 h-auto"
						/>
					</span>
					<input
						data-testid="name-input"
						ref={nameRef}
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="text"
						placeholder="John Wick"
						required
					/>
				</div>
			</div>
			<div>
				<label
					ref={emailLabelRef}
					className=" text-black/60 text-sm"
					htmlFor="email"
				>
					Work Email
				</label>
				<div className="flex mt-[0.3rem]">
					<span className="w-[3rem] h-[2.5rem] flex justify-center items-center bg-input_bg rounded-l">
						<img
							src={EmailIcon}
							alt="id card icon"
							className="w-5 h-auto"
						/>
					</span>
					<input
						data-testid="email-input"
						ref={emailRef}
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="email"
						placeholder="name@work.com"
						required
					/>
				</div>
			</div>
			<div>
				<label
					className=" text-black/60 text-sm"
					htmlFor="email"
				>
					Password
				</label>
				<div className="flex mt-[0.3rem]">
					<span className="w-[3rem] h-[2.5rem] flex justify-center items-center bg-input_bg rounded-l">
						<img
							src={LockIcon}
							alt="id card icon"
							className="w-5 h-auto"
						/>
					</span>
					<input
						data-testid="password-input"
						ref={passwordRef}
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="password"
						required
					/>
				</div>
			</div>
			<button
				onClick={(e) => handleSignupFormSubmit(e)}
				className="bg-blue_1 hover:bg-blue_2 p-[0rem_2rem] h-[2.5rem] rounded flex  items-center justify-center"
			>
				<span className="code-font text-sm text-white">Sign Up</span>
				<img
					className="w-5 h-auto ml-[1rem]"
					src={ArrowIcon}
					alt="arrow icon"
				/>
			</button>
		</form>
	);
}
