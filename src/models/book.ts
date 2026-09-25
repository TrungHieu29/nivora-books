export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    category: BookCategory;
    rating: number;
    image: string;
    description: string;
    publisher: string;
    pages: number;
    publishedYear: number;
    language: string;
    isbn: string;
    isHot: boolean;
    isNew: boolean;
    soldCount: number;
}

export type BookCategory = "Văn học" | "Công nghệ" | "Kinh doanh" | "Tâm lý học" | "Phát triển bản thân" | "Kỹ năng";