import CommonWrapper from '@/components/common/CommonWrapper'
import GradientButton from '@/components/common/GradientButton'
import React from 'react'
import blur from '../../../app/blur.png'
import clear from '../../../app/clear.png'
import Button from '@/components/common/Button'

const Services = () => {
  return (
    <CommonWrapper>
        <div>
            <div className='flex flex-col items-center justify-center gap-y-5'>
                <GradientButton label='What we do'/>
                <p className='text-5xl font-semibold'>Our Popular Services</p>
            </div>
            <div className='relative pt-10'>
                <div className='absolute w-200 left-50'>
                    <img src={blur.src} alt="" />
                </div>
                <div className='absolute w-220 top-23 left-40'>
                    <img src={blur.src} alt="" />
                </div>
                <div className='absolute w-240 top-35 left-30'>
                    <img src={blur.src} alt="" />
                </div>
                <div className='absolute w-260 top-50 left-20'>
                    <img src={clear.src} alt="" />
                </div>
            </div>
            <div className='pt-140 flex items-center justify-center'>
                <Button label='view all services'/>
            </div>
        </div>
    </CommonWrapper>
  )
}

export default Services

// import React from 'react';

// const Service: React.FC = ({ children }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100">
//       {/* Blurry background images */}
//       <div className="absolute inset-0 flex items-center justify-around opacity-50">
//         <div
//           className="w-1/4 h-3/4 bg-cover bg-center blur-md"
//           style={{ backgroundImage: "url('https://via.placeholder.com/300?text=Blurry+Image+1')" }}
//         ></div>
//         <div
//           className="w-1/4 h-3/4 bg-cover bg-center blur-md"
//           style={{ backgroundImage: "url('https://via.placeholder.com/300?text=Blurry+Image+2')" }}
//         ></div>
//         <div
//           className="w-1/4 h-3/4 bg-cover bg-center blur-md"
//           style={{ backgroundImage: "url('https://via.placeholder.com/300?text=Blurry+Image+3')" }}
//         ></div>
//       </div>
//       {/* Clear foreground image */}
//       <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/400?text=Clear+Image')" }}>
//         <div className="flex flex-col items-start justify-end h-full p-6">
//           <span className="text-purple-500 text-sm">Service - 4</span>
//           <h2 className="text-3xl font-bold text-gray-800">One-to-one Consulting</h2>
//           <p className="text-gray-600 mt-2">Where we specialize in transforming your vision into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.</p>
//           <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded-full">Read Details</button>
//         </div>
//       </div>
//       {/* Content overlay */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// export default Service;