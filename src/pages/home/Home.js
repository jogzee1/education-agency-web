import React from 'react'
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import Hero from '../../components/hero/Hero';
import Testimonal from '../../components/testimonal/Testimonal';
import AboutCard from '../about/AboutCard';

const Home = () => {
  return (
    <>
    <Header />
     <Hero />
     <AboutCard />
     <Testimonal />
     <Footer />
    </>
  )
}

export default Home;