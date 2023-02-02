import { render, cleanup, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import "@testing-library/jest-dom";

import SignUp from "../components/Signup";
import SignupForm from "../components/SignupForm";

afterEach(cleanup);

const renderWithRouter = (component) => {
	const history = createMemoryHistory();
	return {
		...render(
			<Router
				location={history.location}
				navigator={history}
			>
				{component}
			</Router>
		),
	};
};

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

it("After submit, Singup form email inputs should be empty", () => {
	const { getByTestId } = render(<SignupForm />);
	fireEvent.click(getByTestId("submit-button"));
	expect(getByTestId("email-input")).toHaveDisplayValue("");
});

it("After submit, Singup form password inputs should be empty", () => {
	const { getByTestId } = render(<SignupForm />);
	fireEvent.click(getByTestId("submit-button"));
	expect(getByTestId("password-input")).toHaveDisplayValue("");
});

it("After submit, Singup form name inputs should be empty", () => {
	const { getByTestId } = render(<SignupForm />);
	fireEvent.click(getByTestId("submit-button"));
	expect(getByTestId("name-input")).toHaveDisplayValue("");
});

it("login button has a correct path", () => {
	const { getByTestId } = renderWithRouter(<SignUp />);
	expect(getByTestId("login-link")).toHaveAttribute("href", "/login");
});

// it("Sign up url is correct", () => {
// 	const history = createMemoryHistory();
// 	const { getByTestId } = render(
// 		<Router
// 			location={history.location}
// 			navigator={history}
// 		>
// 			<SignUp />
// 		</Router>
// 	);
// 	fireEvent.click(getByTestId("login-link"));
// 	expect(history.location.pathname).toBe("/login");
// });
