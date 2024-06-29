import Container from "@/components/container";
import PurpleText from "@/components/purple-text";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
export default function AboutSection() {
  return (
    <Container.Root containerId="about" variant="to_bottom" isFullScreen>
      <Container.Body
        className={
          "flex flex-col gap-8 md:gap-0 justify-center items-center  md:flex-row h-full w-full"
        }
      >
        <div className="flex justify-center md:w-1/2 2xl:w-1/3">
          <img
            src="/profile_image.png"
            alt="My picture."
            className="rounded-lg w-3/4 shadow-pink-shadow"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-primary font-semibold text-4xl text-center">
            <PurpleText> About me </PurpleText>
          </h1>
          <p className="font-secondary text-2xl text-cls-foreground-secondary">
            I am a Full Stack Developer from Brazil, currently studying Systems
            Analysis and Development at UNITAU. I have hands-on experience with
            Java and TypeScript, specializing in frameworks like Spring Boot and
            Next.js. My skill set includes certifications in English
            proficiency, web development, data structures and algorithms, and
            Excel. I primarily use Linux as my operating system. I am eager to
            apply my knowledge and grow professionally in new opportunities.
          </p>
          <div className="flex space-x-4 text-5xl text-cls-foreground-secondary">
            <a
              href="https://www.linkedin.com/in/diegorezm/"
              className="hover:text-cls-foreground"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/diegorezm"
              className="hover:text-cls-foreground"
              target="_blank"
            >
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </Container.Body>
    </Container.Root>
  );
}
