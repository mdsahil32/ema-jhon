import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between bg-black  px-8'>
           <div className='p-6'>
           <img src="./public/images/Logo.svg" alt="" />
           </div>
            <div className='flex text-white my-auto gap-8 pr-4'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Header;