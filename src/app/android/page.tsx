"use client"

import GridBackground from '@/components/ui/GridBackground';
import VideoScroll from '@/components/ui/VideoScroll';

export default function Android() {
  const videos = [
    {
      id: 1,
      src: "/android-1.mp4"
    },
    {
      id: 2,
      src: "/android-2.mp4"
    },
    {
      id: 3,
      src: "/android-3.mp4"
    },
    {
      id: 4,
      src: "/android-4.mp4"
    }
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <GridBackground>
        <div className="flex items-center min-h-screen bg-transparent">
          <VideoScroll videos={videos} />
        </div>
      </GridBackground>
    </main>
  );
}