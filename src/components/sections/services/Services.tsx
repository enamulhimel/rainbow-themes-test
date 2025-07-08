import CommonWrapper from '@/components/common/CommonWrapper';
import GradientButton from '@/components/common/GradientButton';
import React from 'react';
import blur from '../../../app/blur.png';
import clear from '../../../app/clear.png';
import Button from '@/components/common/Button';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="relative bg-[url('/images/Mask-group.png')] bg-cover bg-center bg-no-repeat">
      <CommonWrapper>
        <div className="">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <GradientButton label="What we do" />
            <p className="text-5xl font-semibold">Our Popular Services</p>
          </div>
          <div className="relative md:pt-10">
            <div className="absolute w-80  md:w-200 md:left-50">
              <Image src={blur.src} alt="" />
            </div>
            <div className="md:absolute w-80 md:w-220 md:top-23 md:left-40">
              <Image src={blur.src} alt="" />
            </div>
            <div className="md:absolute w-80 md:w-240 md:top-35 md:left-30">
              <Image src={blur.src} alt="" />
            </div>
            <div className="md:absolute w-80 md:w-260 md:top-50 md:left-20">
              <Image src={clear.src} alt="" />
            </div>
          </div>
          <div className="pt-5 md:pt-140 flex items-center justify-center">
            <Button label="view all services" />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Services;
