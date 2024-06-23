import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto h-14'>
            <div>
                <Image src='/assets/TestLogo@2x.png' width={210} height={48} alt='logo' />
            </div>
            <div>
                
            </div>
        </nav>
    );
};

export default Navbar;