import Link from "next/link";
import Image from "next/image";
const BookCard = ({book}) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Book Image */}
            <figure className="relative h-64 overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={100}
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content shadow-md">
                    {book.category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-base-100/90 px-3 py-1 text-sm font-semibold shadow-md backdrop-blur-sm">
                    ⭐ {book.rating}
                </span>
            </figure>

            {/* Card Content */}
            <div className="card-body p-5">

                {/* Title */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold tracking-tight">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        by{" "}
                        <span className="font-medium text-base-content/80">
                            {book.author}
                        </span>
                    </p>
                </div>

                {/* Review */}
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-base-content/70">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="my-2 h-px bg-base-200" />

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-3 text-sm">

                    <div>
                        <p className="text-xs text-base-content/50">
                            Pages
                        </p>
                        <p className="font-semibold">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Published
                        </p>
                        <p className="font-semibold">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Publisher
                        </p>
                        <p className="line-clamp-1 font-semibold">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Book ID
                        </p>
                        <p className="font-semibold">
                            #{book.bookId}
                        </p>
                    </div>

                </div>

                {/* Action */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-primary mt-3 w-full rounded-xl transition-all duration-300 group-hover:shadow-md">
                        View Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </Link>


            </div>
        </div>
    );
};

export default BookCard;