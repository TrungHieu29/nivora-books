import type { Book } from "../models/book";

export function renderHeroBanner(book: Book): string {
  return `
    <div class="hero-banner">
    <div class="hero-content">
      <h1>Khám phá thế giới<br> qua từng trang sách</h1>
      <p class="hero-description">
      <em>Chúng tôi mang đến cho bạn những cuốn sách hay nhất giúp bạn mở rộng kiến thức và trải nghiệm thế giới qua từng trang sách.</em>
      </p>
      <a href="book.html" class="hero-button-link">
      <button class="hero-button">Khám phá ngay</button>
      </a>
    </div>
    <div class="hero-image">
      <img src="${book.image}" alt="${book.title}">
    </div>
  </div>
  `;
}