export interface Project {
  id: number;
  name: string;
  sourceCode: string;
  description: string;
  tech: string[];
  details: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Convenience Store",
    sourceCode: "https://github.com/diegorezm/convenience.store.api",
    description:
      "Full-stack application consisting of a Spring Boot API that interacts with a SQL database. It includes authentication, tests using JUnit and MockMvc, and utilizes Docker for easy deployment. The frontend is built with Next.js",
    tech: ["java", "docker", "spring boot", "nextjs", "typescript","tailwind"],
    details: "https://www.youtube.com/watch?v=Qd2bRPsiaZE",
    image: "https://i.ytimg.com/vi/Qd2bRPsiaZE/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "Start page",
    sourceCode: "https://github.com/diegorezm/start_page",

    description:
      "A customizable browser start page built with Vue and TypeScript. Users can manage bookmarks, switch themes, and change the background image for a personalized experience.",
    tech: ["typescript", "vue", "bun", "tailwind"],
    details: "https://diegorezm-start-page.netlify.app/",

    image:
      "https://raw.githubusercontent.com/diegorezm/start_page/main/public/showcase.png",
  },
  {
    id: 2,
    name: "WallpaperCL",
    sourceCode: "https://github.com/diegorezm/wallpapercl",
    description:
      "WallpaperCL is a lightweight wallpaper management application built using modern technologies like Rust, TypeScript, and React, powered by Tauri. Designed for Linux users, it offers a seamless experience for organizing and setting wallpapers.",
    tech: ["rust", "typescript", "react", "tailwind"],
    details: "https://www.youtube.com/watch?v=n_2mIcaMpBM",
    image:
      "https://raw.githubusercontent.com/diegorezm/wallpapercl/main/showcase.png",
  },
  {
    id: 3,
    name: "Agenda app",
    sourceCode: "https://github.com/diegorezm/agenda-app",
    description:
      "A Next.js application that allows users to interact with MongoDB and manage their contacts. It also includes an authentication system.",
    tech: ["node", "tailwind", "nextjs", "typescript", "mongodb"],
    details: "https://www.youtube.com/watch?v=iH5q3USLrf0",
    image: "https://i.ytimg.com/vi/iH5q3USLrf0/maxresdefault.jpg",
  },
  {
    id: 4,
    name: "School app",
    sourceCode: "https://github.com/diegorezm/school_go",
    description:
      "A Go web app that interacts with a PostgreSQL database and allows users to manage student data. This app is built using the default Go net/http package and htmx.",
    tech: ["go", "postgreSQL", "docker", "htmx"],
    details: "https://www.youtube.com/watch?v=T2mdSxnGhgY",
    image: "https://i.ytimg.com/vi/T2mdSxnGhgY/maxresdefault.jpg",
  },
];

export default projects;
