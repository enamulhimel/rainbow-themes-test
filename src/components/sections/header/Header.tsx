import Company from '@/components/common/Company'
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import GradientBanner from '../banner/GradientBanner'

const Header = () => {
  return (
    <div>
        <Company/>
        <Navbar/>
        <HeroSection/>
        <div className="absolute bottom-[-40px] left-0 w-full z-20">
          <GradientBanner />
        </div>
    </div>
  )
}

export default Header