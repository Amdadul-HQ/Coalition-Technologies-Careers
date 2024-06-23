import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
const Sidebar = ({ patients }) => {
  console.log(patients);
  return (
    <div className="w-[367px] bg-[#fff] rounded-2xl">
      <div className="flex items-center px-5 pt-5 justify-between">
        <h1 className="text-[#072635] text-2xl font-extrabold">Patients</h1>
        <IoSearch className="text-lg" />
      </div>
      <div className="mt-10">
        {patients &&
          patients.map((item, index) => {
            return (
              <div className={`${item.name === 'Jessica Taylor' && 'bg-[#D8FCF7]'} flex items-center gap-x-3 px-5 py-5`} key={index}>
                <div>
                  <Image
                    src={item?.profile_picture}
                    width={48}
                    height={48}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-[#072635] font-bold text-sm">{item?.name}</p>
                    <p className="text-[#707070] font-normal text-sm">
                      {item?.gender}, {item?.age}
                    </p>
                  </div>
                  <div>
                    <IoIosMore />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
