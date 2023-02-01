import Header from "./Header";

import SignupForm from "./SignupForm";

export default function LandingPage() {
	return (
		<div className="w-full h-[100vh] overflow-hidden grid grid-cols-[700px_auto]">
			<section className="flex flex-col items-center justify-center bg-bg_1 border-r-[1px] border-border_color w-full h-full p-24">
				<main className="max-w-[500px]">
					<Header />
					<SignupForm />
					<p className="text-sm text-black/40">
						Already have an account?{" "}
						<span className="text-black font-semibold cursor-pointer">
							<a href="/login">Login</a>
						</span>
					</p>
				</main>
			</section>
			<section className=" w-full h-full relative bg-signupHeroImage bg-center bg-cover no-repeat"></section>
		</div>
	);
}
