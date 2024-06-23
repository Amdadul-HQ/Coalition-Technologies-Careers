'use client'
import { useEffect, useState } from 'react';
import Sidebar from './ui/Sidebar';
import Statistics from './ui/Statistics';

const PatientsDashBoard = () => {
    const [patients,setPatients] = useState([])
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);
    useEffect((()=>{
        fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            method:"GET",
            headers: {
                  'content-type':'application/json',
              'Authorization': `Basic ${auth}`
            }
          }).then(function (response) {
            if (response.ok) {
              return response.json();
            }
            throw response;
          }).then(function (data) {
            // console.log(data);
            setPatients(data)
          }).catch(function (error) {
            console.warn(error);
          });
    }),[])
    return (
        <section className='container mx-auto grid grid-cols-4 gap-x-8'>
            <Sidebar patients={patients} />
            <Statistics patients={patients} />
        </section>
    );
};

export default PatientsDashBoard;