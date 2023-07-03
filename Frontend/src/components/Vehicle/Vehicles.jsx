import React, { useEffect, useState } from "react";
import Vehicle from "./Vehicle";
import axios from 'axios';
import { Box, Button, Modal, Typography } from '@mui/material';
const URL = "http://localhost:5000/vehicle";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Vehicles = () => {
  const [vehicles, setVehicles] = useState();
  useEffect(() => {
    fetchHandler()
      .then(data => setVehicles(data.vehicles))

  }, []);
  console.log(vehicles);

  function filterContent(profile, searchTerm) {
    console.log(profile)
    console.log(searchTerm)
    const result = profile.filter(
      (r) =>
        r.number.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setVehicles(result);
  }



  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:5000/vehicle").then((res) => {
      if (res.data.vehicles) {
        filterContent(res.data.vehicles, searchTerm);
      }
    });
  };

  return (
    <>
      <div className="flex items-center m-[80px] ml-[700px]">
        <div className="flex space-x-1">
          <input
            type="text" onChange={handleTextSearch}
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-purple-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>


      <div>
      
        <ul>
          {vehicles &&
            vehicles.map((vehic, i) => (
              <li key={i}>
                <Vehicle vehic={vehic} />
              </li>
            ))}
        </ul>
        
      </div>
    </>
  )
}

export default Vehicles;