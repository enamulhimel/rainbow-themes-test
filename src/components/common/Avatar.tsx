import React from 'react'

interface AvatarGroupProps {
  images: string[]
  extraCount?: number
  size?: number 
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({ images, extraCount=10, size = 10 }) => {
  return (
    <div className="flex -space-x-6 gap-x-2">
      {images.map((src, idx) => (
        <div className="avatar" key={idx}>
          <div className={`w-${size} h-${size}`}>
            <img src={src} className="rounded-full object-cover w-full h-full" alt={`Avatar ${idx + 1}`} />
          </div>
        </div>
      ))}
      {extraCount && extraCount > 0 && (
        <div className="avatar avatar-placeholder">
          <div className={`bg-[#FE71B9] text-white w-${size} h-${size} flex items-center justify-center rounded-full`}>
            <span>+{extraCount}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AvatarGroup