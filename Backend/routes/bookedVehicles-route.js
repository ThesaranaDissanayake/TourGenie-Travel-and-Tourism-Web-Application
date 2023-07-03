const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle");
const bookedVehicle = require("../controllers/bookedVehicle-controller")
const vehiclesController = require("../controllers/vehicle-controller");

router.get("/", bookedVehicle.getAllVehicles);
router.post("/", bookedVehicle.addVehicle);
router.get("/:id", bookedVehicle.getByNumber);
router.put("/:id", bookedVehicle.updateVehicle);
router.delete("/:id", bookedVehicle.deleteVehicle);

module.exports = router;