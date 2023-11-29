import Image from "next/image";
import { projectList as projects } from "@/app/content/projectList";
import Container from "../container";
import './projects.css'
import Title from "../Title";
import Subtitle from "../subtitle";
import Tag from "../tags";

export default function Projects() {
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
                  <Image src={image} alt="Project image" className="list__image" placeholder="blur" />
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
