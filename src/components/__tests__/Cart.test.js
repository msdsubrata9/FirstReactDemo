import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestauranatMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should load restaurent Menu component", async () => {
    await act(async () => (
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestauranatMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    ))

    const accordionHeader = screen.getByText("Chicken Wings. (6)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    expect(screen.getByText("Cart is empty. Add Items to the cart.")).toBeInTheDocument();
})