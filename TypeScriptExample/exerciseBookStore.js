var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var books = [
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
function FilterAndDiscount(_books) {
    var Filtgenre = "fiction";
    var Filtprice = 300;
    var bookFilter = _books.filter(function (_books) { return _books.genre === Filtgenre && _books.price > Filtprice; });
    return bookFilter.map(function (book) { return (__assign(__assign({}, book), { price: book.price * 0.9 })); });
}
console.log(FilterAndDiscount(books));
