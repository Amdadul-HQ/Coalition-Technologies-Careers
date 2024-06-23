'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ChartData = ({filterPatents}) => {
  const labels = filterPatents?.diagnosis_history?.slice(0,6).map(item => item?.month);
  const option = {
    animations: {
      radius: {
        duration: 400,
      }
    },
    hoverRadius: 12,
    hoverBackgroundColor: 'yellow',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    plugins: {
      tooltip: {
        enabled: true
      }
    }
  }


    const [userDate,setUserDate] = useState({
        labels:labels,
        datasets:[{
            label:"SYSTOLIC",
            data:filterPatents?.diagnosis_history?.map(item => item?.blood_pressure?.systolic?.value),
            
        },{
          label:"DIASTOLIC",
          data:filterPatents?.diagnosis_history?.map(item => item?.blood_pressure?.diastolic?.value)
      }]
    })


    useEffect(()=>{
      setUserDate({
        labels:labels,
        datasets:[{
          label:"SYSTOLIC",
          data:filterPatents?.diagnosis_history?.map(item => item?.blood_pressure?.systolic?.value),
        },{
          label:"DIASTOLIC",
          data:filterPatents?.diagnosis_history?.map(item => item?.blood_pressure?.diastolic?.value)
      }]
          
    })
    },[filterPatents,labels])

    return (
        <div style={{width:'600px',padding:'20px'}}>
          <h1 className='text-lg font-bold text-[#072635]'>Blood Pressure</h1>
            <Line data={userDate} options={option} />
        </div>
    );
};

export default ChartData;