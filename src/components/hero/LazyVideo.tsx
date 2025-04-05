import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  width: string;
  height: string;
}

const LazyVideo = ({ src }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (videoRef.current) {
      // Use intersection observer to only load video when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              // Set the src only when the video is in view
              videoRef.current.src = src;
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '100px' } // Load a bit before it comes into view
      );
      
      observer.observe(videoRef.current);
      
      return () => {
        if (videoRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, [src]);
  
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative group">
      {!isLoaded && (
        <div className="h-16 w-32 rounded-full bg-white/5 animate-pulse absolute inset-0"></div>
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleLoadedData}
        className={`h-16 w-32 rounded-full object-cover border border-white/10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
        preload="none" // Don't preload video
      />
    </div>
  );
};

export default React.memo(LazyVideo);