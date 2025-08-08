
import {
    Briefcase,
    GraduationCap,
  } from "lucide-react";

export const greeting = {
    username: 'Benjamin Riemer',
    title: 'Hi all, I\'m Benjamin',
    subTitle: 'Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.',
  };
  
  export const socialMediaLinks = {
    github: 'https://github.com/benriemer',
    linkedin: "https://www.linkedin.com/in/benjamin-riemer-783431127/",
    gmail: 'riemer600@gmail.com',
    facebook: "https://www.facebook.com/benjamin.riemer.9480/",
  };
  
  export const skills = ["JavaScript", "Node.js", "React", "GraphQL", "MySQL", "NoSQL", "AWS", "Docker", "Kubernetes", "Bash Scripting", "Git"];

  export const skillsData = [
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
      '⚡ Builded and release AI coding assistants for VSCode and JetBrains',
      '⚡ Design and implemented Backend Archtictures with Databsemodel Design'
  ];
  
  export const educationInfo:any[] = [];
  
  export const workExperiences = [
    {
      role: 'DevOps & Backend Engineer',
      company: 'Bundesdruckerei GmbH, Berlin',
      period: '2024-02 - Current',
      description: 'Taking initiative to build a new AWS-based infrastructure from the ground up, leveraging Terraform, Docker, Helm, and Kubernetes (OpenShift) to support scalable and secure deployments. Built and released an AI coding assistant (similar to GitHub Copilot) for VSCode and JetBrains, including model orchestration, extension APIs, and telemetry pipelines.',
      icon: Briefcase,
    },
    {
      role: 'Full-Stack Developer',
      company: 'RTL Technology GmbH, Berlin',
      period: '2021-09 - 2024-01',
      description: 'Started in the HbbTV Team working in the Frontend with React and in the Backend with NodeJS Services as well as NestJS as a Framework. Switched the Team to developing as a Backend Dev for the Music Service for at least one year. Coordinated efficient large-scale software deployments and tested and deployed scalable and highly available software products.',
      icon: Briefcase,
    },
    {
      role: 'Full-Stack Developer',
      company: 'Freelancer, different projects and companies',
      period: '2020-10 - 2021-09',
      description: 'Delivered quality commercial websites that met coding standards and cross-browser compatibilities in many projects that lasted for 3 to 6 months. Developed and maintained microservices architectures using Docker and Kubernetes.',
      icon: Briefcase,
    },
    {
      role: 'Online Marketing, Frontend Developer',
      company: 'Telekom, Berlin',
      period: '2020-05 - 2020-09',
      description: 'Met frequently with technical, product management, and service personnel to stay current on company offerings and business policies. Working on specific Customer Projects to integrate custom In-App Ads.',
      icon: Briefcase,
    },
    {
      role: 'Full-Stack Developer',
      company: 'Freelancer, different projects and companies',
      period: '2018-04 - 2020-02',
      description: 'Liaised with rebranding experts to optimize websites for increased conversion rates. Maintained complex technology infrastructure and collaborated with the product team to implement new features and strategically plan for future products.',
      icon: Briefcase,
    },
    {
      role: 'Business Owner (Full-Stack Dev)',
      company: 'Self-Employed, Uelzen',
      period: '2012-01 - 2017-12',
      description: 'Performed development, debugging, optimization, and automation to support the implementation of products and applications. Identified, hired, and trained highly qualified staff by teaching best practices, procedures, and sales strategies.',
      icon: Briefcase,
    }
  ];
  
  export const bigProjects = [
    {
      title: 'Google Search Clone',
      description: 'Created a Google Search Clone with React, Next.js, TailwindCSS and Heroicicons. Just simply Search with the Google Search API',
      image: "../googleClone.png",
      aiHint: "search engine interface",
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "#",
      live: "https://google-clone.benjamin-riemer.de/",
    },
    {
      title: 'Facebook Clone',
      description: 'Created a Facebook Clone with React, Firebase, Firebase Log-In with Google Acc. uploading Images and MaterialUI.',
      image: "../img/facebookClone.png",
      aiHint: "social media feed",
      tags: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "https://facebook-clone.benjamin-riemer.de/",
    },
    {
      title: 'TikTok Clone',
      description: 'Under Construction - Created a TikTok Clone with React, Firebase and MaterialUI. Under Construction',
      image: "../img/tiktokClone.png",
      aiHint: "mobile video app",
      tags: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "https://tiktok-clone.benjamin-riemer.de/",
    },
  ];

  export const contactInfo = {
    title: 'Contact Me ☎️',
    subtitle:
      'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+491567 869 29 57',
    email_address: 'riemer600@gmail.com'
  }
