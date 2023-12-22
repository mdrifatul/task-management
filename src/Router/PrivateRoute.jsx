import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  const location = useLocation();

  if(loading){
    return <div className='flex justify-center items-center h-96'>
    <span className="loading loading-bars loading-lg text-[#0776a6]"></span>
  </div>
  }

  if(user) {
    return children;
  }

    return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;