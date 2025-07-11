import React from 'react';
import rocket from '../../../app/rocket.png';
import phone from '../../../app/Phone.png';
import CommonWrapper from '@/components/common/CommonWrapper';
import Button from '@/components/common/Button';
import Avatar from '@/components/common/Avatar';
import image1 from '../../../app/image-1.png';
import image2 from '../../../app/image-2.png';
import image3 from '../../../app/image-3.png';
import banner from '../../../app/Banner Img.png';
import circleWatch from '../../../app/Circle Button.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <CommonWrapper>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="text-4xl md:text-8xl font-bold">
            <p>We Shap the future </p>
            <div className="flex flex-row">
              <p>
                of{' '}
                <span className="bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] text-transparent bg-clip-text">
                  business
                </span>
              </p>
              <Image
                src={rocket.src}
                className="w-[100px] h-[100px]"
                alt="Rocket"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-normal text-[#838A95]">
              A business consultant is a professional who provides expert advice{' '}
              <br /> and guidance to businesses on various aspects such.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Button label="Explore More" />
            <div className="flex flex-row gap-4 items-center bg-white p-4">
              <Image
                className="border border-gray-300 p-2 rounded-full"
                src={phone.src}
                alt=""
              />
              <div>
                <p className="text-sm text-gray-400">Free Consultant</p>
                <p>(406) 555-0120</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 mt-8">
            <Avatar
              images={[image1.src, image2.src, image3.src]}
              extraCount={10}
              size={10}
            />
            <p className="text-base text-[#838A95] pl-20">
              <span className="text-blue-500">2.5K+</span> Business Peoples{' '}
              <br />
              Already Registered
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <div className="md:mt-30 md:pr-25">
              <Image src={circleWatch.src} alt="" />
            </div>
            <div className=" md:w-3xl md:absolute md:-bottom-58 md:-right-38">
              <Image src={banner.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default HeroSection;
