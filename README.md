# Book Vibe

**Book Vibe** is a responsive book management web application built with **Next.js, React, and TypeScript**. It allows users to explore books, view detailed information, manage their Read List and Wish List, sort saved books, and visualize their reading progress.

## Live Demo

[**https://book-vibe-b1db.vercel.app/**](https://book-vibe-b1db.vercel.app/)

## Features

* Browse popular books
* View detailed information about individual books
* Add books to the **Read List**
* Add books to the **Wish List**
* Manage Read List and Wish List using tabs
* Sort saved books by:

  * Rating
  * Publication Year
  * Number of Pages
* Visualize the total pages of read books using a chart
* Responsive Navbar, Banner, and Book Cards
* Reusable components for book-related functionality
* Global book state management using React Context API

## Technologies

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **React Toastify**
* **Recharts**

## Key Implementations

### Context API

Used **React Context API** to manage book-related state across the application, including Read List and Wish List data.

### Dynamic Routing

Used Next.js dynamic routing to display individual book details:

```text
/books/[id]
```

### Sorting

Implemented sorting functionality for saved books based on:

* Rating
* Publication Year
* Number of Pages

### Data Visualization

Used **Recharts** to visualize the total number of pages of books in the Read List.

### Reusable Components

The application is organized into reusable components such as:

* Navbar
* Banner
* Book Card
* Listed Book Card
* Read Button
* Wish List Button

## Project Structure

```text
book-vibe/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── public/
│   └── booksData.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── loading.tsx
    │   ├── page.tsx
    │   ├── books/
    │   │   ├── page.tsx
    │   │   └── [id]/
    │   │       └── page.tsx
    │   ├── listed-books/
    │   │   └── page.tsx
    │   └── read-books/
    │       └── page.tsx
    ├── assets/
    │   └── components/
    │       ├── bookDetails/
    │       │   ├── ReadButton.tsx
    │       │   └── WishListButton.tsx
    │       ├── homepage/
    │       │   ├── Banner.tsx
    │       │   └── Books.tsx
    │       └── shared/
    │           ├── BookCard.tsx
    │           ├── ListedBookCard.tsx
    │           └── Navbar.tsx
    ├── context/
    │   └── BooksContext.tsx
    └── types/
        └── books.types.ts
```

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd book-vibe
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Author

**Rezaul Karim Rifat**

GitHub: [**rezasdsju**](https://github.com/rezasdsju)
