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
      name: "Connectable",
      description: [
        "A chatroom with all modern features sewed together!",
        "> Implemented Web Sockets and MongoDB",
        "> Text-decorations, Media rendering, Voice Recording, etc.",
        "> Saved Messages and Clear Chat helps to keep Database manageable",
        "> Twilio and Tenor APIs to make chatting fun thru Notifications and GIF!!"
      ],
      type: 'image',
      src: "/images/connectable.png",
      github: "https://github.com/swatified/connectable"
    },
    {
      name: "Pet Adoption Platform",
      description: [
        "A fully functional website made using Webflow",
        "> Multi-sectioned Landing Page with seamless animations",
        "> Blog page made using Content Management System (CMS)"
      ],
      type: 'video',
      src: "/videos/petadoption.mp4",
      live: "https://pet-adoption-project-by-swati.webflow.io/"
    },
    {
      name: "GDG Community Platform",
      description: [
        "Aimed to provide a customizable and visually appealing space for students",
        "> Dynamic Events Section to stay updated with upcoming events",
        "> Community Gallery and Team Introduction"
      ],
      type: 'image',
      src: "/images/gdg.png",
      github: "https://github.com/swatified/gdg-community-platform",
      live: "https://www.gdgdronacharya.online/",
      reverse: true
    },
    {
      name: "Family Travel Tracker",
      description: [
        "> A Web App that visualizes your family's travels on a Dynamic World Map.",
        "> With just a few clicks, users can add members, select colors, and mark off countries from their travel lists. (Made using EJS and PostgreSQL)"
      ],
      type: 'image',
      src: "/images/family.png",
      github: "https://github.com/yourusername/healthcare",
      live: "https://healthcare.demo.com",
    },
    {
      name: "404 Fun",
      description: [
        "> This innovative idea transforms boring 404 error pages into a source of entertainment",
        "> Thus adding value to both users and website owners alike. (as it boosts engagement)",
        "> Fresh Facts, Jokes and Poems with each Refresh!"
      ],
      type: 'video',
      src: "/videos/404.mp4",
      github: "https://github.com/swatified/404-Fun",
      live: "https://404web.pythonanywhere.com/"
    },
    {
      name: "Healthcare Webpage",
      description: [
        "> Just a quick Landing Page I made during a Web-Design competition"
      ],
      type: 'image',
      src: "/images/healthcare.png",
      github: "https://github.com/swatified/healthcare",
      live: "https://swatified.github.io/healthcare/",
      reverse: true
    },
    {
      name: "The Lending Library",
      description: [
        "> A book landing platform for university students to earn and help each other!",
        "> Made using HTML, CSS, and Javascript for a friend's business idea"
      ],
      type: 'image',
      src: "/images/lending.png",
      github: "https://github.com/swatified/The-Lending-Library",
      live: "https://swatified.github.io/The-Lending-Library/"
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
                        {project.github && (
                          <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                          >
                            <Github size={28} />
                            </a>
                          )}
                          {project.live && (
                            <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="text-white/70 hover:text-white transition-colors"
                            >
                              <ExternalLink size={28} />
                              </a>
                            )}
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