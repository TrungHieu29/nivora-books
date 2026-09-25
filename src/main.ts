import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "./style.css";
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { renderHomePage } from "./pages/home";
import { addFavoriteBook, isFavoriteBook, removeFavoriteBook } from "./services/storage-service";

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App element not found');
app.innerHTML = `
  ${renderHeader()}
  ${renderHomePage()}
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