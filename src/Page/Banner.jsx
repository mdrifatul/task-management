import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div  className="bg-cover w-full bg-bottom md:bg-center bg-[url('https://i.ibb.co/5TSF9Yz/banner.jpg')]">
      <div className="h-80 md:h-[410px] flex flex-col justify-center  bg-black bg-opacity-50">
        <div className="w-10/12 mx-auto flex justify-center">
        <h2 className="text-4xl text-white md:text-4xl font-semibold mb-5 w-auto text-center">Analyze performance metrics to identify areas for improvement and optimize workflows</h2>
        </div>
        <Link to='/dashboard'>
        <div className="text-center">
          <button className="btn mt-10  w-44 text-white bg-[#0776a6] ">Let's Explore</button>
        </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Banner;