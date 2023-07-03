import { Box, Button, Modal, Typography } from '@mui/material';
import axios from "axios";
import React from 'react';
import "./Vehicle.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'auto',
  p: 4,
};


const VehicleBooking = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useNavigate();
  const { _id, number, category, model, dname, duration, description, lprice, fprice, image, date} = props.vehic;

  
  
  return (
    
    <div className='card'>
      <h3 className="bold-heading">{number}</h3>
      <img src={image} alt={model} />
      <h2 className="bold-italic-heading">{model}</h2>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "#3A1078",
          color: "#fff",
          '&:hover': {
            backgroundColor: "#fff",
            color: "#3A1078"
          }
        }}
      >
        View
      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{...style, maxHeight: '80vh', overflowY: 'auto'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <b>{number}</b>
              <img src={image} alt={model} />
              <b>{category}</b>
              <br/>
              <b>{model}</b>
              <br/>
              <br/>
              <h5> {dname} </h5>
              <br/>
              <h5>{duration}</h5>
              <br/>
              <h2>{description}</h2>
              <br/>
              <h3>Rs.{lprice} / $ {fprice}</h3>
              <br/>
              <h3>{date}</h3>

              


              <Button
                LinkComponent={Link}
                // to={`/VehicleBooking/${_id}`}
                sx={{
                  mt: "auto",
                  backgroundColor: "#3A1078",
                  color: "#fff",
                  '&:hover': {
                    backgroundColor: "#ff0000",
                    color: "#3A1078"
                  },
                  ml: 20 // add margin-left of 16px
                }}
              >
                Book
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>

    </div>
  );
};

export default VehicleBooking;




