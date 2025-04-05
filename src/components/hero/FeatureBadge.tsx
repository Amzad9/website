import React from 'react';

interface FeatureBadgeProps {
  icon: React.ReactNode;
  label: string;
}

// Memoized component to prevent re-renders
const FeatureBadge = React.memo(({ icon, label }: FeatureBadgeProps) => {
  return (
    <div className="feature-badge flex items-center gap-3 text-white bg-white/5 rounded-full px-4 py-2 cursor-pointer hover:bg-white/10">
      {icon}
      <span className="font-medium text-sm md:text-md">{label}</span>
    </div>
  );
});

FeatureBadge.displayName = 'FeatureBadge';

export default FeatureBadge;
