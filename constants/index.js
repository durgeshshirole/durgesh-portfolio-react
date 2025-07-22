import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    }
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    }
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    }
    
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    }
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
  title: "AI/ML Intern",
  company_name: "Intern at Pantech Solutions Hyderabad",
  icon: "/assets/company/curowell-logo.svg",
  iconBg: "#E6DEDD",
  date: "January 2024",
  points: [
    "Worked on plant leaf disease detection using machine learning and deep learning models.",
    "Focused on image classification and model training to enhance disease identification accuracy.",
    "Utilized Python, TensorFlow, and OpenCV for preprocessing, training, and evaluation.",
    "Gained experience in dataset handling, performance tuning, and model deployment basics.",
  ],
},
{
  title: "Full Stack Developer",
  company_name: "Student Project at JSCOE Pune (in collaboration with IBM)",
  icon: "/assets/company/drdo-cabs.png",
  iconBg: "#E6DEDD",
  date: "March 2024",
  points: [
    "Built a Student Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Enabled Excel data upload, processing, and predefined formula application with minimal clicks.",
    "Stored user progress in MongoDB to support multi-session workflow and editable entries.",
    "Designed with role-based access and responsive UI for efficient academic data handling.",
  ],
}

  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-Powered Job Search Platform",
    description:
      "Developed a job search platform using the MERN stack with features like job listings, application tracking, and AI-enhanced job matching. Integrated intelligent search and filter options to boost job search efficiency by 30%.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "ai-integration",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/vanlife.png",
source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
deployed_link: "https://myvanlife.netlify.app",

  },
  {
    name: "PlasticPulse (Waste Collection & Recycling)",
    description:
      "Built a MERN stack web app to streamline plastic waste collection and recycling. Integrated machine learning for smart waste categorization. Features include user scheduling, interactive maps, and real-time tracking.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "map-integration",
        color: "pink-text-gradient",
      },
      {
        name: "real-time-tracking",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/vanlife.png",
source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
deployed_link: "https://myvanlife.netlify.app",

  },
  {
    name: "Student Management System",
    description:
      "Developed a Student Management System using the MERN stack that allows uploading Excel data, auto-applying predefined formulas, manual entry of fields, and downloadable final sheets. Supports resume-progress functionality using MongoDB.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "excel-formula",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
   image: "/assets/projects/vanlife.png",
source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
deployed_link: "https://myvanlife.netlify.app",

  },
  {
    name: "Personal Portfolio Website",
    description:
      "Constructed a personal portfolio site using the MERN stack and Java. Performance optimization techniques led to 60% faster load speeds, ensuring a seamless experience for recruiters and collaborators.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "performance-optimization",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/vanlife.png",
source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
deployed_link: "https://myvanlife.netlify.app",

  }
];


const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/durgeshshirole",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "linkedin.com/in/durgesh-shirole-29338828b",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/durgeshshirole.sp/",
  },
];

const heroTexts = [
  "React.js developer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
