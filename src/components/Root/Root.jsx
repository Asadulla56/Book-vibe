import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
