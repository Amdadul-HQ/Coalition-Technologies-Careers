import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from "react-icons/fa6";
import { TbGenderFemale } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const PatientsDetails = ({patients}) => {
    const filterPatents = patients?.find(
        (item) => item.name === "Jessica Taylor"
      );
    return (
        <div>
            <div className='bg-[#fff] rounded-2xl py-5'>
            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/jessytailor.png' width={200} height={200} alt={filterPatents?.name}/>
                <p className='mt-6 mb-8 text-2xl font-extrabold'>{filterPatents?.name}</p>
            </div>
            <div className='px-5'>
                <div className='flex items-center gap-x-4 mt-6'>
                    <p className='bg-[#F6F7F8] p-3 w-fit rounded-full'><FaRegCalendar/></p>
                    <div>
                        <p className='text-[#072635] text-sm font-medium'>Date Of Birth</p>
                        <p className='text-[#072635] text-sm font-bold'>{new Date(filterPatents?.date_of_birth)?.toDateString()}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 mt-6'>
                    <p className='bg-[#F6F7F8] p-3 w-fit rounded-full'><TbGenderFemale/></p>
                    <div>
                        <p className='text-[#072635] text-sm font-medium'>Gender</p>
                        <p className='text-[#072635] text-sm font-bold'>{filterPatents?.gender}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 mt-6'>
                    <p className='bg-[#F6F7F8] p-3 w-fit rounded-full'><FaPhoneAlt/></p>
                    <div>
                        <p className='text-[#072635] text-sm font-medium'>Contact Info.</p>
                        <p className='text-[#072635] text-sm font-bold'>{filterPatents?.phone_number}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 mt-6'>
                    <p className='bg-[#F6F7F8] p-3 w-fit rounded-full'><FaPhoneAlt/></p>
                    <div>
                        <p className='text-[#072635] text-sm font-medium'>Emergency Contacts</p>
                        <p className='text-[#072635] text-sm font-bold'>{filterPatents?.emergency_contact}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 mt-6'>
                    <p className='bg-[#F6F7F8] p-3 w-fit rounded-full'><MdOutlineVerifiedUser/></p>
                    <div>
                        <p className='text-[#072635] text-sm font-medium'>Insurance Provider</p>
                        <p className='text-[#072635] text-sm font-bold'>{filterPatents?.insurance_type}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8 bg-[#fff] py-5 px-5 rounded-2xl'>
            <p className='text-[#072635] font-extrabold text-2xl'>Lab Results</p>
            {
                filterPatents?.lab_results.map((item,index) => <p className='text-sm font-normal py-3 text-[#072635] px-5' key={index}>{item}</p>)
            }
        </div>
        </div>
    );
};

export default PatientsDetails;