"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,  

} from "react-icons/ri";

import Link from "next/link";

const icons = [
  { path: "", name: <RiYoutubeFill />  },
  { path: "https://www.linkedin.com/in/dhruv-hothi/", name: <RiLinkedinFill /> },
  { path: "https://github.com/hothidhruv", name: <RiGithubFill /> },
  { path: "https://twitter.com/hothidhruv", name: <RiTwitterFill /> },
  { path: "", name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path}  target={`${icon.path === "" ? "":"_blank" }`}  key={index}>
            <div className={iconsStyles}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
