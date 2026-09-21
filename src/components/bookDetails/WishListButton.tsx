'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const WishListButton = ({ book }: { book: IBook }) => {
    const {wishList, setWishList} = useContext(BooksContext)
    const handleWishList = ()=>{
        const hasIncluded = wishList.find(b=>b===book)
        if (hasIncluded) {
            toast.error(`'${book.bookName}' Already Exists in the List. `)
            return
        }
        setWishList([...wishList, book])
        toast.success(`'${book.bookName}' is Included`)
    }
    return (
        <button onClick={handleWishList} className="btn btn-info">Wish List</button>
    );
};

export default WishListButton;