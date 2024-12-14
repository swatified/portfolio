import { SmartphoneCharging, GithubIcon, CodeIcon, BrainIcon } from "lucide-react";

const Breadcrumb = () => {
  return (
    <ul className="inline-block ml-[50px] list-none p-0 m-0">
      {[
        { Icon: BrainIcon, text: "ml projects" },
        { Icon: GithubIcon, text: "open source" },
        { Icon: CodeIcon, text: "web dev" },
        { Icon: SmartphoneCharging, text: "android apps" }
      ].map((item, index, arr) => (
        <li
          key={index}
          className={`
            float-right p-[5px] bg-black rounded-[50px] relative -ml-[50px]
            transition-all duration-200 mt-[3px]
            ${index === arr.length - 1 ? 'last:hover:mt-0' : ''}
          `}
        >
          <a
            href="#"
            className={`
              overflow-hidden rounded-[50px] transition-all duration-200
              no-underline h-[50px] text-white bg-[#181A1C] text-center
              min-w-[150px] block leading-[50px] w-[50px]
              hover:w-[250px] hover:bg-[#0C0F13]
              group
              ${index === arr.length - 1 ? 'p-0 last:group-hover:w-[60px] last:group-hover:h-[60px] last:group-hover:leading-[60px]' : 'pl-[60px] pr-[22px]'}
            `}
          >
            <span className="inline-block align-middle">
              <item.Icon
                size={24}  
                fill="white"
                stroke="black"
                strokeWidth={1}
              />
            </span>
            {item.text && (
              <span className="hidden opacity-0 group-hover:inline-block group-hover:opacity-100 ml-4 translate-y--4 align-middle">
                {item.text}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;