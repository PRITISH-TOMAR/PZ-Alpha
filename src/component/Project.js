import React from 'react'
import {Swiper, SwiperSlide}from'swiper/react'
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import {motion} from "framer-motion"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import P1 from '../img/P1.png'
import P2 from '../img/P2.png'
import P3 from '../img/P3.png'
import P4 from '../img/P4.png'
import P5 from '../img/P5.png'
import P6 from '../img/P6.png'
import P7 from '../img/P7.png'
import '../styling/project.css'
import {Link} from "react-scroll"

import 'swiper/css'

const Project = () => {



  const Pro = [
    {
    
      imag: P1,
      link:"https://xenon-legacy.netlify.app/"
    },
    {
      
      imag: P2,
      link:"https://pritish-tomar.github.io/Truecaller-home/"
    },
    {
      
      imag: P3,
      link:"http://accessories404.netlify.app"
    },
    {
      
      imag: P5,
      link:"https://pritish-tomar.github.io/ASPIRE-7/#design"
    },
    {
      
      imag: P6,
      link:"https://explore-x.netlify.app"
    },
    {
      
      imag: P7,
      link:"https://alpha-travel.netlify.app/"
    },
   
    
  ];


  return (
    <div className='pro' id='Project'>
        <span className="headingp">My Projects</span>
        <span className="headingq">Development</span>
     


        <Swiper id='p-swiper'
           modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        className="pro-slider"
      >
        <SwiperSlide>
         <a href="https://explore-x.netlify.app/" target='_blank'> <img src={P6} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://alpha-travel.netlify.app/" target='_blank'> <img src={P7} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://xenon-legacy.netlify.app/" target='_blank'> <img src={P1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://pritish-tomar.github.io/Truecaller-home/" target='_blank'>  <img src={P2} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="http://accessories404.netlify.app" target='_blank'>  <img src={P3} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="Navbar" spy={true} smooth={true}> <img src={P4} alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://pritish-tomar.github.io/ASPIRE-7" target='_blank'>  <img src={P5} alt="" /></a>
        </SwiperSlide>
      </Swiper>

     
      <motion.div className="mot"
  // animate={{ x: 0 , y:0}}
  whileInView={ {opacity: 1}}
  initial={{opacity: 0}}
    transition={ {
                    duration:1.5
                    ,type:"spring"}}
>

        <div className="p-mini">

     
        {Pro.map((item)=>{
       
      
       return(
      
           <a href={item.link} className='anc' >

            <img src={item.imag} alt="" />
           </a>
             
     




     )})}
     <Link className='anc' to="Navbar" spy={true} smooth={true}>  <img src={P4} alt="" />
 </Link>
     

            </div>
            </motion.div>
    </div>
  )
}

export default Project
