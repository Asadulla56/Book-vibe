import { CiLocationOn } from "react-icons/ci";
import { MdContactPage,MdManageAccounts  } from "react-icons/md";
import PropTypes from 'prop-types'

const ReadCard = ({card}) => {
    const {image, publisher, bookName,author, rating, tags,yearOfPublishing,totalPages, category}=card;
  return (
    <div className="card card-side grid grid-cols-1 md:grid-cols-2 p-5 shadow-xl">
      <figure className="bg-[#13131326]">
        <img className="w-72 p-5 h-64"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{bookName}</h2>
        <p className="font-semibold">By : {author}</p>
        <div className="flex justify-between">
            <h1><span className="font-bold">Tag :</span> {tags}</h1>
            <div className="flex items-center gap-1">
                <h2 className="text-xl"><CiLocationOn></CiLocationOn></h2>
                <h1>Year Of Publishing : {yearOfPublishing}</h1>
            </div>
        </div>
        <div className="flex justify-between">
           <div className="flex items-center gap-1">
            <h2 className="text-xl"><MdManageAccounts></MdManageAccounts></h2>
           <h1>publisher: {publisher}</h1>
           </div>
            <div className="flex items-center gap-1">
                <h2 className="text-xl"><MdContactPage></MdContactPage></h2>
            <h2> Page {totalPages}</h2>
            </div>
        </div>
        <hr />
        <div className="card-actions text-white ">
          <button className="btn rounded-3xl  bg-[#328EFF26]">Category : {category}</button>
          <button className="btn rounded-3xl bg-[#FFAC33]">Ratting : {rating}</button>
          <button className="btn rounded-3xl text-white bg-[#23BE0A]">View Details </button>
        </div>
      </div>
    </div>
  );
};

ReadCard.propTypes={
    card:PropTypes.array
}
export default ReadCard;
