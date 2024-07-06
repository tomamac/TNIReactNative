interface Book {
  title: string;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const books: Book[] = [
  {
    title: "The Great Gatsby",
    genre: "fiction",
    price: 320,
  },
  {
    title: "War and Peace",
    genre: "fiction",
    price: 250,
  },
  {
    title: "Economics 101",
    genre: "educational",
    price: 480,
  },
  {
    title: "In Cold Blood",
    genre: "non-fiction",
    price: 300,
  },
  {
    title: "The Catcher in the Rye",
    genre: "fiction",
    price: 400,
  },
];

function FilterAndDiscount(_books: Book[]): Book[]{
    let Filtgenre: string = "fiction";
    let Filtprice: number = 300;
    let bookFilter = _books.filter((_books) => _books.genre === Filtgenre && _books.price > Filtprice);

    return bookFilter.map((book) => ({
        ...book,
        price: book.price * 0.9,
      }));
}

console.log(FilterAndDiscount(books));