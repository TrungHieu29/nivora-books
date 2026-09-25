import type { Book } from "../models/book";

export function renderBookCard(book: Book): string {
  return `
    <div class="book-card">
    <a href="/book-detail.html?id=${book.id}" class="book-image">
    <img src="${book.image}" alt="${book.title}">
    </a>
      <div class="book-info">
      <p class="book-category">${book.category}</p>
      <a href="/book-detail.html?id=${book.id}" class="book-title-link">
        <h3 class="book-title">${book.title}</h3>
      </a>
     <p class="book-author">${book.author}</p>
        <div class="book-rating">
          <i class="fa-solid fa-star"></i>
          <span>${book.rating}</span>
        </div>
        <div class="book-bottom">
          <p class="book-price">
            ${book.price.toLocaleString("vi-VN")} ₫
          </p>
          <div class="book-actions">
            <button class="favorite-btn" data-book-id="${book.id}">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}