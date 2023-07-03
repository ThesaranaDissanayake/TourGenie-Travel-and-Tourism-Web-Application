import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import VMdashbrd from "./components/VMdashbrd";
import AddVehicle from "./components/AddVehicle";
import Vehicles from "./components/Vehicle/Vehicles";
import VehicleDetails from "./components/Vehicle/VehicleDetails";
import VehicleUser from "./components/Vehicle/VehicleUser";
import VehicleBooking from "./components/Vehicle/VehicleBooking";

function App() {
    return (
        <React.Fragment>
          <ToastContainer />
          <header>
              <Header />
          </header>
          <main>
            <VMdashbrd/>
            <Routes>
              <Route path="/add" element={<AddVehicle />} exact/>
              <Route path="/vehicles" element={<Vehicles />} exact/>
              <Route path="/vehicles/:id" element={<VehicleDetails />} exact/>
              <Route path="/vehiclesUser" element={<VehicleUser/>} exact/>
              <Route path="/VehicleBooking/:id" element={<VehicleBooking/>} exact/>
            </Routes>
          </main>

        </React.Fragment>
    )
};

export default App;
