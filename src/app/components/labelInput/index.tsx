import { typeFormSchema } from '@/lib'
import Error from '../Error'
import { FieldError, UseFormRegister } from 'react-hook-form'

import './input.css'

interface InputProps {
  label: string,
  placeholder: string,
  name: "email" | "name"
  error: FieldError | undefined,
  register: UseFormRegister<typeFormSchema>,
  error_message: string | undefined
}

export default function LabelInput({ label, name, error, register, error_message, placeholder }: InputProps) {
  return (
    <div className='input__wrapper'>
      <label htmlFor={name}>{label}</label>
      <input  {...register(name, { required: true })} placeholder={placeholder} />
      {error && <Error message={error_message}/>}
    </div>
  )
}
