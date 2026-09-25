import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                book: resolve(__dirname, 'book.html'),
                bookDetail: resolve(__dirname, 'book-detail.html'),
                cart: resolve(__dirname, 'cart.html'),
                favorites: resolve(__dirname, 'favorites.html'),
            },
        },
    },
});