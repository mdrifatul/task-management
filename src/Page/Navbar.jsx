import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const activeLink = "text-[#0787be] px-2 font-bold border-b-2 border-[#0787be]";
const normalLink = "text-gray-800";

const navLink = (
  <>
    <span className="flex justify-center items-center p-2 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Home
      </NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Projects
      </NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Contact US
      </NavLink>
    </span>
  </>
);



const Navbar = () => {
  const { user, logOut } = useAuth();
  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div data-aos="fade-down" className="navbar w-11/12 mx-auto justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
            {!user &&<Link
              to="/login"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >                           
            <button
              className="btn btn-sm w-full bg-[#0776a6] text-white"
            >
              login
            </button>
            </Link>}
            </ul>
        </div>
        <Link to='/'>
        <button className="w-60 h-5 ">
          <h1 className="text-2xl text-[#0776a6] font-semibold">Tesk Management</h1>
        </button>
        </Link>
      </div>
      <div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLink}
        {!user &&<Link
            to="/login"
            className="px-4 py-2 hover:bg-base-300 rounded-lg"
          >                           
          <button
            className="btn btn-sm w-full bg-[#0776a6] text-white"
          >
            login
          </button>
          </Link>}
        </ul>
      </div>
      <div className="">
        {user && (
          <>
                <NavLink
                  to="/"
                  className="px-1 py-2 hover:bg-base-300 rounded-lg"
                >
                                        
                <button
                  className="btn btn-sm w-full bg-[#0776a6] text-white hover:"
                  onClick={handlelogOut}
                >
                  logout
                </button>
                </NavLink>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;