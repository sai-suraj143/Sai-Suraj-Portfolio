import { Project } from "../types";
import Agora from "/Agora.png";
import intelli from "/Intelli-prep.png"
import codelogic from "/Code-Logic.png"
import cad from "/Cadberry-gifts.png"
import todo from "/to-do.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "Agora-Blockchain",
    description:
      "A decentralized voting platform leveraging blockchain technology to ensure immutable, transparent, and secure election results.",
    category: ["Web App", "AI"],
    image:
      Agora,
    tags: [
      "AI",
      "Machine Learning",
      "Prediction",
      "Classification",
      "Blockchain",
      
    ],
    // link: "https://sai-suraj143.github.io/to-do-App/",
    github: "https://github.com/sai-suraj143/Agora-Blockchain.git",
  },
  {
    id: 2,
    title: "Intelli-Prep",
    description:
      "An AI-powered interview preparation tool designed to provide personalized mock interviews and real-time feedback for job seekers.",
    category: ["Web App"],
    image: intelli,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Render",
      "Tailwind CSS",
      "Web Development",
    ],
    link: "https://intelli-prep-iota.vercel.app/",
    github: "https://github.com/sai-suraj143/Intelli-Prep.git",
  },
  {
    id: 3,
    title: "Web-Scan-Pro",
    description:
      "A comprehensive vulnerability scanner that identifies security flaws and performance bottlenecks in web applications.",
    category: ["Web App", "AI"],
    image:
      Agora,
    tags: [
      "Flask",
      "Python",
      "Data Visualization",
    ],
    // link: "",
    github: "https://github.com/sai-suraj143/web-scan-pro.git",
  },
  {
    id: 4,
    title: "CodeLogic-Tutor",
    description:
      "An interactive learning assistant that helps students master programming logic and data structures through guided coding challenges.",
    category: ["Web App", "UI/UX"],
    image: codelogic,
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "WhatsApp API"],
    link: "https://codelogic-tutor.onrender.com/",
    github: "https://github.com/sai-suraj143/CodeLogic_Tutor.git",
  },
  {
    id: 5,
    title: "Cadberry-Gifts",
    description:
      "A creative e-commerce platform specializing in personalized gift recommendations and seamless digital gifting experiences.",
    category: ["Web App", "AI"],
    image: cad,
    tags: [
      "Html",
      "Css",
      "Js",
      "Web Development",
    ],
    link: "https://sai-suraj143.github.io/cadberry.gifts/",
    github: "https://github.com/sai-suraj143/cadberry.gifts.git",
  },
  {
    id: 6,
    title: "To-Do-App",
    description:
      "A streamlined task management application focused on productivity, featuring intuitive UI for organizing daily workflows and goals.",
    category: ["Web App", "UI/UX"],
    image: todo,
    tags: ["React", "Node.js", "Tailwind CSS", "Spotify API", "Firebase"],
    link: "https://sai-suraj143.github.io/to-do-App/",
    github: "https://github.com/sai-suraj143/to-do-App.git",
  },
  // {
  //   id: 7,
  //   title: "Financial Agent - Personal Finance Assistant",
  //   description:
  //     "AI-powered platform to manage finances, track spending, and offer investment advice.",
  //   category: ["AI"],
  //   image: financial_Agent,
  //   tags: ["AI", "Finance", "Machine Learning", "Python", "API Integration"],
  //   github: "https://github.com/manitejagaddam/FinTech",
  // },
  // {
  //   id: 8,
  //   title: "AgriMart - Connecting Farmers and Buyers",
  //   description:
  //     "Marketplace app connecting farmers with buyers for fresh produce transactions.",
  //   category: ["AI"],
  //   image:
  //     agrimrt,
  //   tags: [
  //     "Marketplace",
  //     "Agriculture",
  //     "Mobile App",
  //     "Secure Payment",
  //     "Real-Time Listings",
  //     "AI",
  //     "Machine Learning",
  //     "Recommendation",
  //   ],
  //   github: "https://github.com/manitejagaddam/AgriMarket ",
  // },
  // {
  //   id: 9,
  //   title: "Interactive Learning Board for Kids",
  //   description:
  //     "Educational IoT board with capacitive touch and sound feedback for teaching children.",
  //   category: ["IoT"],
  //   image:
  //     iot,
  //   tags: ["IoT", "ESP32", "Capacitive Touch", "Education", "Hardware"],
  //   // github: "https://github.com/manitejagaddam/IoT-Interactive-Board",
  // },
];
