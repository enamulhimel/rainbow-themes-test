import CommonWrapper from '@/components/common/CommonWrapper'
import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";
import CartIcon from '@/components/common/CartIcon';
import Button from '@/components/common/Button';

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
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 rounded-md w-full px-2 py-3">
                {/* Left: Hamburger, Cart, Search */}
                <div className="flex items-center gap-4 text-2xl w-full md:w-auto justify-between cursor-pointer md:justify-start">
                    <button className="md:hidden">
                        <VscThreeBars />
                    </button>
                    <div className="hidden md:block">
                        <VscThreeBars />
                    </div>
                    <span className="hidden md:block">|</span>
                    <CartIcon count={3} />
                    <span className="hidden md:block">|</span>
                    <GoSearch />
                </div>
                {/* Center: Menu */}
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-xl">
                    {categorys.map((category) => (
                        <p
                            key={category.id}
                            className="hover:text-blue-500 cursor-pointer px-2 py-1"
                        >
                            {category.name}
                        </p>
                    ))}
                </div>
                {/* Right: Button */}
                <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
                    <Button label='Get a free quote'/>
                </div>
            </div>
        </CommonWrapper>
    )
}

export default Navbar