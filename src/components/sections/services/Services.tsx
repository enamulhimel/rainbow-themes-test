import CommonWrapper from '@/components/common/CommonWrapper';
import GradientButton from '@/components/common/GradientButton';
import React from 'react';
import blur from '../../../app/blur.png';
import clear from '../../../app/clear.png';
import Button from '@/components/common/Button';

const Services = () => {
  return (
    <div className="relative bg-[url('/images/Mask-group.png')] bg-cover bg-center bg-no-repeat py-20">
      <CommonWrapper>
        <div className="">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <GradientButton label="What we do" />
            <p className="text-5xl font-semibold">Our Popular Services</p>
          </div>
          <div className="relative pt-10">
            <div className="absolute w-200 left-50">
              <img src={blur.src} alt="" />
            </div>
            <div className="absolute w-220 top-23 left-40">
              <img src={blur.src} alt="" />
            </div>
            <div className="absolute w-240 top-35 left-30">
              <img src={blur.src} alt="" />
            </div>
            <div className="absolute w-260 top-50 left-20">
              <img src={clear.src} alt="" />
            </div>
          </div>
          <div className="pt-140 flex items-center justify-center">
            <Button label="view all services" />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Services;
