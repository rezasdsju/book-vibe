'use client'
import { BooksContext } from "@/context/BooksContext";
import { useContext, useState } from "react";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { IBook } from "@/types/books.types";
const ListedBooks = () => {
    const [sortBy, setSortBy] = useState<'rating'|'pages'|'year'>('rating')
    const {readBooks, wishList} = useContext(BooksContext)
    const sortBooks = (books:IBook[])=>{
        const sortedBooks = [...books]
        if (sortBy==='rating'){
            sortedBooks.sort((a,b)=>b.rating-a.rating)
        } else if(sortBy==='pages'){
            sortedBooks.sort((a,b)=>b.totalPages-a.totalPages)
        } else {
            sortedBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
        }
        return sortedBooks
    }
    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishList = sortBooks(wishList)
    return (
        <div className="container mx-auto py-5">
            <h2 className="my-7 bg-amber-100 rounded-3xl text-3xl text-center py-7 font-semibold">Listed Books</h2>
<div className="flex items-center justify-center">
<select onChange={(e)=>setSortBy(e.target.value as 'rating'|'pages'|'year')}  defaultValue="Sort By" className="select select-success">
  <option disabled={true}>Sort By</option>
  <option value={'rating'}>Rating</option>
  <option value={'pages'}>Number of Pages</option>
  <option value={'year'}>Publish Year</option>
</select>

</div>
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${sortedReadBooks.length})`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
        sortedReadBooks.length>0? sortedReadBooks.map(book=> <ListedBookCard key={book.bookId} book={book}></ListedBookCard>): <p>No Read Books Found</p>
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wish List (${sortedWishList.length})`} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
       sortedWishList.length>0? sortedWishList.map(book=> <ListedBookCard key={book.bookId} book={book}></ListedBookCard>): <p>No wish list book found</p>
    }
  </div>


</div>
        </div>
    );
};

export default ListedBooks;