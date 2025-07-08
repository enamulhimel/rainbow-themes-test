import React from 'react';
import union from '../../../app/Union.png';
import star from '../../../app/Star 4.png';
import Image from 'next/image';

const GradientBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] py-3 px-4">
      <div className="flex flex-wrap justify-around items-center gap-6 uppercase font-bold text-sm sm:text-base md:text-5xl tracking-wide">
        {[
          'Creative',
          <Image src={union.src} alt="" key="union1" className="h-6 md:h-10" />,
          'Solutions',
          <Image src={star.src} alt="" key="star" className="h-6 md:h-10" />,
          'Expert Guidance',
          <Image src={union.src} alt="" key="union2" className="h-6 md:h-10" />,
          'Consulting',
        ].map((item, index) =>
          typeof item === 'string' ? (
            <span
              key={index}
              className="px-2 py-1 text-transparent"
              style={{ WebkitTextStroke: '1px white' }}
            >
              {item}
            </span>
          ) : (
            <span key={index} className="text-2xl">
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default GradientBanner;
