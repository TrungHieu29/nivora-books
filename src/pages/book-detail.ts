import type { Book } from "../models/book";

export function renderBookDetailPage(book: Book): string {
    return `
    <main class="book-detail-page">
      <div class="book-detail-image">
        <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="book-detail-info">
        <p class="book-detail-category">
          ${book.category}
        </p>
        <h1>${book.title}</h1>
        <p class="book-detail-author">
          ${book.author}
        </p>
        <div class="book-detail-rating">
          <i class="fa-solid fa-star"></i>
          <span>${book.rating}</span>
        </div>
        <p class="book-detail-price">
          ${book.price.toLocaleString("vi-VN")} ₫
        </p>
        <p class="book-detail-description">
          ${book.description}
        </p>
        <div class="book-detail-meta">
          <p><strong>Nhà xuất bản:</strong> ${book.publisher}</p>
          <p><strong>Số trang:</strong> ${book.pages}</p>
          <p><strong>Năm xuất bản:</strong> ${book.publishedYear}</p>
          <p><strong>Ngôn ngữ:</strong> ${book.language}</p>
          <p><strong>ISBN:</strong> ${book.isbn}</p>
        </div>
        <div class="book-detail-actions">
          <button class="detail-favorite-btn">
            <i class="fa-regular fa-heart"></i>
            Yêu thích
          </button>
          <button class="detail-cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </main>
  `;
}