import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Temperature_Sensor from "../Stats/Temperature_Sensor";

describe("Temperature_Sensor", () => {
  const mockTemperature = 25;

  test("renders without crashing", () => {
    render(<Temperature_Sensor temperature={mockTemperature} />);
  });

  test("renders the correct title", () => {
    render(<Temperature_Sensor temperature={mockTemperature} />);
    const titleElement = screen.getByText("Temperature");
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the correct temperature value", () => {
    render(<Temperature_Sensor temperature={mockTemperature} />);
    const temperatureElement = screen.getByText(`${mockTemperature}°C`);
    expect(temperatureElement).toBeInTheDocument();
  });
});
