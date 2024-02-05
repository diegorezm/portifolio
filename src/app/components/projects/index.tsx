'use client'

import Image from "next/image"
import Container from "../container"
import './projects.css'
import Title from "../Title"
import Subtitle from "../subtitle"
import Tag from "../tags"
import { loadProjectsData } from "@/actions/content"
import { useEffect, useState } from "react"
import { ProjectsInterface } from "@/app/interfaces"
import { motion } from "framer-motion"
import { defaultButtonAnimation } from "@/lib"
import DetailsModal from "../DetailsModal"

export default function Projects() {
  const [projects, setProjects] = useState<ProjectsInterface[]>([])
  const [details, setDetails] = useState<ProjectsInterface>({
      id:-1,
      name:"",
      showcase:"",
      github:"",
      image:"",
      tech:[]
      })
  const [detailsModal, setDetailsModal] = useState(false)

  useEffect(() => {
    loadProjectsData().then(response => setProjects(response))
  }, [])

  function imageLoader({ src }: { src: string }) {
    return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/proj/${src}`
  }

  function toggleModal(){
    setDetailsModal(!detailsModal)
  }

  return (
    <Container primary={false}>
      {detailsModal && <DetailsModal project={details} toggleModal={toggleModal}/>}
      <div id="projects" />
      <section className="projects__wrapper">
        <Title title="Projects" />
        < Subtitle message="Apps i made with the purpose of studying programming!" />
        <ul className="projects__list">
          {
            projects.map(({ id, name, tech, image, github, showcase }) => (
              <li key={id} className="list__item__wrapper">
                <h1>{name}</h1>
                <div className="list__image__wrapper">
                  <Image loader={imageLoader} src={image} alt="Image project" className="list__image" width={100} height={100} quality={80} />
                </div>
                <motion.button
                  className="details__button"
                  {...defaultButtonAnimation}
                  onClick={() => {
                    toggleModal()
                    setDetails({ id, name, image, github, showcase, tech })
                  }}
                >
                  Details
                </motion.button>
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

