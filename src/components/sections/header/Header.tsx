import Company from '@/components/common/Company';
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import GradientBanner from '../banner/GradientBanner';
import Solution from '../solution/Solution';
import Services from '../services/Services';
import Works from '../works/works';
import Testimoni from '../testimonial/Testimoni';
import Footer from '../footer/Footer';

const Header = () => {
  return (
    <div className="">
      <Company />
      <Navbar />
      <div className="flex flex-col">
        <div>
          <HeroSection />
        </div>
        <div className="md:absolute md:left-0 md:-bottom-80 w-full md:z-20">
          <GradientBanner />
        </div>
      </div>
      <div className="md:mt-100">
        <Solution />
      </div>
      <div className="">
        <Services />
      </div>
      <div>
        <Works />
      </div>
      <div className="">
        <Testimoni />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
