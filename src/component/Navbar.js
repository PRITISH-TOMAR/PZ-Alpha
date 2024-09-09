import React, { useState ,useEffect,useRef } from 'react'
import '../styling/Navbar.css';
import logo from '../img/logos.png'
import { AiFillHome } from 'react-icons/ai';
import { RiServiceFill } from 'react-icons/ri';
import { FaLaptopCode } from 'react-icons/fa';
import { SiOpenproject } from 'react-icons/si';
import HomeIcon from "@mui/icons-material/Home";

// import InfoIcon from "@mui/icons-material/Info";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import {Link} from "react-scroll"
import song from './song.mp3'
import Draw from './Drawer';


const Navbar = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  




  const audioRef = React.createRef();
  

  
useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    }
  }, [isPlaying]);
  
  const togglePlay = () => {
    const audio = audioRef.current;
    

    if (isPlaying) {
      audio.pause();
    } 
    else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };



  
 
  return (
    <div id='Navbar'>
      <div className="n-con">
        <div className="n-l">
            <img src={logo} alt="" className="logo" />
            <audio ref={audioRef} src={song} />
      {/* <button id='n-audio' >{isPlaying ? 'Pause' : 'Play'}</button> */}
      <input type="checkbox" id="switch" onClick={togglePlay} /><label for="switch">Toggle</label>
        </div>
      
        <div className="n-r">
         
                <ul className='ul'>


                     <Link className='link' to="Navbar" spy={true} smooth={true}> <li> <HomeIcon/> Home </li></Link>
                     <Link className='link' to="Skills" spy={true} smooth={true}> <li> <AutoGraphIcon/>Skills </li></Link>
                     <Link className='link' to="Project" spy={true} smooth={true}> <li> <FaLaptopCode/>Projects </li></Link>
                     <Link className='link' to="Review" spy={true} smooth={true}> <li> <SiOpenproject/>Reviews </li></Link>
                     <Link className='link' to="contact" spy={true} smooth={true}> <li> <PhoneRoundedIcon/>Contact </li></Link>
                </ul>
       
    </div>

                
                </div>
<Draw/>
              </div>
  )
}

export default Navbar;
