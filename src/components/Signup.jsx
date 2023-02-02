import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import SignupForm from "./SignupForm";

export default function LandingPage() {
	useEffect(() => {
		document.title = "Sign Up | Devrev";
	}, []);

	return (
		<div className="w-full h-[100vh] overflow-hidden grid max-[800px]:grid-cols-[100%] max-[1200px]:grid-cols-[500px_auto] grid-cols-[700px_auto]">
			<section className="flex flex-col items-center justify-center bg-bg_1 border-r-[1px] border-border_color w-full h-full p-12">
				<main className="max-w-[500px]">
					<Header />
					<SignupForm />
					<p className="text-sm text-black/40">
						Already have an account?{" "}
						<span className="text-black font-semibold cursor-pointer">
							<a
								data-testid="login-link"
								href="/login"
							>
								Login
							</a>
						</span>
					</p>
				</main>
			</section>
			<section className="max-[800px]:hidden w-full h-full relative bg-signupHeroImage bg-center bg-cover no-repeat"></section>
		</div>
	);
}
