
import Readlist from "../ReadList/Readlist";
import WishList from "../WishList/WishList";


const ListedBooks = () => {

  return (
    <div>
      <div className="bg-[#1313130D] rounded-2xl mt-5">
        <h2 className="text-3xl font-bold text-center p-4"> Books</h2>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input 
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl font-semibold"
          aria-label="Read Books"
        />
        <div 
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
         >
          {
            <Readlist></Readlist>
          }
         </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab  text-2xl font-semibold"
          aria-label="Wishlist Books" 
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {
            <WishList></WishList>
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
