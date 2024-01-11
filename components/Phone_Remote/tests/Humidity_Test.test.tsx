import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Humidity_Sensor from "../Humidity_Sensor";

describe("Humidity_Sensor", () => {
  test("renders with correct humidity", () => {
    const mockHumidity = 50;
    render(<Humidity_Sensor humidity={mockHumidity} />);
    const humidityElement = screen.getByText(`${mockHumidity}%`);
    expect(humidityElement).toBeInTheDocument();
  });
});
