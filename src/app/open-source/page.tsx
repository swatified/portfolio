"use client";

import GridBackground from '@/components/ui/GridBackground';
import Navigation from '@/components/ui/Navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OpenSource() {
  const [text, setText] = useState("");
  const fullText = "Work In Progress...";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <GridBackground />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-[80vh] gap-10 lg:gap-20 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-400 mt-32 lg:mt-48 
          -mb-20 lg:-mb-10">
            {text}
            <span className="animate-blink">|</span>
          </h1>
          <div className="relative w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]">
            <Image
              src="/images/wip.gif"
              alt="Work in Progress"
              fill
              className="object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}