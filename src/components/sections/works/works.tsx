import React from 'react'
import bedge from '../../../app/Badge.png'
import CommonWrapper from '@/components/common/CommonWrapper'
import left from '../../../app/Arrow-Left.png'
import right from '../../../app/Arrow-Right.png'
import active from '../../../app/active-project.png'
import project1 from '../../../app/Project1.png'
import project2 from '../../../app/Project2.png'
import rightpic from '../../../app/right-pic.png'
import leftpic from '../../../app/left-pic.png'

const Works = () => {
  return (
    <div>
    <CommonWrapper>
        <div className='flex flex-col md:flex-row'>
            <div>
                <img src={bedge.src} alt="" />
            </div>
            <div>
                <p className='pl-100 text-9xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text opacity-20'>Recent</p>
                <p className='pl-150 text-9xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text opacity-20'>Works</p>
            </div>
            <div className='pl-5 pt-20'>
                <p className='text-sm font-normal text-[#838A95]'>Ready to transform your hard work into <br /> a thriving, stress-free business?</p>
                <div className='pt-5 flex flex-row'>
                    <img src={left.src} alt="" />
                    <img src={right.src} alt="" />
                </div>
            </div>
        </div>
    </CommonWrapper>
    <div className='relative flex flex-row justify-between px-16'>
        <div className='absolute -left-5 top-30'>
            <img src={rightpic.src} alt="" />
        </div>
        <div className='flex flex-col md:flex-row'>
            <img src={project1.src} alt="" className='absolute top-35 left-280' />
            <img src={project2.src} alt="" className='absolute top-18 left-180'/>
            <img src={active.src} alt="" className='absolute left-50' />
            
        </div>
        <div className='absolute -right-5 top-30'>
            <img src={leftpic.src} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Works