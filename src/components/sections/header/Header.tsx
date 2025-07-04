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
        <GradientBanner/>
    </div>
  )
}

export default Header