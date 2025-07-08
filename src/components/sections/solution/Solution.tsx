import CommonWrapper from '@/components/common/CommonWrapper';
import woman from '../../../app/woman.png';
import group from '../../../app/Mask-group.png';
import ceo from '../../../app/CEO.png';
import circle from '../../../app/Comapny-Experience.png';
import { GoDotFill } from 'react-icons/go';

import React from 'react';
import GradientButton from '@/components/common/GradientButton';
import Button from '@/components/common/Button';
import StatsRow from '@/components/common/StatsRow';
import Image from 'next/image';

const Solution = () => {
  return (
    <CommonWrapper>
      <div>
        <div className="flex flex-col w-full md:flex-row md:pb-20">
          <div className="flex flex-col md:relative md:w-1/2 ">
            <Image src={woman.src} alt="" className="md:w-80" />
            <Image
              src={group.src}
              alt=""
              className="md:absolute md:-bottom-10 md:left-70 "
            />
            <Image
              src={circle.src}
              alt=""
              className="md:absolute md:bottom-80 md:left-90"
            />
          </div>
          <div className="w-1/2">
            <GradientButton label="Know about us" />
            <p className="text-5xl font-semibold pt-3">
              All-in-one web solution <br /> for your business
            </p>
            <p className="text-sm font-normal text-[#838A95] pt-3">
              We are creative agency, we are here to helping your business{' '}
              <br /> growth consectetur adipiscing.
            </p>
            <ul className="py-5">
              <li className="flex flex-row pt-2 ">
                <GoDotFill />
                There are many variations of passages available
              </li>
              <li className="flex flex-row pt-2">
                <GoDotFill />
                Majority have suffered alteration in some form
              </li>
              <li className="flex flex-row pt-2">
                <GoDotFill />
                Contrary to popular belief is not simply random
              </li>
            </ul>
            <div className=" flex flex-col md:flex-row items-center md:justify-between justify-start">
              <div>
                <Button label="More about us" />
              </div>
              <div>
                <Image src={ceo.src} alt="" className="w-30 mx-auto md:w-50" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <StatsRow />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Solution;
