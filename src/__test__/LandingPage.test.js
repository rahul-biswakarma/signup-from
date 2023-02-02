import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

import LandingPage from "../components/Login";
import SignUpButtons from "../components/SignUpButtons";

afterEach(cleanup);

it("Landing Page snapshot check", () => {
	const { asFragment } = render(<LandingPage />);
	expect(asFragment(<LandingPage />)).toMatchSnapshot();
});

it("Continue of google buttons not disabled", () => {
	const { getByTestId } = render(<SignUpButtons />);
	expect(getByTestId("continue-with-google-button")).not.toHaveAttribute(
		"disabled"
	);
});

it("Continue of email buttons not disabled", () => {
	const { getByTestId } = render(<SignUpButtons />);
	expect(getByTestId("continue-with-email-button")).not.toHaveAttribute(
		"disabled"
	);
});
