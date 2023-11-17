import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col text-red-600 mt-5 md:mt-20 justify-center items-center">
            <h1 className="text-7xl font-bold">404</h1>
            <p>Page Not Found</p>
            <Link className="btn mt-5">Go Home</Link>            
        </div>
    );
};

export default ErrorPage;