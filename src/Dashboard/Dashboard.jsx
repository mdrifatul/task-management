import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
      <div className="col-span-3 min-h-screen bg-[#0776a6] p-5 flex flex-col">
          <ul className="menu">
          <li>
          <NavLink to="/dashboard/task" className="text-lg text-white">
            Create Task</NavLink>
          </li>
          </ul>                     
        <div >      
          <ul className="menu">
            <li>
              <NavLink to="/" className="text-lg text-white">
              <IoArrowBackOutline />Back Home
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