export type Technology = {
  title: string;
  description: string;
  icon: string;
};

export const technologies: Technology[] = [
  {
    title: "Java",
    description: "I have experience with Java, having studied it during my Systems Analysis and Development course, and by building personal projects using Spring Boot.",
    icon: "vscode-icons:file-type-java",
  },
  {
    title: "TypeScript/JavaScript",
    description: "I am very comfortable with TypeScript, having used it to build most of my personal projects. I have experience with libraries like Drizzle and Hono for backend development, as well as React, Vue, and Svelte for frontend development.",
    icon: "vscode-icons:file-type-typescript-official",
  },
  {
    title: "Python",
    description: "I have primarily used Python for data analysis with pandas and numpy, working with DPT, CSV, and XLSX files. I have also used it for scripting tasks.",
    icon: "vscode-icons:file-type-python",
  },
  {
    title: "Golang",
    description: "Although I’m not very experienced with Golang, I have used it to build a few personal projects, mainly for developing REST APIs.",
    icon: "vscode-icons:file-type-go",
  },
];
