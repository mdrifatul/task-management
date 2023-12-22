import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Main from '../Layout/Main';
import Contact from '../Page/Contact';
import CreateTask from '../Page/CreateTask';
import Home from '../Page/Home';
import Login from '../Page/Login';
import Project from '../Page/Project';
import Signup from '../Page/Signup';
import PrivateRoute from './PrivateRoute';



export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/project',
        element: <Project></Project>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
    ]
  },
  {
    path:"/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'task',
        element: <CreateTask></CreateTask>
      },
    ]
  }
]);
