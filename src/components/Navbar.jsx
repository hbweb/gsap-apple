import { appleImg, searchImg, bagImg } from "../utils";
import { navLists }  from '../constants';


const Navbar = () => {
  return (
    <header className="w-full py-4 sm:px-10 px-5 flex-center">
      <nav className="flex w-full">
        <img src={appleImg} width={14} height={18} alt="iPhone Home"/>

        <div className="flex flex-1 justify-center max-sm:hidden">
          { navLists.map((item) => (
            <a href='#' key={item} className="px-5 text-sm cursor-pointer hover:text-gray-400 transition-all">{item}</a>
          ))
          }
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} width={18} height={18} alt="search" className="cursor-pointer" />
          <img src={bagImg} width={18} height={18} alt="bag" className="cursor-pointer"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
