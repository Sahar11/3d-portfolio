import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {


  return (
    <header className="header">
    <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
     <p className="blue-gradient_text">SH</p>
    </NavLink>
    <nav className="flex text-lg gap-7 font-medium">
      <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500': 'text-black'}>
        About
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500': 'text-black'}>
        Projects
      </NavLink>
    </nav>
    </header>

  )
}

export default Navbar