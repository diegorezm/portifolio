import { ProjectsInterface } from '@/app/interfaces';
import ModalContainer from '../ModalContainer'
import './details.css'
import Image from 'next/image';
import Tag from '../tags';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { defaultButtonAnimation, dropInAnimation } from '@/lib';
interface Props {
  toggleModal: () => void;
  project: ProjectsInterface

}
export default function DetailsModal({ toggleModal, project }: Props) {

  useEffect(() => {
    document.body.classList.add('modal__open');
    return () => {
      document.body.classList.remove('modal__open');
    };
  }, [])

  function imageLoader({ src }: { src: string }) {
    return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/proj/${src}`
  }

  return (
    <ModalContainer toggle={toggleModal}>
      <motion.section className="details__container"
        variants={dropInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}
      >
        <div className="details__title">
          <h2>{project.name}</h2>
        </div>
        <div className="details__image">
          <Image loader={imageLoader} src={project.image} alt="Image project" className="details__image__src" width={100} height={80} quality={80} />
        </div>
        <div className="details__links">
          <motion.a
            {...defaultButtonAnimation}
            href={project.github}
            target="_blank"
          >
            Code
          </motion.a>
          <motion.a
            {...defaultButtonAnimation}
            href={project.showcase}
            target="_blank">
            Showcase
          </motion.a>

        </div>
        <div className="details__description">
          descr
        </div>
        <div className="details__tags">
          {project.tech.map((item, index) => (
            <Tag tech={item} key={index} />
          ))}
        </div>
      </motion.section>
    </ModalContainer>
  )
}
