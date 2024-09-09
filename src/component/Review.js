import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../styling/review.css'
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import R1 from "../img/R1.jpg";
import R2 from "../img/R2.jpg";
import R3 from "../img/R3.jpg";
// import { paginationClasses } from "@mui/material";


  const clients = [
    {
      img: R1,
      review:
        "I hired Pritish, the web developer, to revamp my company's website, and I am extremely satisfied with the results. John's attention to detail and technical expertise were evident throughout the entire process. He listened to my requirements and translated them into a visually stunning and user-friendly website. Not only did he deliver the project on time, but he also provided excellent post-launch support. John's professionalism, creativity, and commitment to delivering a high-quality product make him an exceptional web developer.",
    },
    {
      img: R2,
      review:
        "Working with pritish, the web developer, was an absolute pleasure. He understood our vision from the start and went above and beyond to bring it to life. His expertise in both design and development ensured that our website not only looked fantastic but also functioned seamlessly.  Pritish demonstrated exceptional professionalism and a deep understanding of user experience",
    },
    {
      img: R3,
      review:
        " Pritish's attention to detail and ability to understand our specific requirements were commendable. He communicated effectively throughout the process, providing regular updates and ensuring that our feedback was implemented promptly. If you want a web developer who can bring your vision to life with precision, Peter is your guy.",
    },
    {
      img: R1,
      review:
        "I had the pleasure of working with Pritish on a web development project, and I can confidently say that he is one of the best in the industry. Michael's technical knowledge and problem-solving skills were exceptional. He was able to tackle complex challenges with ease and always found innovative solutions. Moreover, his communication skills and professionalism made the entire process smooth and efficient.",
    },
    {
      img: R2,
      review:
        "Working with Pritish, the web developer, was a fantastic experience. He possesses a rare combination of technical expertise and creative flair. Pritish took the time to understand our business objectives and crafted a website that not only met our requirements but exceeded them. ",
    },
  ];
  const Review = () => {
  return (
    <div className='rev' id="Review">
        <span className="headingp">How My Reviews are !</span>
       
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
          {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

     <a href="mailto:pritishtomar2004@gmail.com"><button className="button">Write a Review !</button></a> 
    </div>
  )
}

export default Review
