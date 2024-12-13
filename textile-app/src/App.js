import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Category from './components/Category';
import Bestselling from './components/Bestselling';
import Discover from './components/Discover'
import Premium from './components/Premium'
import FeaturesNew from './components/FeactureNew';
import ClientTestimonial from './components/ClientTestimonial'
import Collabration from './components/collabration'
import Video from './components/video'
import Blogs from './components/Blogs'
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Features />
      <Category/>
      <Bestselling/>
      <Discover/>
      <Premium/>
      <FeaturesNew/>
      <ClientTestimonial/>
      <Collabration/>
      <Video/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default App;