import React from 'react'
import '../styling/card.css'

import { motion } from "framer-motion";



const Card = ({icon,heading,detail,link}) => {

  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
<>
 


<div className="card animated-button1">


  <img src={icon} alt="" />

  <span> {heading}</span>
  <p class="det"> {detail}</p>
  <button className='c-button button' onClick={()=>window.location.href=link}> More..
  </button>
</div>
</>
  )
}

export default Card;
