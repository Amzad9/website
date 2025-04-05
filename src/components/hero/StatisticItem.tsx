import React from 'react';

interface StatisticItemProps {
  value: string;
  label: string;
}

// Memoized to prevent re-renders
const StatisticItem = React.memo(({ value, label }: StatisticItemProps) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1E6FD9] to-[#DAA520]">
        {value}
      </p>
      <p className="text-xs md:text-sm text-white/50">{label}</p>
    </div>
  );
});

StatisticItem.displayName = 'StatisticItem';

export default StatisticItem;