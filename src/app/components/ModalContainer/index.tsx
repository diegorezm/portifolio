import './modalContainer.css'
interface Props {
  toggle: () => void;
  children: React.ReactNode
}
export default function ModalContainer({ toggle, children }: Props) {
  return (
    <div className='modal__container'>
      <div className="clickzone" onClick={toggle}>
        {children}
      </div>
    </div>
  )
}
