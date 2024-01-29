'use client';
import React, {useState} from 'react';
import { Tabs } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: "/work/3.png",
    category: "Next js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Javascript",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius laboriosam, excepturi rerum commodi ipsam",
    link: "/",
    github: "/",
  },
];
console.log(projectData);


const Projects = () => {
  return (
    <section className='min-h-screen pt-12'>Projects Page</section>
  );
};

export default Projects;