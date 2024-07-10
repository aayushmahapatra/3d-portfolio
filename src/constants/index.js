import { brady, higradez, spheron } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web3 Full Stack Developer",
    company_name: "Spheron Network",
    icon: spheron,
    iconBg: "#accbe1",
    date: "March 2022 - May 2024",
    points: [
      "Collaborate with backend team to design, build, and maintain API endpoints that support critical application logic.",
      "Diagnose and troubleshoot issues in the production environment, working closely with senior engineers to find effective solutions.",
      "Built diverse use cases, including microservices, bots, and frontend apps, to illustrate the versatility and scalability of compute solutions.",
      "Led the successful development and launch of an open-source application.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Brady Corporation",
    icon: brady,
    iconBg: "#bcc3fb",
    date: "Nov 2021 - Apr 2022",
    points: [
      "Worked closely with the product managers, infrastructure and development teams to help deliver innovative solutions.",
      "Helped improve the quality of website by performing code reviews.",
      "Delivered quality code by applying sound development practices, leveraging test driven development methodology and automation.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "HiGradez",
    icon: higradez,
    iconBg: "#b7e4c7",
    date: "Jan 2021 - Nov 2021",
    points: [
      "Worked with the core team of 5 developers and designers.",
      "Collaborated with marketing and project management teams to deliver projects on-time and with the highest standard, retaining over 98% of clients.",
      "Reduced page loading time by 76% by pre-loading and caching  pages.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/aayushmahapatra",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aayush-mahapatra",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-pink",
    name: "Buidlfy",
    description:
      "Developed a no-code tool for building decentralized applications.",
    link: "https://github.com/buidlfyHq/buidlfy",
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: "Wordle Clone",
    description:
      'Created a full-stack replica of the word guessing game "Wordle," that we all know and love.',
    link: "https://github.com/aayushmahapatra/next-wordle",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Micrograd",
    description:
      "Built a tiny scalar-valued Autograd engine and a Neural Net library on top of it with PyTorch-like API.",
    link: "https://github.com/aayushmahapatra/micrograd",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "Deliveroo Clone",
    description:
      "Created a UI clone of Deliveroo which is a British online food delivery company, with ReactNative and Sanity.",
    link: "https://github.com/aayushmahapatra/deliveroo-clone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "GUN Chat",
    description: "Developed a decentralized chat application.",
    link: "https://github.com/aayushmahapatra/GunChat",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "SpheronSYNC",
    description:
      "Tool built specifically to facilitate the seamless migration of your data from one IPFS provider to Spheron without the need for complex configurations.",
    link: "https://github.com/aayushmahapatra/spheron-sync",
  },
];
