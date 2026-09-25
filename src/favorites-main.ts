import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "./style.css";
import { renderBookList } from "./components/book-list";
import { renderFooter } from "./components/footer";
import { renderHeader } from "./components/header";
import { books } from "./data/books";
import { getFavoriteBooks, isFavoriteBook, removeFavoriteBook } from "./services/storage-service";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
    throw new Error("App element not found");
}

const favoriteBooks = getFavoriteBooks();

const favoriteBooksList = books.filter((book) => favoriteBooks.includes(book.id));
let favoritesContent = "";

if (favoriteBooksList.length > 0) {
    favoritesContent = renderBookList(favoriteBooksList);
} else {
    favoritesContent = "<p>Bạn chưa có sách yêu thích.</p>";
}
app.innerHTML = `
  ${renderHeader()}
  <main class="favorites-page">
    <h2>Sách yêu thích</h2>
    ${favoritesContent}
  </main>
  ${renderFooter()}
`;

const favoriteButtons = document.querySelectorAll<HTMLButtonElement>(".favorite-btn");

favoriteButtons.forEach((button) => {
    const bookId = Number(button.dataset.bookId);
    const icon = button.querySelector("i");
    if (isFavoriteBook(bookId)) {
        icon?.classList.remove("fa-regular");
        icon?.classList.add("fa-solid");
        button.classList.add("active");
    }
    button.addEventListener("click", () => {
        removeFavoriteBook(bookId);
        const bookCard = button.closest(".book-card");
        bookCard?.remove();
    });
});