import { books } from "../data/books";
import type { CartItem } from "../models/cart-item";

export function renderCartItem(cartItem: CartItem): string {
    const book = books.find(
        (book) => book.id === cartItem.bookId
    );
    if (!book) {
        return "";
    }
    return `
        <div class="cart-item">
            <img src="${book.image}" alt="${book.title}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${book.title}</h3>
                <p>Số lượng: ${cartItem.quantity}</p>
            </div>
            <button class="cart-item-remove-btn" data-book-id="${book.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
}