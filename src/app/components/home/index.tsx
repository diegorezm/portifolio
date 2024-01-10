"use client"
import CurriculumModal from "../CurriculumModal"
import Image from "next/image"
import { IoCaretForwardSharp } from 'react-icons/io5'

import Container from "../container"
import Special from "../Special"
import TypeAnimation from "../typeAnimation"
import pfp from '@/assets/pfp.jpg'
import './home.css'
import { useState } from "react"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollToTop()
    setTimeout(() => {
      setShowModal(!showModal);
    }, 400);
  }
  return (
    <Container primary>
      {showModal && <CurriculumModal toggleModal={toggleModal} />}

      <div id="home" />
      <section className="home__wrapper">
        <div className="home__hero">
          <div className="home__image">
            <Image src={pfp} alt="my image" className="image" />
          </div>
          <div className="home__text">
            <Special>
              <TypeAnimation
                text="Fullstack dev!"
                delay={200}
              />
            </Special>
            <div className="home__button">
              <button onClick={toggleModal}>
                <span>
                  Curriculum
                </span>
                <IoCaretForwardSharp className="icon" />
              </button>
            </div>
          </div>

        </div>
        <div className="home__hero__text">
          <p>
            Hello! My name is Diego, and I&apos;m a passionate <Special>junior Fullstack software developer</Special> based in Brazil.I have a strong foundation in web development, with a primary focus on <Special>JavaScript</Special> and <Special> TypeScript.</Special>
          </p>
        </div>

      </section>
    </Container>
  )
}
