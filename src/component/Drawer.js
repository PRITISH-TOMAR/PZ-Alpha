import React, {useState} from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaLaptopCode } from 'react-icons/fa';
import { SiOpenproject } from 'react-icons/si';
import '../styling/draw.css'
import {Link} from "react-scroll"


import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
const Draw = () => {

    const [openMenu, setOpenMenu] = useState(false);


    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
          link:"Navbar"
        },
        {
          text: "Skills",
          icon: <InfoIcon />,
          link:"Skills"
        },
        {
          text: "Projects",
          icon: <FaLaptopCode />,
          link:"Project"
        },
        {
          text: "Reviews",
          icon: <SiOpenproject />,
          link:"Review"
        },
        {
          text: "Contact",
          icon: <PhoneRoundedIcon />,
          link:"contact"
        },
      ];
  return (
   <>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer  id='d' open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box className='dw'
          sx={{ width: 200 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
          <Link to={item.link} spy={true} smooth={true}> <li> 
              <ListItem key={item.text} disablePadding onClick={()=>setOpenMenu(false)}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {/* <ListItemText primary={item.text} /> */}
                </ListItemButton>
              </ListItem>
             </li></Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  )
}

export default Draw
