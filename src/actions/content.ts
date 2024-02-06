import { ProjectsInterface, Specs } from "@/app/interfaces"

const converToEnum = (tag: string): Specs | undefined => {
  type SpecsKeys = keyof typeof Specs
  const keys = Object.keys(Specs) as SpecsKeys[]
  if (keys.includes(tag as SpecsKeys)) {
    return Specs[tag as SpecsKeys]
  }
  return undefined
}

const getProjectsData = async () => {
  type Response = {
    id: number,
    name: string,
    github: string,
    showcase: string,
    description: string,
    tech: string[],
    image: string
  }
  const res = await fetch("https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/contents/projects.json", {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 12
    }
  })

  const data: Response[] = await res.json()
  return data
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

export const loadTechData = async () => {
  type Response = {
    id: number,
    icon: string,
    title: string
  }
  const res = await fetch("https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/contents/techlist.json", {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24
    }
  })
  const data: Response[] = await res.json()
  return data
}

