import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Remote_Navbar";

describe("Navbar", () => {
  test("renders without crashing", () => {
    render(<Navbar />);
  });

  test("renders the correct number of MobileNavLink components", () => {
    render(<Navbar />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(2); // Adjust this to the expected number of links
  });
});
