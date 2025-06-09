import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] mt-10 rounded-3xl">
      <div className=" hero-content gap-10 flex-col lg:flex-row-reverse p-10">
        <div>
          <img
            src="/book.jpg"
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-10">
          <h1 className="text-5xl font-bold ">Books to freshen </h1>
          <h1 className="text-5xl text-[#131313] font-bold">up your bookshelf</h1>
          <Link to='/listed'><button className="btn bg-[#23BE0A] text-white mt-10">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
