
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import { NavLink } from "react-router-dom";

const Header = () => {
    
  return (
    <div>
        <AppBar sx={{ backgroundColor: "#3A1078"}} position='fixed'>
            <Toolbar>
            <NavLink style={{ color: "white"}}>
            <Typography>
                T<PersonPinCircleOutlinedIcon/>urGenie
            </Typography>
            </NavLink>
            <Tabs
            
            >
            <Tab />

            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;