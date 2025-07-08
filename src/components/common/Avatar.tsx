import Image from 'next/image';
import React from 'react';

interface AvatarGroupProps {
  images: string[];
  extraCount?: number;
  size?: number;
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  images,
  extraCount = 10,
  size = 10,
}) => {
  return (
    <div className="flex -space-x-6 gap-x-2">
      {images.map((src, idx) => (
        <div className="avatar" key={idx}>
          <div className={`w-${size} h-${size}`}>
            <Image
              src={src}
              className="rounded-full object-cover w-[60px] h-[60px]"
              alt={`Avatar ${idx + 1}`}
            />
          </div>
        </div>
      ))}
      {extraCount && extraCount > 0 && (
        <div className="avatar avatar-placeholder">
          <div
            className={`bg-[#FE71B9] text-white w-[60px] h-[60px] flex items-center justify-center rounded-full`}
          >
            <span>+{extraCount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
