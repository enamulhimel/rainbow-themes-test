import Company from '@/components/common/Company'
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import GradientBanner from '../banner/GradientBanner'
import Solution from '../solution/Solution'
import Services from '../services/Services'
import Works from '../works/works'
import Testimoni from '../testimonial/Testimoni'

const Header = () => {
  return (
    <div>
        <Company/>
        <Navbar/>
        <HeroSection/>
        <div className="absolute bottom-[-50px] left-0 w-full z-20">
          <GradientBanner />
        </div>
        <div className='mt-70'>
          <Solution/>
        </div>
        <div className='mt-30'>
          <Services/>
        </div>
        <div>
          <Works/>
        </div>
        <div>
          <Testimoni/>
        </div>
    </div>
  )
}

export default Header