import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "./style.css";

import { renderFooter } from "./components/footer";
import { renderHeader } from "./components/header";

import { renderCartPage } from "./pages/cart";
import { removeCartItem } from "./services/cart-service";


const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
    throw new Error("App element not found");
}


app.innerHTML = `
  ${renderHeader()}
  ${renderCartPage()}
  ${renderFooter()}
`;

const removeButtons = document.querySelectorAll<HTMLButtonElement>(".cart-item-remove-btn");

removeButtons.forEach((button) => {
    const bookId = Number(button.dataset.bookId);
    button.addEventListener("click", () => {
        const cartItemElement = button.closest(".cart-item");
        cartItemElement?.remove();
        removeCartItem(bookId);
    });
});