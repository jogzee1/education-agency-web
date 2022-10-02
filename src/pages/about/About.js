import React from 'react'
import Back from '../../components/common/back/Back';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import Heading from '../../components/common/heading/Heading';
import "./about.css"
import AboutCard from './AboutCard';

const About = () => {
  return (
    <>
    <Header />
     <Back title='About Us' />
     <AboutCard />
     <section className="about-sec2">
      <div className='container'>
        <div className='left-div row' >
        <Heading subtitle='OUR VISION' title='Benefits About Our Company' />
        
          <div className='list'>
            <div className='item'>
            <i className='fa fa-paper-plane'></i>
            <h2>Head1</h2>
            <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences.</p>
            </div>
          </div>
        </div>
        <div className='right-div row' >
        <img src="images/about.webp" alt="image" />
        </div>
      </div>
     </section>
     <Footer />
    </>
  )
}

export default About;