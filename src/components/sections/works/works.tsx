import React from 'react';
import Image from 'next/image';
import bedge from '../../../app/Badge.png';
import CommonWrapper from '@/components/common/CommonWrapper';
import left from '../../../app/Arrow-Left.png';
import right from '../../../app/Arrow-Right.png';
import active from '../../../app/active-project.png';
import project1 from '../../../app/Project1.png';
import project2 from '../../../app/Project2.png';
import rightpic from '../../../app/right-pic.png';
import leftpic from '../../../app/left-pic.png';

const Works = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <CommonWrapper>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Badge */}
          <div>
            <Image src={bedge} alt="badge" width={40} height={40} />
          </div>

          {/* Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text opacity-20">
              Recent
            </h2>
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text opacity-20">
              Works
            </h2>
          </div>

          {/* Description & Arrows */}
          <div className="text-center lg:text-right max-w-xs">
            <p className="text-sm text-[#838A95]">
              Ready to transform your hard work into a thriving, stress-free
              business?
            </p>
            <div className="flex justify-center lg:justify-end gap-4 mt-4">
              <Image src={left} alt="Left Arrow" width={30} height={30} />
              <Image src={right} alt="Right Arrow" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Projects */}
      </CommonWrapper>
      <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Side Images for large screens */}
        <div className="hidden lg:block">
          <Image
            src={rightpic}
            alt="right decoration"
            width={100}
            height={100}
          />
        </div>

        {/* Projects List */}
        <div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-6">
          {/* Active Project */}
          <div className="md:w-[500px] w-[360px] rounded-xl overflow-hidden bg-white md:absolute md:h-[700px] md:top-0 md:left-65">
            <Image
              src={active}
              alt="active"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Project 1 */}
          <div className="md:w-[350px] w-[360px] h-auto rounded-xl overflow-hidden bg-white md:absolute md:left-170 md:bottom-15 md:h-[500px]">
            <Image
              src={project2}
              alt="project1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project 2 */}
          <div className="md:w-[300px] w-[360px] h-auto rounded-xl overflow-hidden bg-white md:ml-200 relative">
            <Image
              src={project1}
              alt="project2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={leftpic} alt="left decoration" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Works;
