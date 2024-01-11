"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, typeFormSchema } from "@/lib"
import { sendEmail, Response } from "@/actions/email"
import toast from "react-hot-toast"

import LabelInput from "../labelInput"
import Error from "../Error"

import './contact.css'

export function Form() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<typeFormSchema>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: typeFormSchema) => {
    try {
      setLoading(true)
      const response: Response = await sendEmail({ data })
      if (response.success) {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    } catch (error: any) {
      console.error(error.message)
    } finally {
      setLoading(false)
      reset()
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <h2>Get in contact!</h2>
      <LabelInput register={register} name='name' error={errors.name} error_message={errors.name?.message} label='Name:' placeholder="Your name..." />
      <LabelInput register={register} name='email' error={errors.email} error_message={errors.email?.message} label='Email:' placeholder="Your email..." />
      <div className="contact__textarea">
        <label htmlFor="message">Message:</label>
        <textarea  {...register("message", { required: true })} id="message" placeholder="your message..." rows={10} />
        {errors.message && <Error message={errors.message.message} />}
      </div>
      <div className="contact__button">
        <button type="submit" disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </div>
    </form>
  )
}
