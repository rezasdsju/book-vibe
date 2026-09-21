'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
    const {readBooks, wishList} = useContext(BooksContext)
    return (
        <div className="container mx-auto py-5">
            <h2 className="my-7 bg-amber-100 rounded-3xl text-3xl text-center py-7 font-semibold">Listed Books</h2>

<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Read Books</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Wish List</div>


</div>
        </div>
    );
};

export default ListedBooks;