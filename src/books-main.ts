import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "./style.css";

import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { renderBooksPage } from "./pages/books";
import { books } from "./data/books";
import { renderBookList } from "./components/book-list";
import { addFavoriteBook, isFavoriteBook, removeFavoriteBook } from "./services/storage-service";
import { addCartItem } from "./services/cart-service";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
    throw new Error("App element not found");
}
app.innerHTML = `
  ${renderHeader()}
  ${renderBooksPage()}
  ${renderFooter()}
`;

const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const bookResults = document.querySelector<HTMLDivElement>("#books-results");
const categoryFilter = document.querySelector<HTMLSelectElement>("#category-filter");
const sortFilter = document.querySelector<HTMLSelectElement>("#sort-filter");

function filterBooks() {
    const keyword = searchInput?.value.toLowerCase() || "";
    const selectedCategory = categoryFilter?.value || "all";
    const selectedSort = sortFilter?.value || "default";

    let filteredBooks = books.filter((book) => {
        const matchesKeyword = book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword);
        const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
        return matchesKeyword && matchesCategory;
    });

    if (selectedSort === "price-asc") {
        filteredBooks.sort((a, b) => a.price - b.price);
    }
    else if (selectedSort === "price-desc") {
        filteredBooks.sort((a, b) => b.price - a.price);
    }
    else if (selectedSort === "rating-desc") {
        filteredBooks.sort((a, b) => b.rating - a.rating);
    }

    if (bookResults) {
        bookResults.innerHTML = renderBookList(filteredBooks);
    }
}

searchInput?.addEventListener("input", filterBooks);
categoryFilter?.addEventListener("change", filterBooks);
sortFilter?.addEventListener("change", filterBooks);

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
        if (isFavoriteBook(bookId)) {
            removeFavoriteBook(bookId);
            icon?.classList.remove("fa-solid");
            icon?.classList.add("fa-regular");
            button.classList.remove("active");
        } else {
            addFavoriteBook(bookId);
            icon?.classList.remove("fa-regular");
            icon?.classList.add("fa-solid");
            button.classList.add("active");
        }
    });
});

const cartButtons = document.querySelectorAll<HTMLButtonElement>(".cart-btn");

cartButtons.forEach((button) => {
    const bookId = Number(button.dataset.bookId);
    button.addEventListener("click", () => {
        addCartItem({ bookId: bookId, quantity: 1 });
        alert("Đã thêm sách vào giỏ hàng!");
    });
});