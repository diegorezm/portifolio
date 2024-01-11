'use client'
import Image from "next/image";

import Container from "../container";
import Title from "../Title";
import Subtitle from "../subtitle";
import './tech.css'
import { useCallback, useEffect, useState } from "react";
import { TechInterface } from "@/app/interfaces";
import { loadTechData } from "@/actions/content";

export default function Tech() {
  const [techList, setTechList] = useState<TechInterface[]>([])

  const load = useCallback(async () => {
    const data = await loadTechData()
    setTechList(data)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const imageLoader = ({ src }: { src: string}) => {
    return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/svgs/${src}`
  }

  return (
    <Container>
      <div id="tech" />
      <section className="tech__wrapper">
        <Title title="Tech" />
        <Subtitle message="Some of the technologies i&apos;m most familiar with!" />
        <ul className="list__wrapper">
          {
            techList.map((tech) => (
              <li key={tech.id} className="icons__wrapper">
                <h2>{tech.title}</h2> 
                <Image loader={imageLoader} src={tech.icon} alt={`Tech ${tech.title}`} className="icons__tech" width={100} height={100} quality={80}/>

              </li>
            ))

          }
        </ul>
        <Subtitle message="svgs are from https://devicon.dev/" />
      </section>
    </Container>
  )
}
