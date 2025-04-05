import React from 'react';

// This component replaces the heavy motion animations with simpler CSS animations
const AnimatedBackground = () => {
  return (
    <>
      {/* Simplified Glow Effects - Using CSS instead of framer-motion */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-fade-in"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-fade-in"></div>
      </div>
      
      {/* Subtle Grid Lines - Static pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
    </>
  );
};

export default React.memo(AnimatedBackground);