"use client"

import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoProps {
  videoSrc: string;
}

const DesktopVideo = ({ videoSrc }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <div className="relative max-w-[1200px] mx-auto">
        {/* Video Container */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110 transform transition-transform duration-700"
          />
          
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={togglePlay}
              className="transform transition-transform duration-300 hover:scale-110 p-10"
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-8">
                {isPlaying ? (
                  <Pause className="w-20 h-20 text-white" />
                ) : (
                  <Play className="w-20 h-20 text-white" />
                )}
              </div>
            </button>
          </div>
          
          {/* Frame Border */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVideo;