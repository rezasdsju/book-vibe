'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
    const {readBooks, wishList} = useContext(BooksContext)
    return (
        <div>
            listed Books: {readBooks.length} <br />
            wishList: {wishList.length}
        </div>
    );
};

export default ListedBooks;