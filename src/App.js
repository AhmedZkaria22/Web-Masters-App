import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Organisms/Navbar/Navbar';
import Hero from './Components/Organisms/Hero/Hero';
import './General.css';
import Partners from './Components/Organisms/Partners/Partners';
import Categories from './Components/Organisms/Categories/Categories';
import Courses from './Components/Organisms/Courses/Courses';
import LearnUs from './Components/Organisms/LearnUs/LearnUs';
import Testimonials from './Components/Organisms/Testimonials/Testimonials';
import StartToday from './Components/Organisms/StartToday/StartToday';
import Footer from './Components/Organisms/Footer/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useRef } from 'react';

function App() {
  const topRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (window.scrollY >= 180) {
        topRef.current.classList.remove("toTopOut");
        topRef.current.classList.add("toTopIn");
        setTimeout(() => {
          topRef.current.style.opacity = '1';
        }, 400);
      } else {
          topRef.current.style.opacity = '0';
          setTimeout(() => {
            topRef.current.classList.add("toTopOut");
            topRef.current.classList.remove("toTopIn");
          }, 200);
      }
    });
  }, [])

const handelToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"          
  });       
}

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Categories />
      <Courses />
      <LearnUs />
      <Testimonials />
      <StartToday />
      <Footer />
      <button className="toTop toTopOut" onClick={handelToTop} ref={topRef}><KeyboardArrowUpIcon /></button>
    </div>
  );
}

export default App;
