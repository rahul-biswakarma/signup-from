import React from "react";

import LockIcon from "../assets/icons/lock.svg";
import EmailIcon from "../assets/icons/email.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import IdCardIcon from "../assets/icons/id-card.svg";

export default function SignupForm() {
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
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="email"
						placeholder="John Wick"
					/>
				</div>
			</div>
			<div>
				<label
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
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="email"
						placeholder="name@work.com"
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
						className="w-full h-[2.5rem] border border-input_bg rounded-r px-4 code-font"
						type="password"
					/>
				</div>
			</div>
			<button className="bg-blue_1 hover:bg-blue_2 p-[0rem_2rem] h-[2.5rem] rounded flex  items-center justify-center">
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
