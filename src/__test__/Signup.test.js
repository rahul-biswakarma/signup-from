import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignupForm from "../components/SignupForm";

afterEach(cleanup);

it("Email Input Feilds has type=email in Login form", () => {
	const { getByTestId } = render(<SignupForm />);
	expect(getByTestId("email-input")).toHaveAttribute("type", "email");
});

it("passwortd Input Feilds has type=password in Login form", () => {
	const { getByTestId } = render(<SignupForm />);
	expect(getByTestId("password-input")).toHaveAttribute("type", "password");
});

it("Name Input Feilds has type=text in Login form", () => {
	const { getByTestId } = render(<SignupForm />);
	expect(getByTestId("name-input")).toHaveAttribute("type", "text");
});
