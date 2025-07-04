import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi"

interface CartIconProps {
  count?: number
}

const CartIcon: React.FC<CartIconProps> = ({ count = 0 }) => (
  <div className="relative">
    <PiShoppingCartThin className="text-2xl" />
    <span className="w-4 h-4 p-1 bg-blue-500 rounded-full text-white absolute -top-2 -right-2 flex items-center justify-center text-sm">
      {count.toString().padStart(2, '0')}
    </span>
  </div>
)

export default CartIcon