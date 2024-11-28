import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex space-x-3 justify-center'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/tea'>Added tea</NavLink>
            <NavLink to='/allTea'>All Tea</NavLink>
        </div>
    );
};

export default Navbar;