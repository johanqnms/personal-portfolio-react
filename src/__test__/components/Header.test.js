import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Hero } from "../../components/Hero";
//import { Header } from "../../components/Header";

describe("React JS 17 Testing...", () => {
  it("renders without crashing", () => {
    const view = render(<Hero />);
    expect(screen.getByText(/FullStack/i)).toBeDefined();
    console.log(view);
  });
});
