import { motion } from 'framer-motion';
import './modalContainer.css'

interface Props {
  toggle: () => void;
  children: React.ReactNode
}
export default function ModalContainer({ toggle, children }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='modal__container'
    >
      <div className="clickzone" onClick={toggle}>
        {children}
      </div>
    </motion.div>
  )
}
