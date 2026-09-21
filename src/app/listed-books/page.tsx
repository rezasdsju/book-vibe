'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import ListedBookCard from "@/components/shared/ListedBookCard";
const ListedBooks = () => {
    const {readBooks, wishList} = useContext(BooksContext)
    return (
        <div className="container mx-auto py-5">
            <h2 className="my-7 bg-amber-100 rounded-3xl text-3xl text-center py-7 font-semibold">Listed Books</h2>

<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
        readBooks.length>0? readBooks.map(book=> <ListedBookCard key={book.bookId} book={book}></ListedBookCard>): <p>No Read Books Found</p>
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wish List (${wishList.length})`} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
       wishList.length>0? wishList.map(book=> <ListedBookCard key={book.bookId} book={book}></ListedBookCard>): <p>No wish list book found</p>
    }
  </div>


</div>
        </div>
    );
};

export default ListedBooks;