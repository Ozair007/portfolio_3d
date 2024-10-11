export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review: "",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review: "",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review: "",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review: "",
  },
];

export const myProjects = [
  {
    title: "Vividli - Visual investment Calculator",
    desc: "Vividli is a visual investment calculator that helps users to calculate their investment. It provides users with a simple and intuitive interface to make informed financial decisions. Moreover, a chatbot helps users to get personalized financial advice.",
    subdesc:
      "Built with React.js, Bootstrap, Typescript, Express.js and OpenAI",
    href: "https://vividli.ai/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "assets/bootstrap.svg",
      },
      {
        id: 3,
        name: "Node/Express.js",
        path: "/assets/node-js.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
  {
    title: "Mgshop - Online E-Commerce Site",
    desc: "Mgshop is a modern E-commerce website that offers a wide range of products from various categories.",
    subdesc:
      "With Mgshop, users can shop online and get their desired products. The website is built with React.js, Bootstrap, Laravel and MySQL.",
    href: "https://mylocalgunshop.com/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/mgshop.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "assets/bootstrap.svg",
      },
      {
        id: 3,
        name: "PHP/Laravel",
        path: "/assets/laravel.png",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
  {
    title: "Chloee - Financial Chatbot",
    desc: "Chloee is a modern chatbot that provides personalized financial advice to users.",
    subdesc:
      "With Chloee, users can get personalized financial advice. The chatbot is built with React.js, Bootstrap, Express.js, OpenAI and MySQL.",
    href: "https://chloee.xyz/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/chloee.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "assets/bootstrap.svg",
      },
      {
        id: 3,
        name: "Node/Express.js",
        path: "/assets/node-js.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
  {
    title: "Bankista - Banks Management System",
    desc: "Bankista is a modern banks management system in which users can manage multiple banks and their accounts.",
    subdesc:
      "With Bankista, users can manage their bank accounts in one place. The system is built with Next.js, Plaid and Prisma.",
    href: "#",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React/Next.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Plaid",
        path: "/assets/plaid.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [7, -7, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [4, 4, 0]
      : isMobile
      ? [6, 4, 0]
      : isTablet
      ? [9, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-8, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-15, 10, 5]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -7, -10]
      : isMobile
      ? [-9, -7, -10]
      : isTablet
      ? [-11, -10, -8]
      : [-13, -13, -8],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Logicon",
    pos: "Software Engineer",
    duration: "2024",
    title:
      "Worked on different small projects and contributed to the development of various features. I also worked on improving the user experience with Next.js. And, have contributed in a live project built using Next.js, Nest.js and GraphQL, in which crypto currency and NFTs concepts were also used.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "OnyxTec Software Company",
    pos: "Associate Software Engineer",
    duration: "2022 - 2024",
    title:
      "The software house which actually shaped my career in Web development. In here, I worked on projects using Mern stack with MySQL. I was also a part of a team that works on different projects and innovative ideas to improve the user experience and simultaneously create something unique.",
    icon: "/assets/logo_onyxtec.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "Fiverr",
    pos: "Web Developer",
    duration: "2021 - 2022",
    title:
      "Started my career as Freelance Web developer, I built several features and small websites using HTML/CSS, React.js, and JavaScript. And, worked with Wix website builder as well.",
    icon: "/assets/fiverr.webp",
    animation: "clapping",
  },
];
