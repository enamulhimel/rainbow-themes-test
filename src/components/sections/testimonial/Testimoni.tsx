import CommonWrapper from '@/components/common/CommonWrapper'
import React from 'react'
import left from '../../../app/Arrow-Left.png'
import right from '../../../app/Arrow-Right.png'
import image from '../../../../public/images/Image.png'
import image1 from '../../../../public/images/Image1.png'
import image2 from '../../../../public/images/Image2.png'
import image3 from '../../../../public/images/Image3.png'
import image4 from '../../../../public/images/Image4.png'


const Testimoni = () => {
  return (
    <div className="">
        <CommonWrapper>
            <div className='flex flex-row items-center justify-around absolute top-200'>
                <div>
                    <img src={left.src} alt="" />
                </div>
                <div className='flex flex-row'>
                    <img src={image.src} alt="" />
                    <img src={image1.src} alt="" />
                    <img src={image2.src} alt="" />
                    <img src={image3.src} alt="" />
                    <img src={image4.src} alt="" />
                    
                </div>
                <div>
                    <img src={right.src} alt="" />
                </div>
            </div>
        </CommonWrapper>
    </div>
  )
}

export default Testimoni