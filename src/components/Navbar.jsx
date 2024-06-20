import { navLinks, links } from '../constants';
import { Link } from 'react-router-dom';
import { logo, close, open, logo2, menu, socials } from '../img';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
      <nav className="bg-white w-full flex py-6 justify-between items-center navbar mt-6 rounded-[20px]">
        <img src={logo} className="w-[124px] h-[32-px] ml-10" />

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
                <li 
                    key={nav.id} 
                    className={`font-poppins ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} font-normal cursor-pointer text-[#FF907A]`}
                >
                    <Link 
                        to={`/${nav.id}`} 
                        className="mr-10"
                        activeClassName="active"
                    >
                        {nav.title}
                    </Link>
                </li>
            ))}
        </ul>

        <ul className="list-none sm:flex hidden justify-between items-center">
            {links.map((link, index) => (
                <li key={link.id} className={`font-poppins ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-[12px] font-normal cursor-pointer text-[#FF907A] mr-10`}>
                    <a href={`#${link.id}`}>
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? open : close} className="w-[28px] h-[28px] object-contain mr-10"
             onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#5FD0DF] absolute
            top-0 right-0 w-full h-full sidebar z-[10]`}>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mt-6">
                        <img src={logo2} className="w-[32px] h-[32-px] ml-10" />

                        <img src={toggle ? menu : close} className="w-[28px] h-[28px] object-contain mr-10"
                        onClick={() => setToggle((prev) => !prev)}
                        />
                    </div>

                    <ul className="list-none flex flex-col justify-center items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li 
                                key={nav.id} 
                                className={`font-poppins ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'} text-[40px] font-normal cursor-pointer text-white mr-10`}
                            >
                                <Link 
                                    to={`/${nav.id}`} 
                                    className="mb-10"
                                    activeClassName="active"
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center items-center py-20">
                        <img src={socials} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}
  
export default Navbar