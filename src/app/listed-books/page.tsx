'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
    const {readBooks} = useContext(BooksContext)
    return (
        <div>
            listed Books: {readBooks.length}
        </div>
    );
};

export default ListedBooks;