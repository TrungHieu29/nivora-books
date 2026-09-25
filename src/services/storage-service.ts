export function getFavoriteBooks(): Number[] {
    const favoriteBooks = localStorage.getItem("favoriteBooks");
    if (favoriteBooks) {
        return JSON.parse(favoriteBooks);
    }
    return [];
}

export function addFavoriteBook(bookId: number): void {
    const favoriteBooks = getFavoriteBooks();
    if (!favoriteBooks.includes(bookId)) {
        favoriteBooks.push(bookId);
    }
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
}

export function removeFavoriteBook(bookId: number): void {
    const favoriteBooks = getFavoriteBooks();
    const updatedFavoriteBooks = favoriteBooks.filter((id) => id !== bookId);
    localStorage.setItem("favoriteBooks", JSON.stringify(updatedFavoriteBooks));
}

export function isFavoriteBook(bookId: number): boolean {
    const favoriteBooks = getFavoriteBooks();
    return favoriteBooks.includes(bookId);
}