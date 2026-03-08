import { Project } from "../types";
import Agora from "/Agora.png";
import intelli from "/Intelli-prep.png"
import codelogic from "/Code-Logic.png"
import resume from "/ResumeSync.png"
import blank from "/blankscreen.jpeg"


export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Agora-Blockchain",
  //   description:
  //     "A decentralized voting platform leveraging blockchain technology to ensure immutable, transparent, and secure election results.",
  //   category: ["Web App", "AI"],
  //   image:
  //     Agora,
  //   tags: [
  //     "AI",
  //     "Machine Learning",
  //     "Prediction",
  //     "Classification",
  //     "Blockchain",
      
  //   ],
  //   // link: "https://sai-suraj143.github.io/to-do-App/",
  //   github: "https://github.com/sai-suraj143/Agora-Blockchain.git",
  // },
  {
    id: 1,
    title: "Resume-Sync",
    description: "Pitched and developed a cross-platform sync engine to automate professional profile updates. Shortlisted for the Vadodara Startup Festival after identifying and solving user friction in manual data entry.",
    category: ["AI"],
    image: resume,
    tags: [
      "Html",
      "Css",
      "Js",
      "Web Development",
      "AI",
      "Extension",
    ],
    link: "https://github.com/sai-suraj143/Resume_Sync.git",
    github: "https://github.com/sai-suraj143/Resume_Sync.git",
  },

  {
  id: 2, // or your next available ID
  title: "Copilot-X: RAG Engine",
  description: "Built a Retrieval-Augmented Generation engine to perform semantic search over unstructured enterprise data. Optimized for context-aware retrieval using LangChain and vector embeddings to reduce LLM hallucinations.",
  category: ["AI"],
  image: blank, // make sure to import an image or use a placeholder
  tags: [
    "Python",
    "LangChain",
    "Vector Databases",
    "LLM",
    "Semantic Search",
    "NLP"
  ],
  link: "https://github.com/sai-suraj143/copilot-x-rag-engine",
  github: "https://github.com/sai-suraj143/copilot-x-rag-engine",
},

  {
    id: 3,
    title: "SentinelGuard",
    description: "Designed a real-time security automation tool using python. Optimized for low-latency performance and high scalability to handle concurrent security data streams.",
    category: ["Web App", "AI"],
    image:blank,
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
    id: 5,
    title: "code Logic tutor",
    description:
      "An interactive learning assistant that helps students master programming logic and data structures through guided coding challenges.",
    category: ["Web App", "UI/UX"],
    image: codelogic,
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "WhatsApp API"],
    link: "https://codelogic-tutor.onrender.com/",
    github: "https://github.com/sai-suraj143/CodeLogic_Tutor.git",
  },
  // {
  //   id: 6,
  //   title: "To-Do-App",
  //   description:
  //     "A streamlined task management application focused on productivity, featuring intuitive UI for organizing daily workflows and goals.",
  //   category: ["Web App", "UI/UX"],
  //   image: todo,
  //   tags: ["React", "Node.js", "Tailwind CSS", "Spotify API", "Firebase"],
  //   link: "https://sai-suraj143.github.io/to-do-App/",
  //   github: "https://github.com/sai-suraj143/to-do-App.git",
  // },
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
