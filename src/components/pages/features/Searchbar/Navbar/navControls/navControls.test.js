import React from "react";
import { screen, render } from "@testing-library/react";
import NavControls from "./NavControls";

describe("NavControls", () => {
  it("should render a div with the classname nav-controls", () => {
    render(<NavControls />);
    const navControlBox = screen.getByTestId("nav-control-box");
    expect(navControlBox).toBeInTheDocument();
    expect(navControlBox).toHaveClass("nav-controls");
  });
  it("should render a settings button, with a settings icon", () => {
    render(<NavControls />);
    const settingsButton = screen.getByTestId("settings-button");
    expect(settingsButton).toBeInTheDocument();
    expect(settingsButton).toContainHTML(
      '<button data-testid="settings-button"><i class="material-icons">settings</i></button>'
    );
  });
});
