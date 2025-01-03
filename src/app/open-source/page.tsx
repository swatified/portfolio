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
 <div className="flex flex-col items-center justify-center h-[80vh] gap-20">
   <h1 className="text-5xl font-bold text-gray-400 mt-48 -mb-10">
     {text}
     <span className="animate-blink">|</span>
   </h1>
   <div className="relative w-[600px] h-[600px]">
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