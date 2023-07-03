const Vehicle = require("../models/vehicle");

//get all vehicles
const getAllVehicles = async (req, res, next) => {
    let vehicles;

    try{
        vehicles = await Vehicle.find(); 
    }
    catch (err){
        console.log(err);
    }

    if(!vehicles){
        return res.status(404).json({message:"No vehicles found!"});
    }
    return res.status(200).json({vehicles});
};

//get by number
const getByNumber = async (req, res, next) => {
    const id = req.params.id;
    
    let vehicle;
    try{
        vehicle = await Vehicle.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!vehicle){
        return res.status(404).json({message:"No vehicle found!"});
    }
    return res.status(200).json({vehicle});
};



//add a new vehicle
const addVehicle = async (req, res, next) => {
    const {number, category, model, dname, duration, description, lprice, fprice, available, image} = req.body;
    let vehicle;
    const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
    try{
        vehicle = new Vehicle({
            number,
            category,
            model,
            dname,
            duration,
            description,
            lprice,
            fprice,
            available,
            image,
            date
        });
        await vehicle.save();
    }   
    catch (err){
        console.log(err);
    }

    if (!vehicle){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ vehicle });
};


//update a vehicle
const updateVehicle = async (req, res, next) => {
    const id = req.params.id;
    const { number, category, model, dname, duration, description, lprice, fprice, available,image} = req.body;

    let vehicle;
    try{
        vehicle = await Vehicle.findByIdAndUpdate(id, {
            number,
            category,
            model,
            dname,
            duration,
            description,
            lprice, 
            fprice,
            available,
            image
        });
        vehicle = await vehicle.save();
    }
    catch(err){
        console.log(err);
    }
    if(!vehicle){
        return res.status(404).json({message:"Unable to update!"});
    }
    return res.status(200).json({vehicle});

};

//delete a Vehicle
const deleteVehicle = async (req, res, next) => {
    const id = req.params.id;
    let vehicle;

    try{
        vehicle = await Vehicle.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!vehicle){
        return res.status(404).json({message:"Unable to delete!"});
    }
    return res.status(200).json({message:"Vehicle successfully deleted!"});
};
exports.getAllVehicles = getAllVehicles;
exports.getByNumber = getByNumber;
exports.addVehicle = addVehicle;
exports.updateVehicle = updateVehicle;
exports.deleteVehicle = deleteVehicle;