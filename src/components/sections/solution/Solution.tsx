import CommonWrapper from '@/components/common/CommonWrapper'
import woman from '../../../app/woman.png'
import group from '../../../app/Mask-group.png'
import ceo from '../../../app/CEO.png'
import circle from '../../../app/Comapny-Experience.png'
import { GoDotFill } from "react-icons/go";

import React from 'react'
import GradientButton from '@/components/common/GradientButton'
import Button from '@/components/common/Button'
import StatsRow from '@/components/common/StatsRow'

const Solution = () => {
  return (
    <CommonWrapper>
        <div>
            <div className='flex flex-col w-full md:flex-row pb-20'>
                <div className='relative w-1/2 '>
                    <img src={woman.src} alt="" />
                    <img src={group.src} alt="" className='absolute -bottom-10 left-70'/>
                    <img src={circle.src} alt="" className='absolute bottom-80 left-90' />
                </div>
                <div className='w-1/2'>
                    <GradientButton label='Know about us'/>
                    <p className='text-5xl font-semibold pt-3'>All-in-one web solution <br /> for your business</p>
                    <p className='text-sm font-normal text-[#838A95] pt-3'>We are creative agency, we are here to helping your business <br /> growth consectetur adipiscing.</p>
                    <ul className='py-5'>
                        <li className='flex flex-row pt-2 '><GoDotFill />There are many variations of passages available</li>
                        <li className='flex flex-row pt-2'><GoDotFill />Majority have suffered alteration in some form</li>
                        <li className='flex flex-row pt-2'><GoDotFill />Contrary to popular belief is not simply random</li>
                    </ul>
                    <div className='py-5 flex flex-row'>
                        <Button label='More about us'/>
                        <img src={ceo.src} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <StatsRow/>
            </div>
        </div>
    </CommonWrapper>
  )
}

export default Solution