import React from "react";

import InfoIcon from "../assets/icons/info-icon.svg";
import EmailIcon from "../assets/icons/email-icon.svg";
import GoogleIcon from "../assets/icons/google-icon.svg";

export default function SignUpButtons() {
	return (
		<div className="flex flex-col gap-[1rem] w-full mt-[4rem]">
			<button className="relative w-full bg-blue_1 p-[0.5rem_1rem] rounded flex items-center">
				<img
					src={GoogleIcon}
					alt="Google Icon"
					className="w-6 h-6"
				/>
				<span className="absolute text-center w-full text-white text-sm font-[500] ml-2">
					Continue with Google
				</span>
			</button>
			<a href="/signup">
				<button className="relative w-full bg-dark_gray p-[0.5rem_1rem] rounded flex items-center">
					<img
						src={EmailIcon}
						alt="Google Icon"
						className="w-6 h-6"
					/>
					<span className="absolute text-center w-full text-white text-sm font-[500] ml-2">
						Continue with Email
					</span>
				</button>
			</a>
			<div className="flex items-center gap-[10px]">
				<img
					src={InfoIcon}
					alt="Info Icon"
					className="w-5 h-5"
				/>
				<p className="text-sm text-black/40">
					We recommend using your work email
				</p>
			</div>
		</div>
	);
}