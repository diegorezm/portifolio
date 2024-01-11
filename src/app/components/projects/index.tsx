'use client'

import Image from "next/image"
import Container from "../container"
import './projects.css'
import Title from "../Title"
import Subtitle from "../subtitle"
import Tag from "../tags"
import { loadProjectsData } from "@/actions/content"
import { useCallback, useEffect, useState } from "react"
import { ProjectsInterface } from "@/app/interfaces"

export default function Projects() {
  const [projects, setProjects] = useState<ProjectsInterface[]>([])
  const load = useCallback(async () => {
    const data = await loadProjectsData()
    setProjects(data)
  }, [])

  useEffect(() => {
    load()
  }, [load])
  function imageLoader({ src }: { src: string}) {
    console.log(src)
    return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/proj/${src}`
  }
  return (
    <Container primary={false}>
      <div id="projects" />
      <section className="projects__wrapper">
        <Title title="Projects" />
        < Subtitle message="Apps i made with the purpose of studying programming!" />
        <ul className="projects__list">
          {
            projects.map(({ id, name, github, tech, image, showcase }) => (
              <li key={id} className="list__item__wrapper">
                <h1>{name}</h1>
                <div className="list__image__wrapper">
                  <Image loader={imageLoader} src={image} alt="Image project" className="list__image"  width={100} height={100} quality={80} />
                </div>
                <div className="list__anchor__action">
                  <a href={github} target="_blank">Code</a>
                  <a href={showcase} target="_blank">Showcase</a>
                </div>
                <div className="mobile__anchor__action">
                  <a href={github} target="_blank">Code</a>
                  <a href={showcase} target="_blank">Showcase</a>
                </div>
                <div className="list__tag">
                  {tech.map((item, index) => (
                    <Tag tech={item} key={index} />
                  ))}
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </Container>
  )
}
