import { motion } from 'framer-motion'
import ModalContainer from '../ModalContainer'
import Special from '../Special'
import './modal.css'
import { useEffect } from 'react'
import { defaultButtonAnimation, dropInAnimation } from '@/lib'
interface props {
  toggleModal: () => void
}
export default function CurriculumModal({ toggleModal }: props) {
  useEffect(() => {
    document.body.classList.add('modal__open');
    return () => {
      document.body.classList.remove('modal__open');
    };
  }, [])
  return (
    <ModalContainer toggle={toggleModal}>
      <motion.div
        variants={dropInAnimation}
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
