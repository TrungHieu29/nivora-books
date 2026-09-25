import { renderBookList } from "../components/book-list";
import { books } from "../data/books";

export function renderBooksPage(): string {
    return `
    <main class="books-page">
        <div class="books-page-header">
        <h2>Danh sách sách</h2>
        <div class="books-tools">
        <div class="search-box">
          <input type="text" id="search-input" placeholder="Tìm kiếm sách...">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <select id="category-filter" class="category-filter">
        <option value="all">Tất cả thể loại</option>
        <option value="Văn học">Văn học</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Kinh doanh">Kinh doanh</option>
        <option value="Tâm lý học">Tâm lý học</option>
        <option value="Phát triển bản thân">Phát triển bản thân</option>
        <option value="Kỹ năng">Kỹ năng</option>
        </select>
        <select id="sort-filter" class="sort-filter">
        <option value="default">Sắp xếp mặc định</option>
        <option value="price-asc">Giá: Thấp đến cao</option>
        <option value="price-desc">Giá: Cao đến thấp</option>
         <option value="rating-desc">Đánh giá cao nhất</option>
        </select>
        </div>
        </div>
        <div id="books-results">
        ${renderBookList(books)}
        </div>   
    </main>
    `;
}