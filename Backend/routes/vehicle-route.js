const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle");
const vehiclesController = require("../controllers/vehicle-controller");

router.get("/", vehiclesController.getAllVehicles);
router.post("/", vehiclesController.addVehicle);
router.get("/:id", vehiclesController.getByNumber);
router.put("/:id", vehiclesController.updateVehicle);
router.delete("/:id", vehiclesController.deleteVehicle);

module.exports = router;