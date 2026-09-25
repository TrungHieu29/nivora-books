import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "./style.css";
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { books } from "./data/books";
import { renderBookDetailPage } from "./pages/book-detail";
import { addFavoriteBook, isFavoriteBook, removeFavoriteBook } from "./services/storage-service";
import { addCartItem } from "./services/cart-service";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
    throw new Error("App element not found");
}
const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get("id"));
if (!bookId) {
    throw new Error("Book ID not found in URL");
}

const foundBook = books.find((a) => a.id === bookId);

if (!foundBook) {
    throw new Error("Book not found");
}

const book = foundBook;
app.innerHTML = `
  ${renderHeader()}
  ${renderBookDetailPage(book)}
  ${renderFooter()}
`;

const favoriteButton = document.querySelector<HTMLButtonElement>(".detail-favorite-btn");
function updateFavoriteButton() {
    if (!favoriteButton) {
        return;
    }

    if (isFavoriteBook(book.id)) {
        favoriteButton.innerHTML = `
      <i class="fa-solid fa-heart"></i>
      Đã yêu thích
    `;
    } else {
        favoriteButton.innerHTML = `
      <i class="fa-regular fa-heart"></i>
      Yêu thích
    `;
    }
}

updateFavoriteButton();

favoriteButton?.addEventListener("click", () => {
    if (isFavoriteBook(book.id)) {
        removeFavoriteBook(book.id);
    } else {
        addFavoriteBook(book.id);
    }

    updateFavoriteButton();
});

const cartButton = document.querySelector<HTMLButtonElement>(".detail-cart-btn");
cartButton?.addEventListener("click", () => {
    addCartItem({ bookId: book.id, quantity: 1 });
    alert("Đã thêm sách vào giỏ hàng!");
});