import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Bikaner Elite ( Saguna More )");

  expect(name).toBeInTheDocument();
});
/* it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
  render(<WithPromotedLabel />);

  const labelName = screen.getByLabelText("Promoted");

  //Assertion
  expect(labelName).toBeInTheDocument();
}); */
