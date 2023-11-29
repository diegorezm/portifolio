import Image from "next/image";

import Container from "../container";
import { techList } from "@/app/content/techList";
import Title from "../Title";
import Subtitle from "../subtitle";
import './tech.css'

export default function Tech() {
  return (
    <Container>
      <div id="tech" />
      <section className="tech__wrapper">
        <Title title="Tech" />
        <Subtitle message="Some of the technologies i&apos;m most familiar with!" />
        <ul className="list__wrapper">
          {techList.map((tech) => (
            <li key={tech.id} className="icons__wrapper">
              <h2>{tech.title}</h2>
              <Image src={tech.icon} alt={`Tech ${tech.title}`} className="icons__tech" />

            </li>
          ))}
        </ul>
        <Subtitle message="svgs are from https://devicon.dev/" />
      </section>
    </Container>
  )
}
