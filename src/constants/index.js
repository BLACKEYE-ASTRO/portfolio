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
      "Built a responsive business website featuring service highlights, client testimonials, and an interactive contact form for a smooth user experience.",
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
    preview_link:"https://lookingupbusinesssolutions.com",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/LookingUpPortfolioWeb",
  },
  {
    name: "RelifeAgro Farm",
    description:
      "RelifeAgro Farm is an online grocery platform offering fresh farm produce, organic items, and locally sourced goods. It ensures easy browsing, smooth checkout, and doorstep delivery for a farm-fresh experience.",
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
    ],
    image: relifeagro_farm,
    preview_link:"https://relife-agro-farm-ecommerce.vercel.app",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/RelifeAgroFarm-Ecommerce",
  },
  {
    name: "Sticky Chat",
    description:
      "A real-time chat web application that allows users to send text and image messages, enabling seamless and interactive communication in a modern, user-friendly interface.",
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
    ],
    image: stickychat,
    preview_link:"https://sticky-chats.vercel.app",
    source_code_link: "https://github.com/BLACKEYE-ASTRO/Sticky-Chats",
  },
];

export { services, technologies, projects };
