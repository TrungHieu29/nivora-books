import type { CartItem } from "../models/cart-item";

export function getCartItems(): CartItem[] {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        return JSON.parse(cartItems);
    }
    return [];
}

export function addCartItem(cartItem: CartItem): void {
    const cartItems = getCartItems();
    const existingCartItem = cartItems.find((item) => item.bookId === cartItem.bookId);
    if (existingCartItem) {
        existingCartItem.quantity += cartItem.quantity;
    } else {
        cartItems.push(cartItem);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function removeCartItem(bookId: number): void {
    const cartItems = getCartItems();
    const updatedCartItems = cartItems.filter((item) => item.bookId !== bookId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
}