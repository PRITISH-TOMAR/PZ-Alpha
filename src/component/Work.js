import React from 'react'
import '../styling/work.css'
import amazon from '../img/amazon.png'
import facebook from '../img/Facebook.png'
import shopify from '../img/Shopify.png'
import upwork from '../img/Upwork.png'
import { animate, motion } from "framer-motion";
import {Link} from "react-scroll"

import feverr from '../img/fiverr.png'
const Work = () => {
  return (
    <div className='w'>
<div className="w-l">
    <span className='headingp'> Works with all</span>
    <span className='headingq'> Reknowned Companies</span>
    
    <span className='text ct'>Working in the realm of branded companies, I find myself immersed in a world of opulence and sophistication. </span> <span className='ct'>Working with branded companies grants me the privilege of interacting with an array of stakeholders, including visionary leaders, talented creatives, and astute marketers.  </span><span className='ct'> These individuals possess an unparalleled drive for excellence and an unwavering commitment to delivering experiences that transcend expectations.</span>
  
    <Link className='link' to="contact" spy={true} smooth={true}> 
    <button className="button w-button">Hire Me</button> </Link>
 
    </div>      
<div className="w-r">

    <div className="con">
    <motion.div
  whileInView={ {x:0,opacity: 1,}}
  
  initial={{ x:100,opacity: 0}}
    transition={ {
                    duration:1.2
                    ,type:"tween",
                    
                  }}
                  
                  
                  
>
    <div className="back-cir blue"></div>
        <div className="back-cir red"></div>
        {/* <div className="back-cir green"></div> */}
        <div className="back-cir yellow"></div>
       
    <div className="m-cir">
        <div className="in-cir">
            <img src={shopify} alt="" />
        </div>
        <div className="in-cir">
            <img src={amazon} alt="" />
        </div>
        <div className="in-cir">
            <img src={facebook} alt="" />
        </div>
        <div className="in-cir">
            <img src={feverr} alt="" />
        </div>
        <div className="in-cir">
            <img src={upwork} alt="" />
        </div>
       
    </div>


    </motion.div>
    </div>      
    </div>
    </div>
  )
}

export default Work
