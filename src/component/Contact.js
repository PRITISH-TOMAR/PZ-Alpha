import  {useRef, useState,React}from 'react'
import '../styling/contact.css'

    import emailjs from "@emailjs/browser";



    const Contact = () => {


      const [done, setDone] = useState(false)

      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_46odv9m",
            "template_kvbv6vp",
            form.current,
            "I2IeRDtvIDQ9QSlvf"
          )
          .then(
            (result) => {
              console.log(result.text);
             
              setDone(true);
              // form.reset();
            },
            (error) => {
              console.log(error.text);
            }
          );
      };


    return (
        <div className="c-form" id="contact">
          <div className="c-l">
            <div className="awesome">
              <span  className='headingp'>Get in Touch</span>
              <span className='headingq gt'>Let's Create awesome together</span>
             
            </div>
          </div>
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" required=" required" className="user"  placeholder="Name"/>
              <input type="email" name="user_email"  required=" required" className="user" placeholder="Email"/>
              <textarea name="message" className="user" required=" required"  placeholder="Message"/>
              <input type="submit" value="Send" className="button"/>
              <span className='heaingq hed'>{done && "Thanks for Contacting me"}</span>
              
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;