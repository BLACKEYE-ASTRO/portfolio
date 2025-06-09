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
  tripguide,
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
      "Developed a modern and responsive frontend for a business solution website using React and Tailwind CSS. The website is designed to provide a seamless user experience, showcasing company services, client testimonials, and an interactive contact section.",
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
      "RelifeAgro Farm is a comprehensive grocery shopping platform that enables users to explore and purchase fresh farm produce online. It offers a wide range of organic and locally sourced items, easy order management, and a smooth checkout experience — all designed to bring farm-fresh quality directly to customers’ doorsteps.",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    preview_link:"",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
