// ============================================================
//   PROFILE DATA - Muhammad Reyhandhani
//   Untuk menambah gambar dari src/assets/images/, import di sini
// ============================================================

import avatarImg from '../assets/images/avatar.png';
import thumnailImg from '../assets/images/Thumnail.png';

export const profileData = {
  // -- GENERAL INFO -------------------------------------------
  name: 'Muhammad Reyhandhani',
  title: 'Full Stack Developer',
  tagline:
    'Information Systems student passionate about building clean, functional web applications.',
  email: 'reyhandhani11@gmail.com',
  phone: '+62 812-4999-9573',
  location: 'Sidoarjo, East Java, Indonesia',
  avatar: avatarImg,

  // -- SOCIAL LINKS -------------------------------------------
  social: {
    github: 'https://github.com/Reyhandhani',
    linkedin: 'https://www.linkedin.com/in/muhammad-reyhandhani',
    twitter: '',
    instagram: '',
  },

  // -- ABOUT --------------------------------------------------
  about: {
    description:
      'I am an Information Systems student at Telkom University Surabaya with a strong interest in full stack software development. I enjoy building complete software solutions, from designing databases and developing backend systems to creating clean and responsive user interfaces.',
    description2:
      'I have hands-on experience with technologies such as Go, Laravel, PHP, MySQL, HTML, CSS, and Bootstrap to build and integrate web application components. I am a quick learner who enjoys solving real-world problems through technology and continuously improving my skills to grow as a Full Stack Software Developer.',
    stats: [
      { label: 'Projects Completed', value: '3' },
      { label: 'Work Experience', value: '5' },
      { label: 'Certifications', value: '2' },
    ],
  },

  // -- SKILLS -------------------------------------------------
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 60 },
        { name: 'Reactjs', level: 65 },
        { name: 'Vue', level: 50 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Go (Golang)', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 80 },
        { name: 'RESTful API', level: 78 },
        { name: 'Graphql', level: 60 },
        { name: 'Python', level: 65 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Schema Design', level: 80 },
        { name: 'Migration', level: 75 },
        { name: 'Seeding', level: 70 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Azure', level: 55 },
        { name: 'Visual Paradigm', level: 70 },
        { name: 'BPMN / UML', level: 75 },
      ],
    },
  ],

  // -- EXPERIENCE ---------------------------------------------
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'TemuIN - Academic Project',
      period: 'Sep 2025 - Jan 2026',
      location: 'Surabaya, Indonesia',
      points: [
        'Developed a web-based lost & found application using Go, MySQL, HTML, CSS, and Bootstrap.',
        'Designed and managed the full database schema, including migrations and seeding.',
        'Integrated backend REST API with a responsive frontend interface.',
      ],
    },
    {
      role: 'Teaching Assistant',
      company: 'Telkom University Surabaya',
      period: 'Sep 2025 - Jan 2026',
      location: 'Surabaya, Indonesia',
      points: [
        'Assisted practicum sessions for the Business Process Modeling course.',
        'Supported students in system analysis and BPMN modelling using Visual Paradigm.',
        'Evaluated and graded student assignments and practicum reports.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Recalm Health - Academic Project',
      period: 'Jan 2025 - Dec 2025',
      location: 'Surabaya, Indonesia',
      points: [
        'Built a mental health web application using Laravel with full frontend and backend integration.',
        'Implemented features including articles, RSS API integration, statistics dashboard, and AI Chatbot.',
        'Managed database design, authentication, and deployment configuration.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'HMSI Telkom University Surabaya',
      period: 'Jul 2025',
      location: 'Surabaya, Indonesia',
      points: [
        'Developed an organizational profile website for HMSI using Laravel.',
        'Managed page structure, content, and organizational information.',
      ],
    },
    {
      role: 'Research & Technology Staff',
      company: 'HMSI Telkom University Surabaya',
      period: 'Jan 2025 - Dec 2025',
      location: 'Surabaya, Indonesia',
      points: [
        'Contributed to research initiatives and technology-focused work programs.',
        'Collaborated with the division team to plan and develop organizational tech activities.',
      ],
    },
  ],

  // -- EDUCATION ----------------------------------------------
  education: [
    {
      degree: 'Bachelor of Information Systems',
      school: 'Telkom University Surabaya',
      period: 'Sep 2023 - Present',
      detail:
        'Currently active student, focusing on software engineering and system analysis.',
    },
  ],

  // -- PROJECTS -----------------------------------------------
  projects: [
    {
      title: 'TemuIN - Lost & Found App',
      description:
        'A full-stack web application for reporting and finding lost items on campus. Built with Go, MySQL, HTML, CSS, and Bootstrap.',
      tags: ['Go', 'MySQL', 'Bootstrap', 'REST API'],
      image: '',
      demo: '',
      repo: 'https://github.com/Reyhandhani/TemuIn',
    },
    {
      title: 'Recalm - Mental Health Platform',
      description:
        'A Laravel-based mental health web app with articles, an RSS news feed, a statistics dashboard, and an AI-powered chatbot.',
      tags: ['Laravel', 'PHP', 'MySQL', 'AI Chatbot'],
      image: thumnailImg,
      demo: '',
      repo: 'https://github.com/Reyhandhani/Recalm',
    },
    {
      title: 'HMSI Website',
      description:
        'Organizational profile website for HMSI Telkom University Surabaya, managing pages, content, and member information.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      image: '',
      demo: '',
      repo: 'https://github.com/Reyhandhani/website-hmsi',
    },
  ],

  // -- CERTIFICATIONS -----------------------------------------
  certifications: [
    {
      name: 'Web Development Fundamentals',
      issuer: 'IBM SkillsBuild',
      year: '2026',
      image: '/cert_ibm_webdev.png',
      url: 'https://www.credly.com/badges/eef4adcc-b882-4b99-b115-1d8bd8e4392e/linked_in_profile',
    },
    {
      name: 'Free DevOps Course Certification',
      issuer: 'Intellipaat Academy',
      year: '2026',
      image: '/cert_intellipaat_devops.png',
      url: 'https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9Mjk4NTUwJmV4dD0x',
    },
  ],
};
