import Image from 'next/image';
import React from 'react';
import { GoHome } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";
const Navbar = () => {
    return (
        <nav className='container mx-auto h-14 flex items-center justify-between bg-[#FFFFFF] my-5 px-8 rounded-[70px]'>
            <div>
                <Image src='/assets/TestLogo@2x.png' width={210} height={48} alt='logo' />
            </div>
            <div>
                <ul className='flex items-center gap-x-10'>
                    <li className='text-sm font-bold flex items-center gap-x-2'><GoHome/> Overview</li>
                    <li className='text-sm font-bold flex items-center gap-x-2 bg-[#01F0D0] px-4 py-3 rounded-[41px]'><HiMiniUsers/> Patients</li>
                    <li className='text-sm font-bold flex items-center gap-x-2'><CiCalendar/> Schedule</li>
                    <li className='text-sm font-bold flex items-center gap-x-2'><FiMessageSquare/> Message</li>
                    <li className='text-sm font-bold flex items-center gap-x-2'><FaCreditCard/> Transactions</li>
                </ul>
            </div>
            <div className='flex items-center gap-x-2'>
                <div>
                <Image src='/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png' width={44} height={44} alt='senior-doctor'></Image>
                </div>
                <div className='border-r border-[#707070] pr-3'>
                    <p className='text-sm font-bold text-[#072635]'>Dr. Jose Simmons</p>
                    <p className='text-[#707070] text-sm'>General Practitioner</p>
                </div>
                
                <div className='flex items-center text-2xl'>
                    <LuSettings/>
                    <IoMdMore/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;