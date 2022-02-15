import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <img className='logo' src='https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg' alt='logo' />
                </Link>               
                <ul className='nav-links'>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
