import { useEffect } from "react";

import Header from "./Header";
import LoginForm from "./LoginForm";

export default function LandingPage() {
	useEffect(() => {
		document.title = "Login | Devrev";
	}, []);

	return (
		<div
			data-testid="login-component"
			className="w-full h-[100vh] overflow-hidden grid max-[800px]:grid-cols-[100%] max-[1200px]:grid-cols-[500px_auto] grid-cols-[700px_auto]"
		>
			<section className="flex flex-col items-center justify-center bg-bg_1 border-r-[1px] border-border_color w-full h-full p-12">
				<main className="max-w-[500px]">
					<Header />
					<LoginForm />
					<p className="text-sm text-black/40">
						Don't have an account?{" "}
						<span className="text-black font-semibold cursor-pointer">
							<a href="/signup">Sign Up</a>
						</span>
					</p>
				</main>
			</section>
			<section className="max-[800px]:hidden w-full h-full relative bg-loginHeroImage bg-center bg-cover no-repeat"></section>
		</div>
	);
}
