'use client';

import GridBackground from '@/components/ui/GridBackground';
import { Cover } from '@/components/ui/cover';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="dark">
      <main>
        <GridBackground>
          {/* Content Container */}
          <div className="flex flex-col items-center relative w-full max-w-7xl mx-auto px-4">
            {/* Title */}
            <div className="ml-[20%]">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Hi, I'm Swati Sharma.
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                I craft digital experiences with <Cover>code & creativity</Cover>
              </h1>
            </div>

            {/* Container for image and breadcrumb */}
            <div className="flex items-center justify-center w-full relative">
              {/* Cloud Image */}
              <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <Image 
                  src="/images/purpleclouds.png"
                  alt="Purple Clouds"
                  width={400}
                  height={400}
                  priority
                  className="select-none pointer-events-none"
                />
              </div>

              {/* Breadcrumb - with left margin to avoid cloud */}
              <div className="ml-[300px]">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </GridBackground>
      </main>
    </div>
  );
}