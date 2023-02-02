import { render, cleanup, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import "@testing-library/jest-dom";

import SignUp from "../components/Signup";
import Login from "../components/Login";
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

it("should render the form correctly", () => {
	const { getByTestId } = render(<SignupForm />);
	expect(getByTestId("name-input")).toBeInTheDocument();
	expect(getByTestId("email-input")).toBeInTheDocument();
	expect(getByTestId("password-input")).toBeInTheDocument();
});

it("should show an error message when a public email is entered", () => {
	const { getByTestId } = render(<SignupForm />);
	const emailInput = getByTestId("email-input");
	const emailLabel = getByTestId("email-label");
	fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
	fireEvent.click(getByTestId("submit-button"));
	expect(emailInput).toHaveStyle("border-color: red");
	// expect(emailLabel).toHaveTextContent("Please enter your Work Email");
});

it("should show a success message when a work email is entered", () => {
	const { getByTestId } = render(<SignupForm />);
	const emailInput = getByTestId("email-input");
	fireEvent.change(emailInput, { target: { value: "test@work.com" } });
	fireEvent.submit(emailInput.form);
	expect(getByTestId("signup-success-message")).toBeInTheDocument();
});
