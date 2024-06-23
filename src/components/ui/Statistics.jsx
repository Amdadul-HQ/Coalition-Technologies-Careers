import Image from "next/image";
import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import ChartData from "../ChartData";
import { MdArrowDropUp } from "react-icons/md";
const Statistics = ({ patients }) => {
  const filterPatents = patients?.find(
    (item) => item.name === "Jessica Taylor"
  );

  return (
    <div className="col-span-2">
      <div className="bg-[#fff] p-5 rounded-2xl">
        <h1 className="text-[#072635] font-extrabold text-2xl ">
          Diagnosis History
        </h1>
        <div className="bg-[#F4F0FE] h-[400px] w-full mt-10 rounded-xl flex">
          {/* Chart */}
          <ChartData filterPatents={filterPatents} />
          <div>
          <div className="mt-4 pl-4">
            <div className="flex gap-x-2 items-center">
              <div className="bg-blue-500 h-4 w-4 rounded-full"></div>
              <h1 className="text-sm font-bold text-[#072635]">Systolic</h1>
            </div>
              <p className="text-2xl font-bold text-[#072635]">160</p>
              <p className="text-sm font-bold"><MdArrowDropUp  className="text-2xl"/>Higher than Average</p>
          </div>
          <div className="mt-4 pl-4">
            <div className="flex gap-x-2 items-center">
              <div className="bg-[#E66FD2] h-4 w-4 rounded-full"></div>
              <h1 className="text-sm font-bold text-[#072635]">Diastolic</h1>
            </div>
              <p className="text-2xl font-bold text-[#072635]">78</p>
              <p className="text-sm font-bold"><FaCaretDown className="text-2xl"/>Lower than Average</p>
          </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-5 mt-5">
          <div className="bg-[#E0F3FA] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/respiratory rate@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className="text-base font-medium text-[#072635] mt-4">
              Respiratory Rate
            </p>
            <p className="text-3xl font-extrabold text-[#072635]">
              {filterPatents?.diagnosis_history[0]?.respiratory_rate?.value}
            </p>
            <p className="text-sm text-[#072635] font-normal">
              {filterPatents?.diagnosis_history[0]?.respiratory_rate?.levels}
            </p>
          </div>
          <div className="bg-[#FFE6E9] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/temperature@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className="text-base font-medium text-[#072635] mt-4">
              Temperature
            </p>
            <p className="text-3xl font-extrabold text-[#072635]">
              {filterPatents?.diagnosis_history[0]?.temperature?.value}
            </p>
            <p className="text-sm text-[#072635] font-normal">
              {filterPatents?.diagnosis_history[0]?.temperature?.levels}
            </p>
          </div>
          <div className="bg-[#FFE6F1] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/HeartBPM@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className="text-base font-medium text-[#072635] mt-4">
              Heart Rate
            </p>
            <p className="text-3xl font-extrabold text-[#072635]">
              {filterPatents?.diagnosis_history[0]?.heart_rate?.value}
            </p>
            <p className="text-sm text-[#072635] font-normal flex items-center gap-x-2">
              <FaCaretDown />{" "}
              {filterPatents?.diagnosis_history[0]?.heart_rate?.levels}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] p-5 rounded-2xl w-full mt-8">
        <h1 className="text-[#072635] font-extrabold text-2xl">
          Diagnostic List
        </h1>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table text-left w-full">
              {/* head */}
              <thead className="">
                <tr className="bg-[#F6F7F8]">
                  <th className="py-3 px-4 rounded-3xl rounded-r-none">
                    Problem/Diagnosis
                  </th>
                  <th className="py-3 px-4 rounded-3xl rounded-r-none rounded-l-none">
                    Description
                  </th>
                  <th className="py-3 px-4 rounded-3xl rounded-l-none">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterPatents?.diagnostic_list.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 text-sm font-normal text-[#072635] py-5">
                      {item.name}
                    </td>
                    <td className="px-4 text-sm font-normal text-[#072635] py-5">
                      {item.description}
                    </td>
                    <td className="px-4 text-sm font-normal text-[#072635] py-5">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
