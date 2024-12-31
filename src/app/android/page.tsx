"use client"

import GridBackground from '@/components/ui/GridBackground';
import VideoScroll from '@/components/ui/VideoScroll';
import { Github } from 'lucide-react';

export default function Android() {
  const projects = [
    {
      name: "SafeBite",
      description: [
        "Food allergy detection app built with Kotlin",
        "> Implemented real-time allergen detection using ML",
        "> Created an intuitive UI for quick allergen lookup",
        "> Integrated barcode scanning for packaged foods",
        "> Added community features for sharing safe recipes"
      ],
      github: "https://github.com/swatified/safebite",
      videos: [
        { id: 1, src: "/android-1.mp4" },
        { id: 2, src: "/android-2.mp4" },
        { id: 3, src: "/android-3.mp4" },
        { id: 4, src: "/android-4.mp4" }
      ]
    },
    {
      name: "Project Two",
      description: [
        "Description of second project",
        "> Key feature one",
        "> Key feature two"
      ],
      github: "https://github.com/swatified/verbix",
      videos: [
        { id: 5, src: "/android-5.mp4" },
        { id: 6, src: "/android-6.mp4" },
        { id: 7, src: "/android-7.mp4" },
        { id: 8, src: "/android-8.mp4" },
        { id: 9, src: "/android-9.mp4" }
      ]
    },
    {
      name: "Project Three",
      description: [
        "Description of third project",
        "> Major feature implementation",
        "> Another key feature",
        "> Additional functionality"
      ],
      github: "https://github.com/swatified/androidquiz",
      videos: [
        { id: 10, src: "/android-10.mp4" },
        { id: 11, src: "/android-11.mp4" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <GridBackground />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto pt-20 pb-32">
          {projects.map((project, index) => (
            <div key={index} className="mb-32 last:mb-0">
              {/* Project Header and Description */}
              <div className="px-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-4xl font-bold text-white">{project.name}</h2>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <div className="space-y-2 text-lg text-white/80">
                  {project.description.map((line, i) => (
                    <p 
                      key={i}
                      className={line.startsWith('>') ? 'pl-4 border-l-2 border-white/20' : ''}
                    >
                      {line.startsWith('>') ? line.substring(2) : line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Video Showcase */}
              <VideoScroll videos={project.videos} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}