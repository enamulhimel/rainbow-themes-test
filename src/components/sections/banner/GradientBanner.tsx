import React from 'react';
import union from '../../../app/Union.png'
import star from '../../../app/Star 4.png'

const GradientBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] py-3 px-4">
      <div className="flex flex-wrap justify-center items-center gap-6 text-white uppercase font-bold text-sm sm:text-base md:text-lg tracking-wide">
        <span className="border border-white px-2 py-1 rounded-md">Creative</span>
        <span className="text-2xl"><img src={union.src} alt="" /></span>
        <span className="border border-white px-2 py-1 rounded-md">Solutions</span>
        <span className="text-2xl"><img src={star.src} alt="" /></span>
        <span className="border border-white px-2 py-1 rounded-md">Expert Guidance</span>
        <span className="text-2xl"><img src={union.src} alt="" /></span>
        <span className="border border-white px-2 py-1 rounded-md">Consulting</span>
      </div>
    </div>
  );
};

export default GradientBanner;
