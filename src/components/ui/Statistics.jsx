import Image from "next/image";
import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const Statistics = ({ patients }) => {
  const filterPatents = patients?.filter(
    (item) => item.name === "Jessica Taylor"
  );

  console.log(filterPatents[0]?.diagnostic_list);
  return (
    <div className="col-span-2">
      <div className="bg-[#fff] p-5 rounded-2xl">
        <h1 className="text-[#072635] font-extrabold text-2xl ">
          Diagnosis History
        </h1>
        <div className="bg-[#F4F0FE] h-[300px] w-full mt-10 rounded-xl">
          {/* Chart */}
        </div>
        <div className="grid grid-cols-3 gap-x-5 mt-5">
          <div className="bg-[#E0F3FA] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/respiratory rate@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className='text-base font-medium text-[#072635] mt-4'>Respiratory Rate</p>
            <p className="text-3xl font-extrabold text-[#072635]">{filterPatents[0]?.diagnosis_history[0]?.respiratory_rate?.value}</p>
            <p className="text-sm text-[#072635] font-normal">{filterPatents[0]?.diagnosis_history[0]?.respiratory_rate?.levels}</p>
          </div>
          <div className="bg-[#FFE6E9] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/temperature@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className='text-base font-medium text-[#072635] mt-4'>Temperature</p>
            <p className="text-3xl font-extrabold text-[#072635]">{filterPatents[0]?.diagnosis_history[0]?.temperature?.value}</p>
            <p className="text-sm text-[#072635] font-normal">{filterPatents[0]?.diagnosis_history[0]?.temperature?.levels}</p>
          </div>
          <div className="bg-[#FFE6F1] h-[242px] rounded-xl p-4">
            <Image
              src="/assets/HeartBPM@2x.png"
              width={96}
              height={96}
              alt=""
            />
            <p className='text-base font-medium text-[#072635] mt-4'>Heart Rate</p>
            <p className="text-3xl font-extrabold text-[#072635]">{filterPatents[0]?.diagnosis_history[0]?.heart_rate?.value}</p>
            <p className="text-sm text-[#072635] font-normal flex items-center gap-x-2"><FaCaretDown/> {filterPatents[0]?.diagnosis_history[0]?.heart_rate?.levels}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] p-5 rounded-2xl w-full mt-8">
        <h1 className="text-[#072635] font-extrabold text-2xl">Diagnostic List</h1>
        <div className="mt-10">
        <div className="overflow-x-auto">
  <table className="table text-left w-full">
    {/* head */}
    <thead className="">
      <tr className="bg-[#F6F7F8]">
        <th className="py-3 px-4 rounded-3xl rounded-r-none">Problem/Diagnosis</th>
        <th className="py-3 px-4 rounded-3xl rounded-r-none rounded-l-none">Description</th>
        <th className="py-3 px-4 rounded-3xl rounded-l-none">Status</th>
      </tr>
    </thead>
    <tbody>
    
      {
        filterPatents[0]?.diagnostic_list.map((item,index)=><tr key={index}>
            <td className="px-4 text-sm font-normal text-[#072635] py-5">{item.name}</td>
            <td className="px-4 text-sm font-normal text-[#072635] py-5">{item.description}</td>
            <td className="px-4 text-sm font-normal text-[#072635] py-5">{item.status}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
