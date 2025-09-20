import { useEffect, lazy, Suspense, useState } from "react";
import { Element,animateScroll } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import Silk from './background/Silk'; // Import directly for immediate loading
import Loader from './components/loader/Loader'
const GradualBlur = lazy(() => import('./gradualBlur/gradualBlur'))
const NavBar = lazy(() => import("./components/navbar/NavBar"))
const Hero = lazy(() => import("./components/hero/Hero"))
const Services = lazy(() => import("./components/services/Services"))
const Projects = lazy(() => import("./components/projects/Projects"))
const Skills = lazy(() => import("./components/skills/Skills"))
const About = lazy(() => import("./components/about/About"))
const Achivements = lazy(() => import("./components/achivements/Achivements"))
const ContactForm = lazy(() => import("./components/contact/Contact"))
const Footer = lazy(() => import("./components/footer/Footer"))
import ScrollToTopButton from "./components/gradialBlur/GradualBlur"
import { ToastContainer } from 'react-toastify';

 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Restore scroll on mount (useful on client navigation)
    window.history.scrollRestoration = 'manual'
    
    // Show loader for 2 seconds on first load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])
  
  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative" }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                 />
            
            <Silk />
            
            <div style={{ position: "relative", zIndex: 10, color: "white", width: "100%" }}>
              <NavBar />
              <div className="mainContainer" style={{ padding: "20px", display:"flex", flexDirection:"column", gap:"100px" }}>
                <Element name="hero"><Hero /></Element>
                <Suspense fallback={null}>
                  <Element name="services"><Services/></Element>
                </Suspense>
                <Suspense fallback={null}>
                  <Element name="projects"><Projects/></Element>
                </Suspense>
                <Suspense fallback={null}>
                  <Element name="skills"><Skills/></Element>
                </Suspense>
                <Suspense fallback={null}>
                  <Element name="about"><About/></Element>
                </Suspense>
                <Suspense fallback={null}>
                  <Element name="achievements"><Achivements/></Element>
                </Suspense>
                <Suspense fallback={null}>
                  <Element name="contact"><ContactForm/></Element>
                </Suspense>
              </div>
              <Footer/>
               <GradualBlur
                target="page"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
              />

            </div>
              <ScrollToTopButton onClick={() => animateScroll.scrollToTop({ smooth: true })} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
