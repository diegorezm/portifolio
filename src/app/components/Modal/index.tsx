import Special from '../Special'
import './modal.css'
import { useEffect } from 'react'
interface props {
  toggleModal: () => void
}
export default function Modal({ toggleModal }: props) {
  useEffect(() => {
    document.body.classList.add('modal__open');
    return () => {
      document.body.classList.remove('modal__open');
    };
  }, [])
  return (
    <div className="modal__container">
      <section className='modal__wrapper'>
        <div className="modal__dialog">
          <div className="modal__title">
            <Special>Would you like to download my curriculum?</Special>
          </div>
          <div className="modal__buttons">
            <a className="modal__anchor anchor__ok" href="https://raw.githubusercontent.com/diegorezm/portifolio/main/src/assets/curriculum.pdf" rel="noopener noreferrer">Ok</a>
            <a className="modal__anchor anchor__cancel" onClick={toggleModal}>Cancel</a>
          </div>
        </div>
      </section>
    </div>
  )
}
