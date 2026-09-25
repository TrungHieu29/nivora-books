import type { CartItem } from "../models/cart-item";
import { renderCartItem } from "./cart-item";

export function renderCartList(cartItems: CartItem[]): string {
    if (cartItems.length === 0) {
        return `
            <p>Giỏ hàng đang trống.</p>
        `;
    }
    return `
        <div class="cart-list">
            ${cartItems
            .map((cartItem) => renderCartItem(cartItem))
            .join("")}
        </div>
    `;
}