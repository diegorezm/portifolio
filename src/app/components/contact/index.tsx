import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { IconType } from "react-icons"
import Container from "../container"
import Title from "../Title"
import Subtitle from "../subtitle"
import { Form } from "./Form"

import './contact.css'

interface Icons {
  id: number,
  title: string,
  Icon: IconType,
  social: string
}

export default function Contact() {

  const icons: Icons[] = [
    {
      id: 1,
      title: "diegorezm",
      Icon: IoLogoGithub,
      social: "https://github.com/diegorezm"
    },
    {
      id: 2,
      title: "diegorezm",
      Icon: IoLogoLinkedin,
      social: "https://www.linkedin.com/in/diegorezm/"
    }
  ]

  return (
    <Container primary={false}>
      <div id="contact" />
      <Title title="Contact" />
      <Subtitle message="My socials!" />
      <section className="contact__wrapper">
        <Form />
        <div className="socials__icons">
          {icons.map(({ id, title, Icon, social }) => (
            <div key={id}>
              <a href={social} target="_blank">
                <Icon className="icon__socials" />
                <p>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
