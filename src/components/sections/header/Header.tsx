import Company from '@/components/common/Company'
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <div>
        <Company/>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Header