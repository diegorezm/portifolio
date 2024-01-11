import { ProjectsInterface, Specs } from "@/app/interfaces"
import axios from "axios"

const getProjectsData = async () => {
  type Response = {
    id: number,
    name: string,
    github: string,
    showcase: string,
    tech: string[],
    image: string
  }
  const res = await axios.get("https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/contents/projects.json")
  const data: Response[] = await res.data
  return data
}

const converToEnum = (tag: string): Specs | undefined => {
  type SpecsKeys = keyof typeof Specs
  const keys = Object.keys(Specs) as SpecsKeys[]
  if (keys.includes(tag as SpecsKeys)) {
    return Specs[tag as SpecsKeys]
  }
  return undefined
}

export const loadProjectsData = async () => {
  const data = await getProjectsData()
  const parsedData: ProjectsInterface[] = data.map(project => {
    const tech: Specs[] = project.tech.map(tech => {
      const converted = converToEnum(tech)
      return converted !== undefined ? converted : Specs.Svelte
    })
    return {
      ...project,
      tech
    }
  })

  return parsedData
}
