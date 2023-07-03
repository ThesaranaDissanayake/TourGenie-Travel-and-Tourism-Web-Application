import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const PMdashbrd = () => {
  
  const [allVehicles,setAllVehicle] = useState([])

  const report = () => {
    console.log("clicked")
    const getAllVehicles = ()=>{
      axios.get("http://localhost:5000/vehicle").then((res)=>{
        console.log(res.data)
        setAllVehicle(res.data)
        console.log(allVehicles)
        // Generate PDF
        const doc = new jsPDF();
        const tableRows = [];
        
          allVehicles.vehicles.forEach(vehicle => {
            const vehicleData = [
              vehicle.dname,
              vehicle.model,
              vehicle.number,
              vehicle.date,
              vehicle.lprice,
              vehicle.fprice
            ];
            tableRows.push(vehicleData);
          });
          doc.autoTable({
            head: [['Name', 'Model', 'License Plate', 'date', 'local Price', 'Foreign Price']],
            body: tableRows
          });
          doc.save('vehicle-report.pdf');
        
      })
    }
    getAllVehicles()
  }
  
  return (
    <>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="default-sidebar" class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-[#3A1078]">

      <div>
        <img  alt="logo" className=" w-[150px] h-[100px] mx-auto"></img>
        <h1 className=" text-[#FFFFFF] font-bold text-l text-center w-[150px] leading-5 my-2 tracking-wide mx-auto">
          Transport Management System
        </h1>
      </div>

      <div className="my-6 ">

        <Link to= '/vehicles'
          className=" bg-[#FFFFFF] px-[15px] hover:bg-[#3A1078] py-[8px] rounded-[120px] font-bold text-black text-[10px] block w-[150px] text-center mb-7 mx-auto"
        >All Vehicle</Link>
        
        <Link to='/add'
          className=" bg-[#FFFFFF] px-[15px] hover:bg-[#3A1078] py-[8px] rounded-[120px] font-bold text-black text-[10px] block w-[150px] text-center mb-7 mx-auto"
        >Add Vehicle</Link>

        <Link to='/transportation'
          className=" bg-[#FFFFFF] px-[15px] hover:bg-[#3A1078] py-[8px] rounded-[120px] font-bold text-black text-[10px] block w-[150px] text-center mb-7 mx-auto"
        >Available Vehicle</Link>

        <Link to='bookings'
          className=" bg-[#FFFFFF] px-[15px] hover:bg-[#3A1078] py-[8px] rounded-[120px] font-bold text-black text-[10px] block w-[150px] text-center mb-7 mx-auto"
        >Bookings</Link>

         <Link to="/" href="#"
        > 
          <button 
            className='bg-[#FFFFFF] hover:bg-[#3A1078] px-[15px] py-[8px] rounded-[120px] font-bold text-black text-[10px] block w-[150px] text-center mb-7 mx-auto'
             onClick={report}
            >
          Report
          </button>
           </Link>

      </div>
    </div>

  </aside>
  </>
  )
}

export default PMdashbrd;
