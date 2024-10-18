import { render, screen } from "@testing-library/react";
import RestaurentCard, { withPromotedLabel } from "../RestaurentCard";
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";


it("Should Render Restaurent card Component with props data", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
});

it("Should Render Restaurent card Component with Promoted Label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);

    const promotedLabel = screen.getByText("PROMOTED");

    expect(promotedLabel).toBeInTheDocument();
});
