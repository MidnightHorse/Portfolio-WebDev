import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from '../extras';
import resume from "../Assets/placeholder.pdf"

const NavBar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
            scrolled ? "bg-primary" : "bg-transparent"
        }`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link to="/" className='text-white text-[18px] font-bold cursor-pointer flex'>
            Aspiring &nbsp;|
            <span className='text-[#7d97b0]'>&nbsp; Austin </span>
          </Link>
                <ul className='list-none hidden md:flex flex-row gap-8'>
                {navLinks.map((nav) => (
                <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"}                
                hover:text-white py-1 text-[18px] font-medium cursor-pointer`}
                >
                  <Link to={nav.title === 'Resume' ? resume : `/${nav.id}`}>
                {nav.title}
              </Link>
                </li>
                ))}
            </ul>
        </div>
    </nav>
    );
};

export default NavBar;