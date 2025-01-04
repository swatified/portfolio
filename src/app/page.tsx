'use client';

import GridBackground from '@/components/ui/GridBackground';
import { Cover } from '@/components/ui/cover';
import Navigation from '@/components/ui/Navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="dark">
      <main>
        <GridBackground>
          {/* Navigation at the top */}
          <Navigation />
          
          {/* Content Container */}
          <div className="flex flex-col items-center relative w-full max-w-7xl mx-auto px-4">
            {/* Title */}
            <div className="ml-[14%] lg:ml-[28%] sm:ml-[12%] -translate-y-1/4 lg:-translate-y-1/4 sm:-translate-y-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight relative z-20 py-6 text-neutral-500 mt-[-8vh] lg:mt-[0] sm:mt-[0]">
                Hi, I am Swati Sharma.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mt-[-8%] lg:mt-[0%] sm:mt-[-4%]">
                I craft digital experiences with <Cover>code and creativity</Cover>
              </h1>
            </div>

            {/* Container for image and breadcrumb */}
            <div className="flex items-center justify-center w-full relative">
              {/* Cloud Image */}
              <div className="absolute left-0 -translate-x-[60px] lg:-translate-x-1/4 top-1/2 -translate-y-1/3 lg:-translate-y-1/2">
                <Image 
                  src="/images/purpleclouds.png"
                  alt="Purple Clouds"
                  width={400}
                  height={400}
                  priority
                  className="select-none pointer-events-none w-[280px] sm:w-[320px] lg:w-[400px] "
                />
              </div>

              {/* Breadcrumb - with left margin to avoid cloud */}
              <div className="ml-[300px] max-[768px]:mt-[4%] max-[640px]:mt-[4%] -translate-y-1/4 lg:-translate-y-3/4 sm:-translate-y-1/4">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </GridBackground>
      </main>
    </div>
  );
}