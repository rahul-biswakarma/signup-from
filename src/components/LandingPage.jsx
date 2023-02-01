import Header from "./Header";

import SignUpButtons from "./SignUpButtons";
import ProductImage from "../assets/images/product-image.png";

export default function LandingPage() {
	return (
		<div className="w-full h-[100vh] overflow-hidden grid grid-cols-[700px_auto]">
			<section className="flex flex-col items-center justify-center bg-bg_1 border-r-[1px] border-border_color w-full h-full p-24">
				<main className="max-w-[500px]">
					<Header />
					<SignUpButtons />
					<p className="text-sm text-black/40 mt-[4rem]">
						By continuing, you acknowledge that you have read and understood,
						and agree to DevRev's{" "}
						<strong className="text-black font-semibold">
							Terms & Conditions
						</strong>{" "}
						and{" "}
						<strong className="text-black font-semibold">Privacy Policy</strong>
						.
					</p>
					<p className="text-sm text-black/40 mt-[3rem]">
						Already have an account?{" "}
						<span className="text-black font-semibold cursor-pointer">
							<a href="/login">Login</a>
						</span>
					</p>
				</main>
			</section>
			<section className="bg-bg_2 w-full h-full relative p-24 ">
				<h2 className="text-black text-5xl max-w-[600px] absolute top-[5rem] left-[8rem] font-bold">
					Support as One <br />
					<span className="text-[#666666]">with the world's first DevCRM</span>
				</h2>
				<img
					src={ProductImage}
					alt="Product Image"
					className="absolute top-[20rem] left-[8rem] w-[700px] h-auto"
				/>
			</section>
		</div>
	);
}
