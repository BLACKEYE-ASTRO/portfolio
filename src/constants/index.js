import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  relifeagro_farm,
  stickychat,
  threejs,
  looking,
  swiftai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Enthusiast",
    icon: backend,
  },
  {
    title: "Interactive Web Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const projects = [
  {
    name: "LookingUp Business Solutions ",
    description:
      "A modern, responsive business website designed to highlight key services, display client testimonials, and offer an interactive contact experience. The platform ensures easy navigation, clean visuals, and a professional layout to build credibility and engage potential clients effectively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: looking,
    preview_link: "https://lookingupbusinesssolutions.com",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/LookingUpPortfolioWeb",
  },
  {
    name: "RelifeAgro Farm",
    description:
      "An e-commerce web app for fresh farm produce, organic items, and local goods. Features include category filtering, cart system, user-friendly product exploration, and smooth checkout flow. It enables users to experience a farm-fresh grocery experience with doorstep delivery, enhancing rural-to-urban accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "orange-text-gradient"
      },
    ],
    image: relifeagro_farm,
    preview_link: "https://relife-agro-farm-ecommerce.vercel.app",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/RelifeAgroFarm-Ecommerce",
  },
  {
    name: "Sticky Chat",
    description:
      "A full-stack real-time chat application that supports instant messaging with text and images. Built using Socket.IO for real-time communication and MongoDB for message storage, it offers a smooth, modern UI that delivers a seamless chatting experience across devices with high responsiveness and data syncing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "purple-text-gradient",
      },
    ],
    image: stickychat,
    preview_link: "https://sticky-chats.vercel.app",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/Sticky-Chats",
  },
  {
    name: "Swift AI",
    description:
      "An AI-powered content generation platform that allows users to create articles, blog titles, and images. It also includes background and object removal tools, resume review functionality, and a vibrant community tab for discovering and sharing AI-generated content, all within a fast, intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      { 
        name: "gemini",
        color: "purple-text-gradient" 
      },
    ],
    image: swiftai,
    preview_link: "https://swift-ai-sigma.vercel.app",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/swift-ai",
  },
];

export { services, technologies, projects };
