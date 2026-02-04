import { Github, Linkedin } from "lucide-react";

export const personalInfo = {
  name: "Ragasudha Sankar",
  role: "Senior Frontend Developer | React JS | eCommerce Specialist",
  bio: [
    "Front-End Developer with 12 years of IT experience, specializing in building scalable, high-performance web applications using React.js, Angular, and modern UI technologies.",
    "Strong expertise in performance optimization, including efficient state management, component reusability, code splitting, and rendering optimization.",
    "Proficient in developing responsive, mobile-first, and cross-browser compatible user interfaces using HTML5, CSS3, JavaScript (ES6), Tailwind CSS, Bootstrap, and Material UI.",
    "Experienced in building and maintaining Single Page Applications (SPAs) using React, Gatsby, Redux, and GraphQL.",
    "Hands-on experience with Agile / SCRUM methodologies, collaborating closely with business and backend teams to deliver scalable solutions.",
    "Skilled in debugging, DOM analysis, unit testing, and Test Driven Development (TDD) to ensure application stability and code quality.",
    "Initiated and developed an AI-driven Python web application for resume analysis and automated interview question generation, demonstrating continuous learning and innovation beyond core front-end expertise."
  ],
  email: "sudhasrs26@gmail.com",
  phone: "+91 9789589563",
  location: "Chennai, India",
  experience: "12+ YEARS",
  education:
    "Electronics and Communication Engineering, VELTECH MULTITECH Engineering College, Chennai (06/2008 - 05/2012)",
};

export const projects = [1, 2, 3, 4, 5, 6];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/sudhasrs26",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "www.linkedin.com/in/ ragasudha-sankar-907605144 ",
    color: "hover:text-blue-400",
  },
];

export const experiences = [
  {
    title: "Associate Principal",
    company: "LTIMindtree",
    period: "07/2018 – 06/2025",
    desc: [
      "Worked on multiple large-scale enterprise and eCommerce web applications for global clients in the FMCG and healthcare domains.",
      "Developed modern, scalable front-end applications using React.js, Angular, and Gatsby (Server-Side Rendering)",

      "Built Single Page Applications (SPAs) and SSR-based applications with a strong focus on performance optimization, SEO, and usability.",

      "Led front-end performance optimization initiatives, improving page load time, rendering efficiency, and overall user experience.",

      "Owned and supported production deployments on Google Cloud Platform (GCP), ensuring reliable releases and post-production stability.",
      "Acted as a Team Lead on enterprise projects, guiding developers, reviewing code, coordinating tasks, and ensuring adherence to UI best practices.",

      "Collaborated closely with business stakeholders, backend teams, and UX designers in Agile / SCRUM environments.",

      "Implemented unit testing and Test Driven Development (TDD) practices to maintain code quality and application stability.",

      "Actively involved in debugging, DOM analysis, troubleshooting, and resolving complex production issues."
    ],
    color: "violet",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Redux", "Next.js", "Gatsby", "GCP" , "NextJS", "TailwindCSS", "Material UI","Docker", "Git", "Magento UI", "DOMO", "Python"],
  },
  {
    title: "Front End Developer",
    company: "Tata Consultancy Services",
    period: "03/2013 - 07/2018",
    desc: [
    "Designed and developed responsive, user-interactive front-end applications using HTML, CSS, JavaScript, and Bootstrap, ensuring consistent behavior across browsers and devices.",

"Worked extensively on Hybris UI development, leveraging HTML, JSTL, LESS, JavaScript, jQuery, and Bootstrap to build scalable and reusable UI components for eCommerce platforms.",

"Developed and enhanced UI modules using Angular and JSP, contributing to dynamic, data-driven user interfaces.",
"Implemented responsive layouts and UI best practices, focusing on usability, accessibility, and performance.",

"Collaborated with backend and business teams to translate requirements into high-quality, maintainable UI solutions."
],

    color: "cyan",
    stacks: ["JavaScript", "Angular", "SCSS", "Bootstrap", "HTML5", "CSS3", "jQuery" ]
  },
];

export const tools = [
  "Figma – UI/UX Design",
  "Adobe After Effects – Motion Design",
  "VS Code – Code Editor",
  "Git & GitHub – Version Control",
  "Postman – API Testing",
  "Docker – Containerization",
  "Notion – Productivity",
];


export const skills = [
  "React.js",
  "Redux",
  "Gatsby",
  "Next JS",
  "JavaScript (ES6)",
  "TypeScript",
  "Docker",
  "Angular",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "GCP",
  "Zustand",
];

export const certificates = [
  "Microsoft- Exam 70-480: Programming in HTML5 with JavaScript and CSS3",
  "1000 Women Leaders Program – Jombay",
  "iLeadPlus Leadership Development Program – LTIMindtree",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
