import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer";
import Navbar from "../Page/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;