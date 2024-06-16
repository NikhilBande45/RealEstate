import react from 'react'
import './index.css'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DigitalMastery from './components/DigitalMastery/DigitalMastery';
import OurServices from './components/OurService/OurServices';
import Advantage from './components/Advantage/Advantage';
import Enquiries from './components/Enquiries/Enquiries';
import Properties from './components/Properties/Properties';
import Expertise from './components/Expertise/Expertise';
import Thought from './components/Thought/Thought';
import Testinimial from './components/Testinomial/Testinimial';
import FAQ from './components/FAQ/FAQ';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <DigitalMastery/>
      <OurServices/>
      <Advantage />
      <Enquiries />
      <Properties/>
      <Expertise/>
      <Thought/>
      <Testinimial/>
      <FAQ/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
