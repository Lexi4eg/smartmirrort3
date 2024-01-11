import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Mode_Selector from "../Mode_Selector";

describe("Mode_Selector", () => {
  test("renders without crashing", () => {
    render(<Mode_Selector />);
  });

  test("renders the correct title", () => {
    render(<Mode_Selector />);
    const titleElement = screen.getByText("Mode Selector");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the correct number of Button components", () => {
    render(<Mode_Selector />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(9);
  });

  test("each Button component displays the correct number", () => {
    render(<Mode_Selector />);
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((number) => {
      const buttonElement = screen.getByText(`${number}`);
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
