import { renderCartList } from "../components/cart-list";
import { getCartItems } from "../services/cart-service";

export function renderCartPage(): string {
    return `
    <div class="cart-page">
        <h2 class="cart-page-title">Giỏ hàng</h2>
        <div class="cart-items-container" id="cart-items-container">
            ${renderCartList(getCartItems())}
        </div>

    </div>
    `;
}