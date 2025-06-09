import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadBooks } from "../../Utility/localstorage";
import ReadCard from "../ReadCard/ReadCard";

const WishList = () => {
    const books = useLoaderData();

    const [booksread, setbooksread] = useState([]);
    const [dispalbooks, setDisplaybooks] = useState([]);
    const handleBookSort = (sort) => {
      if (sort === "all") {
        setDisplaybooks(booksread);
      } else if (sort === "rating") {
        const ratingBooks = booksread.filter((book) => book.rating === 4.5);
        setDisplaybooks(ratingBooks);
      } else if (sort === "number of pages") {
        const pages = booksread.filter((book) => book.totalPages === 281);
        setDisplaybooks(pages);
      } else if (sort === "publisher year") {
        const publisher = booksread.filter(
          books.publisher === "J. B. Lippincott & Co."
        );
        setDisplaybooks(publisher);
      }
    };
  
    useEffect(() => {
      const storedBooks = getStoreReadBooks();
      if (books.length > 0) {
        const readBooks = [];
        for (const bookId of storedBooks) {
          const book = books.find((book) => book.bookId === bookId);
          if (book) {
            readBooks.push(book);
          }
        }
        setbooksread(readBooks);
        setDisplaybooks(readBooks);
      }
    }, [books]);
    return (
        <div>
      <div className="text-center mt-10">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A]">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleBookSort("all")}>
              <a>ALL</a>
            </li>
            <li onClick={() => handleBookSort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBookSort("number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleBookSort("publisher year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {
            dispalbooks.map(card=> <ReadCard key={card.bookId} card={card}></ReadCard>)
        }
        
        </div>
    </div>
    );
};

export default WishList;