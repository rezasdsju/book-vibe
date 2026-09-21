import Image from "next/image";
import HeroImage from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="relative overflow-hidden my-5">
            {/* Decorative background blobs */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8 py-10 sm:py-16 px-6 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="space-y-6 mx-auto text-center sm:text-left">
                    {/* <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                        📚 Discover Your Next Read
                    </span> */}

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        Books to freshen up{" "}
                        <span className="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                            your bookshelf
                        </span>
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto sm:mx-0">
                        Explore a hand-picked collection of stories, ideas, and adventures waiting to be discovered.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                        <button className="btn btn-success rounded-full px-6 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300">
                            View the List
                        </button>
                        <button className="btn btn-outline btn-success rounded-full px-6 hover:-translate-y-0.5 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="mx-auto relative group">
                    <div className="absolute inset-0 bg-linear-to-tr from-emerald-400 to-teal-500 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20" />
                    <Image
                        src={HeroImage}
                        alt="Hero Image"
                        width={400}
                        height={400}
                        className="relative rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;