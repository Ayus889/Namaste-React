import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
test("Should load button in contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});
test("Should load inputBoxes in  contact component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");

  //Assertion
  expect(input).toBeInTheDocument();
});

/* test("Should load 2 input boxes on the Contact Component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes.length);
  // Assertion
  expect(inputBoxes).toBe(2);
}); */
