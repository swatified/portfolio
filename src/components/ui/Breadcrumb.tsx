'use client';

import { SmartphoneCharging, GithubIcon, CodeIcon, BrainIcon } from "lucide-react";
import Link from 'next/link';

const Breadcrumb = () => {
  const items = [
    { 
      Icon: BrainIcon, 
      text: "ml projects",
      href: "/ml-projects" 
    },
    { 
      Icon: GithubIcon, 
      text: "open source",
      href: "/open-source" 
    },
    { 
      Icon: CodeIcon, 
      text: "web dev",
      href: "/web-dev" 
    },
    { 
      Icon: SmartphoneCharging, 
      text: "android apps",
      href: "/android" 
    }
  ];

  return (
    <ul className="inline-block ml-[50px] list-none p-0 m-0">
      {items.map((item, index, arr) => (
        <li
          key={index}
          className={`
            float-right p-[6px] bg-black rounded-[50px] relative -ml-[50px]
            max-[768px]:rounded-[10px] max-[640px]:rounded-[10px]
            transition-all duration-500 ease-in-out mt-[3px] transform translate-y-8 
            lg:hover:-translate-y-0 mr-[40%] lg:mr-[0] sm:mr[0] md:mr[0] 
            ${index === arr.length - 1 ? 'last:hover:mt-0' : ''}
          `}
        >
          <Link
            href={item.href}
            className={`
              overflow-hidden rounded-[50px] 
              max-[768px]:rounded-[10px] max-[640px]:rounded-[10px]
              transition-all duration-500 ease-in-out
              no-underline h-[50px] lg:h-[60px] sm:h-[60px] text-white bg-[#181A1C]
              min-w-[180px] lg:min-w-[180px] sm:min-w-[180px] block leading-[60px] w-[80px] 
              lg:hover:min-w-[220px] sm:hover:min-w-[220px] md:hover:min-w-[220px] relative
              group
              ${index === arr.length - 1 ? 'p-0 last:group-hover:w-[60px] last:group-hover:h-[70px] last:group-hover:leading-[70px]' : ''}
            `}
          >
            <span className="
              absolute lg:left-1/2 transform lg:-translate-x-1/2
              transition-all duration-500 ease-in-out
              left-8 -translate-x-0
              lg:group-hover:left-8 lg:group-hover:-translate-x-0
            ">
              <item.Icon 
                size={28}
                fill="white"
                stroke="black"
                strokeWidth={1}
                className="translate-y-1/2 transition-colors duration-500 ease-in-out 
                max-[768px]:fill-blue-400 max-[640px]:fill-blue-400 lg:group-hover:fill-blue-400"
              />
            </span>
            {item.text && (
              <span className="
                absolute left-16 opacity-0 
                max-[768px]:left-12 max-[640px]:left-12
                transition-all duration-500 ease-in-out
                transform translate-x-4
                group-hover:opacity-100 group-hover:translate-x-0
                max-[768px]:opacity-100 max-[640px]:opacity-100
                max-[768px]:translate-x-0 max-[640px]:translate-x-0
                inline-block align-middle ml-8 max-[768px]:text-sm
                max-[640px]:text-sm translate-y-2/3 lg:translate-y-0
              ">
                {item.text}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;