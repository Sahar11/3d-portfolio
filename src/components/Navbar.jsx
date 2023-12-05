import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
     <div className="items-center w-full flex justify-between max-w-7xl mx-auto">
      <Link className="flex items-center gap-2" onClick={() => {setActive("");
    window.scrollTo(0, 0);
    }}>
      <img src={logo} alt="logo" className="w-30 h-30 object-contain" />
    </Link>
     </div>
    </nav>
  )
}

export default Navbar