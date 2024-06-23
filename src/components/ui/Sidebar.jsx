import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
const Sidebar = ({ patients }) => {
  console.log(patients);
  return (
    <div className="w-[367px] bg-[#fff]">
      <div>
        <h1>Patients</h1>
        <IoSearch />
      </div>
      <div className="mt-10">
        {patients &&
          patients.map((item, index) => {
            return (
              <div className="flex items-center gap-x-3 px-5 mt-8" key={index}>
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
                    <p className="text-[#072635]">{item?.name}</p>
                    <p>
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
