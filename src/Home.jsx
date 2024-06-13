// src/Home.js
import React from 'react';
import './Home.css';
import sesameStreetImage from './assets/images/00130.png';


function Home() {
  return (
    <div className="home">
      <header className="banner">
      </header>
      <main>
      <div className='separator'></div>
        <h1 className='intro'>Sesame Street Image Corpus</h1>
        <div className='separator'></div>
        <p className='indented'>
          This repository of images from Sesame Street enables machine learning on images that have had a profound impact on child development for 50 years.
        </p>
        <img src={sesameStreetImage} alt="Sesame Street" className="sesame-image" />
        {/* Home page content */}
      </main>
    </div>
  );
}

export default Home;
