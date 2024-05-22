// src/components/NavBar.js
import React, { useState } from 'react';
import '../styles/NavBar.css';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const categories = ['Popular', 'Airing', 'Upcoming'];
    return (
        <div className="navbar">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            {isOpen && (
                <ul className="menu">
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default NavBar;