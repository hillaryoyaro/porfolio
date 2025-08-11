import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaXTwitter ,FaMedium} from 'react-icons/fa6'; // X (Twitter rebrand)
import Link from "next/link";
import React from "react";

const socialData = [
   {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/hillaryoyaro",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://linkedin.com/in/hillaryoyaro", // update to your LinkedIn
  },
  {
    title: "X",
    icon: <FaXTwitter size={20} />,
    link: "https://twitter.com/hillaryoyaroh",
  },
   {
    title: "Medium",
    icon: <FaMedium width={20} height={20} />,
    link: "https://medium.com/@hillaryoyaroh", // replace with your actual Medium
  },
  {
    title: "Instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://instagram.com/hillaryoyaroh", // update this
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
