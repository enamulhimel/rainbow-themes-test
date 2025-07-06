'use client'; // only if this needs to be interactive

import React from 'react';
import Image from 'next/image';
import CommonWrapper from '@/components/common/CommonWrapper';

import left from '../../../app/Arrow-Left.png';
import right from '../../../app/Arrow-Right.png';
import image from '../../../../public/images/Image.png';
import image1 from '../../../../public/images/Image1.png';
import image2 from '../../../../public/images/Image2.png';
import image3 from '../../../../public/images/Image3.png';
import image4 from '../../../../public/images/Image4.png';

const Testimoni = () => {
  return (
    <div className="relative bg-[url('/images/Mask-group2.png')] bg-cover bg-center bg-no-repeat py-20">
      <CommonWrapper>
        <div className="flex items-center justify-between gap-4 overflow-x-auto">
          <div></div>
          <div className="flex gap-4 justify-center items-center overflow-x-auto">
            {[image, image1, image2, image3, image4].map((img, index) => {
              const isFeatured = index === 2;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-xl overflow-hidden ${
                    isFeatured
                      ? 'min-w-[180px] md:min-w-[220px]'
                      : 'min-w-[120px] md:min-w-[160px]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`testimonial-${index}`}
                    width={isFeatured ? 220 : 160}
                    height={isFeatured ? 220 : 160}
                    className={`rounded-xl object-cover ${
                      isFeatured
                        ? 'shadow-lg ring-4 ring-pink-300 scale-105'
                        : ''
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
        <div className=" pt-10 w-full md:flex md:flex-row md:items-center md:justify-between ">
          <div className="flex-shrink-0">
            <Image src={left} alt="Left Arrow" width={40} height={40} />
          </div>
          <p className="text-2xl text-[#838A95] w-3/5">
            “Simply dummy text of the printing and{' '}
            <span className="text-black font-bold">Expert Advisor</span>. lorem
            Ipsum has been the standard dummy text ever since the when an
            unknown printer took a galley of type and scrambled.”
          </p>
          <div className="flex-shrink-0">
            <Image src={right} alt="Right Arrow" width={40} height={40} />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Testimoni;
