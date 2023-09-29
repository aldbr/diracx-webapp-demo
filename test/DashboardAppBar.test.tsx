import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DashboardAppBar from "@/components/layout/DashboardAppBar";

describe("<DashboardAppBar>", () => {
  // Normal case
  it("renders without crashing", () => {
    render(
      <DashboardAppBar>
        <h1>Test</h1>
      </DashboardAppBar>,
    );
  });

  // Testing a hypothetical toggle button for the drawer
  it("toggles the drawer on button click", () => {
    const { getByTestId } = render(
      <DashboardAppBar>
        <h1>Test</h1>
      </DashboardAppBar>,
    );
    const toggleButton = getByTestId("drawer-toggle-button");

    // Assuming the drawer is initially closed
    expect(getByTestId("drawer")).not.toBeVisible();

    // Simulate a button click
    fireEvent.click(toggleButton);

    // Expect the drawer to now be visible
    expect(getByTestId("drawer")).toBeVisible();
  });
});
