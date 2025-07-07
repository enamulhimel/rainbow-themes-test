import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  isActive = false,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 ${className} ${
        isActive
          ? 'border-t-4 border-blue-600'
          : 'border-t-4 border-transparent'
      }`}
    >
      <span className="text-5xl font-bold text-gray-800">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
};

const StatsRow: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-20 md:w-full max-w-4xl ">
      <StatsCard value="99%" label="Business Strategy" isActive={true} />
      <StatsCard value="80%" label="Targeted Acquisition" />
      <StatsCard value="62K+" label="Complete Projects" />
      <StatsCard value="15K+" label="Happy Customers" />
      <StatsCard value="100+" label="Consultant Advisors" />
    </div>
  );
};

export default StatsRow;
