import { fireEvent, render, screen } from "@testing-library/react";
import {
	createBrowserRouter,
	MemoryRouter,
	BrowserRouter,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import LandingPage from "../components/LandingPage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// function wrapper({ children }) {
// 	const queryClient = new QueryClient({
// 		defaultOptions: { queries: { retry: false } },
// 	});
// 	return (
// 		<MemoryRouter initialEntries={["/"]}>
// 			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// 		</MemoryRouter>
// 	);
// }

describe("Router", () => {
	// const router = createBrowserRouter([
	// 	{ path: "/", element: <LandingPage /> },
	// 	{ path: "/login", element: <Login /> },
	// 	{ path: "/signup", element: <Signup /> },
	// ]);

	test("renders the landing page by default", async () => {
		const user = userEvent.setup();

		const { getByTestId } = render(<LandingPage />, { wrapper: BrowserRouter });
		expect(getByTestId("continue-with-email-link")).toBeInTheDocument();
		expect(getByTestId("landing-component")).toBeInTheDocument();
	});

	// it("renders the login page at /login", () => {
	// 	render(<RouterProvider router={router} />, {
	// 		initialEntries: ["/login"],
	// 	});
	// 	const login = screen.getByTestId("login-component");
	// 	expect(login).toBeInTheDocument();
	// });

	// it("renders the signup page at /signup", () => {
	// 	render(<RouterProvider router={router} />, {
	// 		initialEntries: ["/signup"],
	// 	});
	// 	const signup = screen.getByTestId("signup-component");
	// 	expect(signup).toBeInTheDocument();
	// });
});
