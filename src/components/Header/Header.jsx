import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>

        <li><NavLink
            to="/"
            className="text-xl font-bold text-blue-400"
        >Home</NavLink></li>

        <li><NavLink
            to="/login"
            className="text-xl font-bold text-blue-400"
        >Login</NavLink></li>

        <li><NavLink
            to="/signup"
            className="text-xl font-bold text-blue-400"
        >SignUp</NavLink></li>

    </>

    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">

                    <div className="navbar-start">
                        <div className="dropdown">

                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    links
                                }
                            </ul>

                        </div>

                        <a className="btn btn-ghost text-xl font-bold text-blue-400">React Firebase</a>
                    </div>

                    {/* ****************** */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>

                </div>
            </nav>




        </div>
    );
};

export default Header;