import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../../Utility/localstorage";
const BookDitails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  
const handleReadBook =()=>{
    saveReadBooks(bookIdInt);
    toast("Wow so easy !")
}

const handleWishListBook =()=>{
    saveReadBooks(bookIdInt)
    toast("Wow so easy !")
}
  return (
    <div>
      <div className="card lg:card-side p-10 bg-[#FFFFFF] shadow-xl">
        <figure className="bg-[#13131326] w-96">
          <img className="p-5 " src={book.image}alt="Album" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title text-3xl font-bold">{book.bookName}</h2>
          <h2> <span className="font-bold">By</span> : {book.author}</h2>
          <hr />
          <h1>Category : {book.category}</h1>
          <hr />
          <p><span className="font-bold">Review</span> : {book.review}</p>
         <div>
         <h1 >Tag : 
          <span className="text-[#23BE0A] "> {book.tags[0]}</span> 
          <span className="text-[#23BE0A] ml-2"> {book.tags[1]}</span> </h1>
         </div>

          <hr />
          <div className="space-y-2"> 
            <h1> Number of Pages : <span className="font-bold">{book.totalPages}</span></h1>
            <h1> publisher : <span className="font-bold">{book.publisher}</span> </h1>
            <h2>Year Of Publishing <span className="font-bold">{book.yearOfPublishing}</span></h2>
            <h2>Ratting : <span className="font-bold">{book.rating}</span></h2>
          </div>
          <div className="card-actions">
            <button onClick={handleReadBook} className="btn bg-[#1313134D]">Read</button>
            <button onClick={handleWishListBook} className="btn bg-[#50B1C9]">Wishlist</button>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default BookDitails;
