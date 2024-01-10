import './modalContainer.css'
export default function ModalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='modal__container'>
      {children}
    </div>
  )
}
