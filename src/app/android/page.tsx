"use client"

import GridBackground from '@/components/ui/GridBackground';
import VideoScroll from '@/components/ui/VideoScroll';
import Navigation from '@/components/ui/Navigation';
import { Github } from 'lucide-react';

export default function Android() {
  const projects = [
    {
      name: "SafeBite",
      description: [
        "Recipe App for people with food intolerances",
        "> OTP verification and Google Sign-In for Authentication",
        "> Created an intuitive UI for quick allergen lookup",
        "> Alternative recipes with same nutrition and taste",
        "> A rich database of 5000+ Recipes",
      ],
      github: "https://github.com/swatified/safebite",
      videos: [
        { id: 1, src: "/videos/android-1.mp4" },
        { id: 2, src: "/videos/android-2.mp4" },
        { id: 3, src: "/videos/android-3.mp4" },
        { id: 4, src: "/videos/android-4.mp4" }
      ]
    },
    {
      name: "Verbix",
      description: [
        "Learning app for children with Dyslexia",
        "> Writing and speech disability PATTERN RECOGNITION",
        "> Curated writing and speech word-formation exercises"
      ],
      github: "https://github.com/swatified/verbix",
      videos: [
        { id: 5, src: "/videos/android-5.mp4" },
        { id: 6, src: "/videos/android-6.mp4" },
        { id: 7, src: "/videos/android-7.mp4" },
        { id: 8, src: "/videos/android-8.mp4" },
        { id: 9, src: "/videos/android-9.mp4" }
      ]
    },
    {
      name: "Android Quiz App",
      description: [
        "> A Christmas-themed Android quiz application",
        "> Made as an Android lead at GDG-On Campus (to take STUDENTS' FOLLOW-UP after my session)"
      ],
      github: "https://github.com/swatified/androidquiz",
      videos: [
        { id: 10, src: "/videos/android-10.mp4" },
        { id: 11, src: "/videos/android-11.mp4" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <GridBackground/>
      </div>
      <div className="relative z-10">
        <Navigation />
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