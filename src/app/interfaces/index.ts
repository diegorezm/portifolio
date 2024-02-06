export enum Specs {
  Java,
  PostgreSQL,
  Tailwind,
  Nextjs,
  Typescript,
  Python,
  Mongodb,
  Svelte
}

export interface ProjectsInterface {
  id: number,
  name: string,
  github: string,
  showcase: string,
  description: string,
  tech: Specs[],
  image: string
}

export interface TechInterface {
  id: number,
  title: string,
  icon: string
}

