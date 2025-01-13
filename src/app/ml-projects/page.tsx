"use client";

import GridBackground from '@/components/ui/GridBackground';
import Navigation from '@/components/ui/Navigation';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ML() {
  const projects = [
    {
      name: "Weapon Detection System",
      description: [
        "A real-time web app to detect weapons via webcam",
        "> Provides live detection with confidence scoring through a browser interface.",
        "> YOLOv3 Algorithm for real-time weapon detection",
        "> Used Flask for web-interface and OpenCV for video processing"
      ],
      type: 'image',
      src: "/images/weapon.png",
      github: "https://github.com/swatified/Weapon-Detection-System"
    },
    {
      name: "Tour Mitra",
      description: [
        "AI-powered tourism guide",
        "> Sentiment scores for tourist destinations using Roberta Model",
        "> Query tourist destinations for relevant details like entrance fees, reviews, ratings, etc.",
        "> User-friendly web interface made using Flask"
      ],
      type: 'image',
      src: "/images/tour.png",
      github: "https://github.com/learnervaibhav/Tourism-Spots-Assessment-System"
    },
    {
      name: "NoShade API",
      description: [
        "An AI-powered toxic comments analyser",
        "> Advanced sentiment analysis using RoBERTa model with toxicity detection",
        "> Multi-label classification for 6 types of toxic content (Toxic, Severe Toxic, Obscene, Threat, Insult, Identity Hate)",
        "> User-friendly web interface made using Gradio with real-time analysis"
      ],
      type: 'image',
      src: "/images/noshade.png",
      github: "https://github.com/swatified/NoShade_API"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <GridBackground />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="container max-w-[1400px] mx-auto pt-24 pb-32 px-4 md:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div key={index} className="mb-20 last:mb-0 lg:mb-40">
              <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start lg:px-16">
                {/* Project Image */}
                <div className="w-full lg:w-[60%] mb-8 lg:mb-0">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    <Image
                      src={project.src}
                      alt={project.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        project.name === "Tour Mitra" 
                        ? 'scale-125 group-hover:scale-150'
                        : 'scale-110 group-hover:scale-100'
                      }`}
                    />
                    {/* Frame Border */}
                    <div className="absolute inset-0 pointer-events-none z-20">
                      <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-[40%] lg:pt-8">
                  <div className="flex items-center gap-6 mb-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">{project.name}</h2>
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
                  </div>
                  <div className="space-y-3 text-lg lg:text-xl text-white/80">
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
          ))}
        </div>
      </div>
    </div>
  );
}