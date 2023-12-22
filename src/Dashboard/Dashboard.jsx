import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Dashboard = () => {
  const { logOut } = useAuth();
  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      <div className="grid grid-cols-12">
      <div className="col-span-3 min-h-screen bg-[#0776a6] p-5 flex flex-col ">
          <ul className="menu">
          <li>
          <NavLink to="/dashboard/task" className="text-lg text-white">
            Create Task</NavLink>
          </li>
          <li>
          <NavLink to="/dashboard/alltash" className="text-lg text-white">
            All Task</NavLink>
          </li>
          </ul>                     
        <div >      
          <ul className="menu">
            <li>
              <NavLink to="/" className="text-lg text-white">
              <IoArrowBackOutline />Back Home
              </NavLink>
            </li>
            <li>
            <NavLink
                  to="/"
                  className="text-lg text-white"
                >
                                        
                <button
                  className="w-full border-none text-lg text-white"
                  onClick={handlelogOut}
                >
                  logout
                </button>
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-9 px-5  ">        
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;