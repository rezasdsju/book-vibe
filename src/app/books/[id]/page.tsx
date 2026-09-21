import { IBook } from "@/types/books.types";
import ReadButton from "@/components/bookDetails/ReadButton";
import Image from "next/image";
const BookDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booksData.json`)
    const booksData = await res.json()
    const book: IBook = booksData.find((b: IBook) => b.bookId === parseInt(id))

    return (
        <div>
            <h2 className="font-semibold text-3xl text-center pt-5 sm:pt-10">Details on <span className="text-blue-500">{`'${book.bookName}'`}</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-12 my-5 py-5">
                <div className="col-span-4 mx-auto">
                    <Image src={book.image} alt={book.bookName} width={300} height={300}></Image>
                </div>
                <div className="col-span-8 flex flex-col justify-between space-y-6">
                    <div>
                        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                            {book.category}
                        </span>

                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {book.bookName}
                        </h1>
                        <p className="mt-1 text-lg font-medium text-gray-600">
                            By <span className="text-gray-800">{book.author}</span>
                        </p>

                        {book.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {Array.isArray(book.tags) ? (
                                    book.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                                        >
                                            #{tag}
                                        </span>
                                    ))
                                ) : (
                                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                        #{book.tags}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Review</h2>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            {book.review}
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-4">
                        <div>
                            <p className="text-xs font-medium text-gray-500">Rating</p>
                            <p className="mt-1 text-sm font-semibold text-yellow-600">
                                ⭐ {book.rating} / 5
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Total Pages</p>
                            <p className="mt-1 text-sm font-semibold text-gray-900">
                                {book.totalPages} Pages
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Publisher</p>
                            <p className="mt-1 text-sm font-semibold text-gray-900">
                                {book.publisher}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Publish Year</p>
                            <p className="mt-1 text-sm font-semibold text-gray-900">
                                {book.yearOfPublishing}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <ReadButton book={book}></ReadButton>
                        <button className="btn btn-info">Wish List</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;

