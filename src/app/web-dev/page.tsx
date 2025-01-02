"use client"

import GridBackground from '@/components/ui/GridBackground';
import Navigation from '@/components/ui/Navigation';
import DesktopVideo from '@/components/ui/DesktopVideo';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { reverse } from 'dns';

export default function Web() {
  const projects = [
    {
      name: "Global Data Visualization",
      description: [
        "Interactive world map data visualization platform",
        "> Real-time country statistics and metrics",
        "> Dynamic color-coded visualization",
        "> Responsive design for multiple devices"
      ],
      type: 'image',
      src: "/images/connectable.png",
      github: "https://github.com/yourusername/global-viz",
      live: "https://global-viz.demo.com"
    },
    {
      name: "Pet Adoption Platform",
      description: [
        "Modern pet adoption interface",
        "> Seamless pet browsing experience",
        "> Interactive pet profiles",
        "> Real-time availability updates"
      ],
      type: 'video',
      src: "/videos/petadoption.mp4",
      github: "https://github.com/yourusername/pet-adoption",
      live: "https://pet-adoption.demo.com"
    },
    {
      name: "Chat Application",
      description: [
        "Real-time messaging platform",
        "> Instant message synchronization",
        "> Cross-platform compatibility",
        "> Dark mode interface"
      ],
      type: 'image',
      src: "/images/gdg.png",
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app.demo.com",
      reverse: true
    },
    {
      name: "Healthcare Portal",
      description: [
        "Modern healthcare service platform",
        "> Patient-centric service dashboard",
        "> Seamless appointment scheduling",
        "> Responsive across all devices"
      ],
      type: 'image',
      src: "/images/family.png",
      github: "https://github.com/yourusername/healthcare",
      live: "https://healthcare.demo.com",
    },
    {
      name: "404 Project",
      description: [
        "Interactive Error Page Design",
        "> Custom animation and interactions",
        "> Engaging user experience",
        "> Responsive layout across devices"
      ],
      type: 'video',
      src: "/videos/404.mp4",
      github: "https://github.com/yourusername/404-project",
      live: "https://404.demo.com"
    },
    {
      name: "GDG On Campus",
      description: [
        "Educational collaboration platform",
        "> Interactive learning resources",
        "> Cross-device accessibility",
        "> Community engagement features"
      ],
      type: 'image',
      src: "/images/healthcare.png",
      github: "https://github.com/yourusername/gdg-campus",
      live: "https://gdg-campus.demo.com",
      reverse: true
    },
    {
      name: "GDG On Campus",
      description: [
        "Educational collaboration platform",
        "> Interactive learning resources",
        "> Cross-device accessibility",
        "> Community engagement features"
      ],
      type: 'image',
      src: "/images/lending.png",
      github: "https://github.com/yourusername/gdg-campus",
      live: "https://gdg-campus.demo.com"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <GridBackground />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="container max-w-[1400px] mx-auto pt-24 pb-32">
          {projects.map((project, index) => {
            // Only apply reverse layout for image projects that have reverse:true
            const shouldReverse = project.type === 'image' && project.reverse;
            
            return (
              <div key={index} className="mb-40 last:mb-0">
                <div className={`px-16 flex gap-16 items-start ${shouldReverse ? 'flex-row-reverse' : ''}`}>
                  {/* Project Media (Image or Video) */}
                  <div className="w-[60%]">
                    {project.type === 'image' ? (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                        <Image
                          src={project.src}
                          alt={project.name}
                          fill
                          className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                        />
                        {/* Frame Border */}
                        <div className="absolute inset-0 pointer-events-none z-20">
                          <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 shadow-lg" />
                        </div>
                      </div>
                    ) : (
                      <DesktopVideo videoSrc={project.src} />
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="w-[40%] pt-8">
                    <div className="flex items-center gap-6 mb-8">
                      <h2 className="text-5xl font-bold text-white">{project.name}</h2>
                      <div className="flex gap-5">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <Github size={28} />
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <ExternalLink size={28} />
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3 text-xl text-white/80">
                      {project.description.map((line, i) => (
                        <p 
                          key={i}
                          className={line.startsWith('>') ? 'pl-6 border-l-2 border-white/20' : ''}
                        >
                          {line.startsWith('>') ? line.substring(2) : line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}