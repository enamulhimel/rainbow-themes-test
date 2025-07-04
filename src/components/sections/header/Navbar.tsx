import CommonWrapper from '@/components/common/CommonWrapper'
import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    const categorys = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Services" },
        { id: 4, name: "Pages" },
        { id: 5, name: "News" },
        { id: 6, name: "Contact" },
    ];
  return (
    <CommonWrapper>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 p-4 text-gray-500 bg-gray-100 rounded-lg shadow-md w-full'>
            <div className='flex items-center justify-between gap-4 p-4 text-4xl'>
                <VscThreeBars />
                <p>|</p>
                <div>
                    <PiShoppingCartThin className='relative '/>
                    <p className='w-6 h-6 bg-blue-500 rounded-full text-white absolute p-1 text-center text-sm'>02</p>
                </div>
                <p>|</p>
                <GoSearch />
            </div>
                <div className='flex items-center justify-between gap-4 p-4 text-2xl'>
                    {
                        categorys.map((category) => (
                            <p key={category.id} className='hover:text-blue-500 cursor-pointer'>{category.name}</p>
                        ))
                    }
                </div>
                <div>
                    <button className='bg-blue-500 text-white rounded-md px-2 py-3'>Get a free quote</button>
                </div>
            
        </div>
    </CommonWrapper>
  )
}

export default Navbar