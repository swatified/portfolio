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
            transition-all duration-500 ease-in-out mt-[3px] transform translate-y-8 
            hover:-translate-y-0
            ${index === arr.length - 1 ? 'last:hover:mt-0' : ''}
          `}
        >
          <Link
            href={item.href}
            className={`
              overflow-hidden rounded-[50px] 
              transition-all duration-500 ease-in-out
              no-underline h-[60px] text-white bg-[#181A1C]
              min-w-[180px] block leading-[60px] w-[80px] 
              hover:min-w-[220px] relative
              group
              ${index === arr.length - 1 ? 'p-0 last:group-hover:w-[60px] last:group-hover:h-[70px] last:group-hover:leading-[70px]' : ''}
            `}
          >
            <span className="
              absolute left-1/2 transform -translate-x-1/2
              transition-all duration-500 ease-in-out
              group-hover:left-8 group-hover:-translate-x-0
            ">
              <item.Icon 
                size={28}
                fill="white"
                stroke="black"
                strokeWidth={1}
                className="translate-y-1/2 transition-colors duration-500 ease-in-out group-hover:fill-blue-400"
              />
            </span>
            {item.text && (
              <span className="
                absolute left-16 opacity-0 
                transition-all duration-500 ease-in-out
                transform translate-x-4
                group-hover:opacity-100 group-hover:translate-x-0
                inline-block align-middle ml-8
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