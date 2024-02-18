"use client"
import CurriculumModal from "../CurriculumModal"
import Image from "next/image"
import { IoCaretForwardSharp } from 'react-icons/io5'

import Container from "../container"
import Special from "../Special"
import TypeAnimation from "../typeAnimation"
import { useState } from "react"
import './home.css'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const imageLoader = ({ src }: { src: string }) => {
    return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/${src}`
  }
  return (
    <Container primary>
      {showModal && <CurriculumModal toggleModal={() => setShowModal(!showModal)} />}

      <div id="home" />
      <section className="home__wrapper">
        <div className="home__hero">

          <div className="home__image">
            <Image loader={imageLoader} src="pfp.jpg" alt="my image" className="image" width={100} height={100} quality={80} />
          </div>

          <div className="home__text">
            <Special>
              <TypeAnimation
                text="Fullstack dev!"
                delay={200}
              />
            </Special>
            <p>
              Hello! My name is Diego, and I&apos;m a passionate <Special>junior Fullstack software developer</Special> based in Brazil.I have a strong foundation in web development, with a primary focus on <Special>JavaScript</Special> and <Special> TypeScript.</Special>
            </p>
            <div className="home__button">
              <button onClick={() => setShowModal(!showModal)}>
                <span>
                  Curriculum
                </span>
                <IoCaretForwardSharp className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
