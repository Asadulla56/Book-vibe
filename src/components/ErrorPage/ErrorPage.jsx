import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center items-center space-y-5 mt-28 " >
            <h2 className="font-bold text-3xl"> 404 page </h2>
            <p className="font-bold text-3xl">Page Not found</p>
            <Link to='/' className="btn rounded-xl bg-[#23BE0A]">Go Back</Link>
        </div>
    );
};

export default ErrorPage;