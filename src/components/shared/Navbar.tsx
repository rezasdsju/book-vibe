'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/assets/book.ico'
import Image from "next/image";
const Navbar = () => {

    const pathName = usePathname()
    const links = <>
        <li><Link className={pathName==='/' ? 'text-blue-500':''} href='/'>Home</Link></li>
        <li><Link className={pathName==='/books' ? 'text-blue-500':''} href='/books'>Books</Link></li>
        <li><Link className={pathName==='/listed-books' ? 'text-blue-500':''} href='/listed-books'>Listed-Books</Link></li>
        <li><Link className={pathName==='/read-books' ? 'text-blue-500':''} href='/read-books'>Read-Books</Link></li>
    </>
    return (
        <nav className='container sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">
                    <Image src={logo} alt='logo' width={30} height={30}></Image>
                    <span className="hidden sm:block">Book Vibe</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-primary">Sign In</button>
                    <button className="btn btn-success">Sign Up</button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;