import React from "react";
import { screen, render } from "@testing-library/react";

import App from "./components/App";

describe("App component", () => {
  render(<App />);

  it("should have the right message in the dom", () => {
    const message = "Hello World";

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
