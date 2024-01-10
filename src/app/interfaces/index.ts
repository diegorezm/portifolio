import { StaticImageData } from "next/image";

export enum specs {
  Java,
  PostgreSQL,
  Tailwind,
  Nextjs,
  Typescript,
  Python,
  Mongodb,
  svelte
}

export interface ProjectsInterface {
  id: number,
  name: string,
  github: string,
  description?: string,
  showcase: string,
  tech: specs[],
  image: StaticImageData
}

export interface TechInterface {
  id: number,
  title: string,
  icon: string
}

