import type { Book } from "../models/book";
import { renderBookCard } from "./book-card";


export function renderBookList(books: Book[]): string {
    return `
    <div class="book-list">
        ${books.map((book) => renderBookCard(book)).join("")}
    </div>
    `;
}