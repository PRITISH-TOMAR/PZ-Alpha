import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import Work from './component/Work';
import Project from './component/Project';
import Review from './component/Review';
import Contact from './component/Contact';
import {motion, useScroll, useSpring} from "framer-motion"
import Footer from './component/footer';
import BackToTopButton from './component/Top';
function App() {

        // alert("For a better experience, please view in laptop or PC !  ")

  const transition = {
    duration: 1,
    type: "spring",
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (<>
        <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="App">




            <Navbar/>
            <Hero/>
            <Services/>
            <Work/>
            <Project/>
            {/* <Review/> */}
            <Contact/>
            <Footer/>

            <BackToTopButton/>
    </div>
  </>
  );
}

export default App;
