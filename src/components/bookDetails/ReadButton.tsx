'use client'

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.types";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:IBook}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext)
    const handleReadBook = ()=>{
        const hasIncluded = readBooks.find(b=>b===book)
        if (hasIncluded) {
            toast.error(`'${book.bookName}' has Inluded Already`)
            return
        }
        setReadBooks([...readBooks,book])
        toast.success(`'${book.bookName}' has included`)
    }
    return (
        <button className="btn btn-primary" onClick={handleReadBook}>Read</button>
    );
};

export default ReadButton;