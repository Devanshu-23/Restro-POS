import React from 'react';

import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="flex-btw py-4 px-8 bg-[#1a1a1a]">
            {/* LOGO */}
            <div className='flex-center gap-2'>
                <img  className='h-8 w-8' alt='Restro Logo' />
                <h1 className='title'>Restro</h1>
            </div>
            {/* SEARCH */}
            <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]' >
                <FaSearch className="text-[#f5f5f5] text-2xl" />
                <input 
                    type="text" 
                    placeholder='Search'
                    className='bg-[#1f1f1f] text-[#f5f5f5] outline-none w-full'
                />

            </div>
            {/* LOGGED USER DETAILS */}
            <div className='flex-center gap-4'>
                <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer' >
                    <FaBell className="text-[#f5f5f5] text-2xl" />
                </div>
                <div className='flex-center gap-3 cursor-pointer'>
                    <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-md text-[#f5f5f5] font-semibold'>Alexis</h1>
                        <p className='text-xs text-[#ababab] font-medium'>Admin</p>
                    </div>
                </div>
            </div>
            {/* */}
            {/* CART */}

        </header>
    );
};

export default Header;