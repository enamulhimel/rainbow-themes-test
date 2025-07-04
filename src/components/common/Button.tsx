// components/GradientButton.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3C6FD1] to-[#627DFF] text-white text-lg font-semibold px-6 py-3 shadow-lg ${className}`}
      {...rest}
    >
      <span className="relative z-10">{label || children}</span>
      <div className="absolute inset-0 bg-white opacity-10 blur-2xl rounded-2xl z-0"></div>
    </button>
  );
};

export default Button;
