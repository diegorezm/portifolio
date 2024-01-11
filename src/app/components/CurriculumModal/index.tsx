import ModalContainer from '../ModalContainer'
import Special from '../Special'
import './modal.css'
import { useEffect } from 'react'
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
    <ModalContainer>
      <div className="modal__dialog">
        <div className='modal__title'>
          Curriculum
        </div>
        <div className="separator"></div>
        <div className="modal__body">
          <Special>Would you like to download my curriculum?</Special>
        </div>
        <div className="separator"></div>
        <div className="modal__buttons">
          <a className="modal__anchor anchor__ok" href="https://raw.githubusercontent.com/diegorezm/portifolio/curriculum/src/assets/curriculum.pdf" rel="noopener noreferrer">Ok</a>
          <a className="modal__anchor anchor__cancel" onClick={toggleModal}>Cancel</a>
        </div>
      </div>
    </ModalContainer>
  )
}
