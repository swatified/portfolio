"use client"

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface Video {
  id: number;
  src: string;
}

interface VideoScrollProps {
  videos: Video[];
}

const VideoScroll = ({ videos }: VideoScrollProps) => {
  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setPlayingStates(
      videos.slice(0, 5).reduce((acc, video) => ({ ...acc, [video.id]: true }), {})
    );
  }, [videos]);

  const togglePlay = (videoId: number, videoElement: HTMLVideoElement) => {
    if (playingStates[videoId]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setPlayingStates(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const displayVideos = videos.slice(0, 5);

  return (
    <div className="relative px-12">
      <div className="flex gap-6 h-[80vh]">
        {displayVideos.map((video) => (
          <div 
            key={video.id}
            className="relative w-[280px] group"
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[2rem]"
              id={`video-${video.id}`}
            />
            
            {/* Play/Pause button with circle background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => togglePlay(video.id, document.getElementById(`video-${video.id}`) as HTMLVideoElement)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-black/50 rounded-full p-4">
                  {playingStates[video.id] ? (
                    <Pause className="w-12 h-12 text-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Phone frame overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] ring-1 ring-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoScroll;