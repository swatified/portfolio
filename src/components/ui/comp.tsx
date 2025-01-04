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
    <ul className="
      inline-block
      mb-[-60%] 
      mt-[110%]
      lg:mb[0]
      lg:mt[0]
      mr-[20%]
      ml-[50px] 
      max-[768px]:ml-[30px] 
      max-[640px]:ml-[20px] 
      list-none p-0 m-0
    ">
      {items.map((item, index, arr) => (
        <li
          key={index}
          className={`
            float-right 
            p-[6px] 
            max-[768px]:p-[4px] 
            max-[640px]:p-[3px] 
            bg-black 
            rounded-[50px] 
            relative 
            -ml-[50px]
            max-[768px]:-ml-[35px]
            max-[640px]:-ml-[25px]
            transition-all duration-500 ease-in-out 
            mt-[3px]
            transform translate-y-8 
            hover:-translate-y-0
            ${index === arr.length - 1 ? 'last:hover:mt-0' : ''}
          `}
        >
          <Link
            href={item.href}
            className={`
              overflow-hidden 
              rounded-[50px] 
              transition-all duration-500 ease-in-out
              no-underline 
              h-[60px] 
              max-[768px]:h-[50px] 
              max-[640px]:h-[40px] 
              text-white 
              bg-[#181A1C]
              min-w-[180px] 
              max-[768px]:min-w-[150px] 
              max-[640px]:min-w-[120px] 
              block 
              leading-[60px]
              max-[768px]:leading-[50px]
              max-[640px]:leading-[40px]
              w-[80px] 
              max-[768px]:w-[70px]
              max-[640px]:w-[60px]
              hover:min-w-[220px]
              max-[768px]:hover:min-w-[180px]
              max-[640px]:hover:min-w-[140px]
              relative
              group
              ${index === arr.length - 1 ? 'p-0 last:group-hover:w-[60px] last:group-hover:h-[70px] last:group-hover:leading-[70px]' : ''}
            `}
          >
            <span className="
              absolute left-1/2 transform -translate-x-1/2
              transition-all duration-500 ease-in-out
              group-hover:left-8 
              max-[768px]:group-hover:left-6
              max-[640px]:group-hover:left-4
              group-hover:-translate-x-0
            ">
              <item.Icon 
                size={28}
                className="
                  translate-y-1/4
                  lg:translate-y-1/2 
                  max-[768px]:scale-90
                  max-[640px]:scale-90
                  transition-colors duration-500 ease-in-out 
                  group-hover:fill-blue-400
                "
                fill="white"
                stroke="black"
                strokeWidth={1}
              />
            </span>
            {item.text && (
              <span className="
                absolute 
                left-16
                max-[768px]:left-14
                max-[640px]:left-12
                opacity-0 
                transition-all duration-500 ease-in-out
                transform translate-x-4
                translate-y-2/3
                lg:translate-y-0
                group-hover:opacity-100 
                group-hover:translate-x-0
                inline-block align-middle 
                ml-8
                max-[768px]:ml-6
                max-[640px]:ml-4
                max-[768px]:text-sm
                max-[640px]:text-xs
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