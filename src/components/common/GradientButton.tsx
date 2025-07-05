// import React from 'react';

// interface GradientButtonProps {
//   onClick: () => void;
//   className?: string;
//   text:string;
// }

// const GradientButton: React.FC<GradientButtonProps> = ({ onClick, className = '',text }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold transition duration-300 hover:from-indigo-600 hover:to-pink-600 ${className}`}
//     >
//       <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//       </svg>
//       {text}
//     </button>
//   );
// };

// export default GradientButton;

import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-normal transition duration-300 hover:from-indigo-600 hover:to-pink-600 ${className}`}
      {...rest}
    >
      <span className="relative z-10">{label || children}</span>
      <div className="absolute inset-0 bg-white opacity-10 blur-2xl rounded-2xl z-0"></div>
    </button>
  );
};

export default GradientButton;