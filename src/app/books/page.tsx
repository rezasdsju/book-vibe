import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.types";

const getBooks = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booksData.json`)
    if (!res.ok){
        throw new Error('Failed to fetch books data')
    }
    return await res.json()
}

const BookPage = async() => {
    const booksData = await getBooks()
    return (
        <div className="container mx-auto my-10">
            <h2 className="font-bold text-4xl text-center py-5">All Books</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    booksData.map((book:IBook)=> <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookPage;