import React from 'react'
import '../styling/Services.css'
import Card from './Card'
import Exp from './Exp'
import webd from '../img/webd.jpg'
import { animate, motion } from "framer-motion";
import coding from '../img/coding.jpg'
import designer from '../img/photoshop.jpg'
const Services = () => {


const cards=[
  {id:1,
    icon:webd,
    heading:"Web Development",
    detail:"HTML5, CSS, Javascript, Bootstrap, React JS, Node JS",
    link:""
  },
  {id:2,
    icon:coding,
    heading:"Competitive Programming",
    detail:"C, C++, STL, Java, Kotlin, Python",
    link:"https://www.codechef.com/users/pritishtomar_1"
  },
  {id:3,
    icon:designer,
    heading:"Designing",
    detail:"Photoshop, Figma, Sketch",
    link:""
  }
]





  return (
    <>

    <div className='s' id='Skills'>
      <div className="s-l">
<span className='headingp '>My Skills</span>


<span className='text t2'>In the vast realm of digital craftsmanship, I stand as a paragon of coding prowess. With an intellectual palette adorned with the vibrant hues of programming languages, I embark on a journey of logical mastery, effortlessly traversing the intricate landscapes of algorithms and data structures !</span>
<a href=" https://drive.google.com/drive/folders/1qpwmVWfAWPzJycEGfkBt29n5ocsfV-tz?usp=drive_link" target='_blank'>
<button className="s-button button"> Download CV</button>
</a>

    </div>

  
   
    <div className="s-r">
    
   
      {cards.map((item)=>{
       
      
        return(
       <>
               <motion.div
  // animate={{ x: 0 , y:0}}
  whileInView={ {x:0 ,opacity: 1}}
  initial={{x:-100 , opacity: 0}}
    transition={ {
                    duration:1,
                    type:"tween"
                    }}
>
        <Card     className="flexz"

key={item.id}
icon={item.icon}
heading={item.heading}
detail={item.detail}
link={item.link}



/>
</motion.div>        
        </>
      )})}
      
    </div>
    

      </div>
    <Exp/>
    </>
  )
}

export default Services;
    