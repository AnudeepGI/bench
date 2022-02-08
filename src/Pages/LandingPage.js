
//import logo from './logo.svg';
import '../App.css';
import '../assets/bootstrap.min.css';
import '../assets/animate.css';
import '../assets/lineicons.css';
import '../assets/ud-styles.css';

import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Team from '../Components/Team';
import Testimonials from '../Components/Testimonials';
import Faq from '../Components/Faq';
import Pricing from '../Components/Pricing';
import About from '../Components/About';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import Header from '../Components/Header';

function LandingPage() {
  return (
      <>
        <Header/>
        <Hero/>
        <Features/>
        <About/>
        <Pricing/>
        <Faq/>
        <Testimonials/>
        <Team/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default LandingPage;
