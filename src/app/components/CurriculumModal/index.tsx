import { motion } from 'framer-motion'
import ModalContainer from '../ModalContainer'
import Special from '../Special'
import './modal.css'
import { useEffect } from 'react'
import { defaultButtonAnimation } from '@/lib'
interface props {
  toggleModal: () => void
}
export default function CurriculumModal({ toggleModal }: props) {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };


  useEffect(() => {
    document.body.classList.add('modal__open');
    return () => {
      document.body.classList.remove('modal__open');
    };
  }, [])
  return (
    <ModalContainer toggle={toggleModal}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal__dialog"
        onClick={e => e.stopPropagation()}
      >
        <div className='modal__title'>
          Curriculum
        </div>
        <div className="separator"></div>
        <div className="modal__body">
          <Special>Would you like to download my curriculum?</Special>
        </div>
        <div className="separator"></div>
        <div className="modal__buttons">
          <motion.a
            {...defaultButtonAnimation}
            className="modal__anchor anchor__ok"
            href="https://github.com/diegorezm/portifolio/raw/assets/src/assets/cv.pdf"
            rel="noopener noreferrer"
          >
            Ok</motion.a>
          <motion.a
            {...defaultButtonAnimation}
            className="modal__anchor anchor__cancel"
            onClick={toggleModal}
          >
            Cancel
          </motion.a>
        </div>
      </motion.div>
    </ModalContainer>
  )
}
