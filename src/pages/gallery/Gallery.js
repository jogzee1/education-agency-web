import React from 'react'
import Back from '../../components/common/back/Back';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';

const Gallery = () => {
  return (
    <>
    <Header />
    <Back title='Gallery' />
    <section className='gallery '>
     <div className='container'>Gallery</div>
    </section>
    <Footer />
    </>
  )
}

export default Gallery;