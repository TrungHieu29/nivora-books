import { renderBookList } from "../components/book-list";
import { renderHeroBanner } from "../components/hero-baner";
import { books } from "../data/books";

export function renderHomePage(): string {
    const hotBooks = books.filter((book) => book.isHot === true && book.rating >= 4.8);
    const newBooks = books.filter((book) => book.isNew === true);
    return `
    <main>
        ${renderHeroBanner(books[9])}
        <section class="book-section">
          <div class="section-header">
            <h2>Sách nổi bật</h2>
            <p>Những cuốn sách được yêu thích tại Nivora Books</p>
          </div>
          ${renderBookList(hotBooks)}
        </section>
        <section class="book-section">
          <div class="section-header">
            <h2>Sách mới</h2>
            <p>Khám phá những cuốn sách mới tại Nivora Books</p>
          </div>
          ${renderBookList(newBooks)}
        </section>
      </main>
      `;
}