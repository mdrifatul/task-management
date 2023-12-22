import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className=''>
      <footer className="footer text-neutral-content md:flex justify-around md:px-20 lg:px-36 border-t border-[#8dc2d9]">
        <nav>
          <div className="grid grid-flow-col gap-4 md:mt-10">
            <a href='https://www.facebook.com'><BsFacebook className='w-8 h-8 text-[#0d8ff3]'/></a> 
            <a href='https://www.youtube.com'><BsYoutube className='w-8 h-8  text-[#FF0000]'/></a> 
            <a href='https://twitter.com'><BsTwitter className='w-8 h-8  text-[#18A4FC]'/></a>
          </div>
          <p className=" text-gray-600 md:w-72 lg:w-80">TaskMaster is a streamlined task management app designed for seamless organization and productivity. With intuitive user interfaces, real-time collaboration features.</p>
          
        </nav>
        <nav className='my-8'>
          <p className=" text-3xl text-[#0776a6] ">123-456-78901</p>
          <a className=" text-gray-700 text-base ">challenge@forge.com</a>
          <a className=" text-gray-700 text-base">West 12th Street</a>
          <a className=" text-gray-700 text-base">New York, USA</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;