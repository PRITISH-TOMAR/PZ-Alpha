import React from 'react'
import Github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import facebook from '../img/Facebook.png'
import instagram from '../img/instagram.png'
import mail from '../img/mail.png'

import '../styling/footer.css'

const footer = () => {
    return (
        <div>

            <footer>

                <div class="mail">
                    <span className='headingp e'><img src={mail} alt="" /><span className="e headingq"><a href="mailto:pritishtomar2004@gmail.com"> Pritishtomar2004@gmail.com</a> </span>  </span>
                </div>


                <div className="page">

                <div class="social">
                    <a href="https://github.com/PRITISH-TOMAR"> <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/pritish-tomar-54408a228/"> <img src={linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/pritiish.tomar/"> <img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100077386884122"> <img src={facebook} alt="" /></a>
                </div>
               
                    
                    <div class="cpy">2023 Copyright &copy;  All Rights Reserved</div>
                </div>
            </footer>
        </div>
    )
}

export default footer
