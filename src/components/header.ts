export function renderHeader(): string {
  return `
    <header class="header">
      <div class="header-container">
      <h1 class="header-logo"> Nivora <span>Books</span> </h1> 
      <nav class="header-nav">
        <a href="index.html">Trang chủ</a>
        <a href="book.html">Sách</a>
      </nav>
        <div class="header-icons">
        <a href="favorites.html">
        <i class="fa-regular fa-heart"></i>
        </a>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
        </div>
    </header>
  `;
}