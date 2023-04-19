import { logRoles, render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  const setup = () => render(<Home />);
  test('has a title of "Westcoast Education - Digital"', () => {
    //setup();
    const { container } = setup();
    logRoles(container);

    const pageTitle = screen.getByRole("heading", {
      name: "Westcoast Education - Digital",
    });

    expect(pageTitle).toBeInTheDocument();
  });
});
