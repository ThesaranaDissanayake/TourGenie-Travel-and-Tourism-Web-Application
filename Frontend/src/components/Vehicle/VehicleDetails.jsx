import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VehicleDetails = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const histroy = useNavigate();
  //console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/vehicle/${id}`)
        .then((res) => res.data)
        .then(data => setInputs(data.vehicle));
    };
    fetchHandler()
    //.then((data) => setInputs(data.vehic));
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/vehicle/${id}`, {
      number: String(inputs.number),
      category: String(inputs.category),
      model: String(inputs.model),
      dname: String(inputs.dname),
      duration: String(inputs.duration),
      description: String(inputs.description),
      lprice: Number(inputs.lprice),
      fprice: Number(inputs.fprice),
      image: String(inputs.image),
      available: Boolean(inputs.checked)
    }).then(res => res.data)
  };

  //define handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => histroy("/vehicle"));
  };

  //define handleChange
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  
  return (
    <div>
      {inputs && 
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={'center'}
            maxWidth={700}
            alignContent={"center"}
            alignSelf={"auto"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
            marginBottom={10}
          >

            <FormLabel>Vehicle Number Plate</FormLabel>
            <TextField value={inputs.number} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="number" />

            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={inputs.category}
                onChange={handleChange}
                label="Category"
                MenuProps={{
                  style: { width: '50%' },
                }}
              >
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Van">Van</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Tuk Tuk">Tuk Tuk</MenuItem>
                <MenuItem value="Bicycle">Bicycle</MenuItem>
              </Select>

            </FormControl>

            <FormLabel>Model</FormLabel>
            <TextField value={inputs.model} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="model" />

            <FormLabel>Driver's Name</FormLabel>
            <TextField value={inputs.dname} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="dname" />

            <FormLabel>Duration</FormLabel>
            <TextField value={inputs.duration} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name="duration" />  

            <InputLabel id="description">Description</InputLabel>
            <TextField
              id="description"
              name="description"
              value={inputs.overview}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              margin="normal"
            />


            <FormLabel>Price in Rs</FormLabel>
            <TextField value={inputs.lprice} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="lprice" />

            <FormLabel>Price in $</FormLabel>
            <TextField value={inputs.fprice} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="fprice" />

            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

            <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />

            <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>Update & Submit</Button>
          </Box>
        </form>}
    </div>
  );
};

export default VehicleDetails;