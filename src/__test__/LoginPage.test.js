import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoginForm from "../components/LoginForm";

afterEach(cleanup);

it("Email Input Feilds has type=email in Login form", () => {
	const { getByTestId } = render(<LoginForm />);
	expect(getByTestId("email-input")).toHaveAttribute("type", "email");
});

it("passwortd Input Feilds has type=password in Login form", () => {
	const { getByTestId } = render(<LoginForm />);
	expect(getByTestId("password-input")).toHaveAttribute("type", "password");
});
