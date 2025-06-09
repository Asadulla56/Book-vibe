import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Book = ({ book }) => {
  const { bookId, bookName, image, author, rating, tags, category } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card shadow-xl p-5 bg-[#FFFFFF] ">
        <figure className=" bg-[#13131326]">
          <img className="w-72 p-5 h-64 " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            <button className="btn px-5 py-2 bg-[#23BE0A0D] font-medium border rounded-lg text-[#23BE0A]">
              {tags[0]}
            </button>
            <button className="btn px-5 py-2 bg-[#23BE0A0D] font-medium border rounded-lg text-[#23BE0A]">
              {tags[1]}
            </button>
          </div>
          <h2 className="card-title font-bold">{bookName}</h2>
          <p className="text-[#131313CC] font-medium text-lg">By : {author}</p>
          <hr />
          <div className="flex justify-between">
            <h2 className="font-medium text-sm">{category}</h2>
            <div className="flex gap-2 items-center text-[#131313CC]">
              <h2 className="font-bold">{rating}</h2>
              <h2 className="text-2xl">
                <MdOutlineStarBorderPurple500></MdOutlineStarBorderPurple500>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes={
    book:PropTypes.array
}
export default Book;
