import React from 'react'
import '../styling/Hero.css'
import Github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'
import spaceman from '../img/spaceman bhai bina planet ke.png'
import {motion} from  'framer-motion'
import {Link} from "react-scroll"

const Hero = () => {
  
  const transition = {
    duration: 1,
    type: "spring",
  };

  
  return (
    <div className='hero'>
      <div className="h-l">
        <div className="h-name">
            <span id='h1'>Hii ! I am </span>
            <span id='h2'>Pritish Tomar </span>

            <h2 id='alpha' className='headingq' data-text="UI/UX Developer">  </h2>
          
        </div>
        <Link className='link' to="contact" spy={true} smooth={true}> 
        <button className="button h-button">Hire Me</button> </Link>

       
        <motion.div
  // animate={{ x: 0 , y:0}}
  whileInView={ {x:0, opacity: 1}}
  initial={{x:-300 ,opacity: 0}}
    transition={ {delay:0.5,
                    duration:1.7
                    ,type:"spring"}}
>
<div className="h-icons">
<a  target="_blank" href='https://github.com/PRITISH-TOMAR'><img src={Github} alt=""/></a>
<a  target="_blank" href='https://www.linkedin.com/in/pritish-tomar-54408a228/'><img src={linkedin} alt=""/></a>
<a  target="_blank" href='https://www.instagram.com/pritiish.tomar/'><img src={instagram} alt=""/></a>
</div>
</motion.div>
      </div>
      <motion.div
  // animate={{ x: 0 , y:0}}
  whileInView={ {x:0 ,opacity: 1}}
  initial={{x:300 , opacity: 0}}
    transition={ {delay:0.6 ,
                    duration:1.5
                    ,type:"spring"}}
>
      <div className="h-r">

      <img src={spaceman} alt="Header Img"/>
      </div>
    </motion.div>
    </div>
  )
}

export default Hero;
