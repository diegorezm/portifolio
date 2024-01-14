import * as z from 'zod'

export const formSchema = z.object({
  name: z.string({
    required_error: "Name field cannot be empty...",
    invalid_type_error: "Name must be a string.",
  }).regex(
    /^[A-Za-z]+$/,
    {
      message: "Name must contain only alphabetic characters..."
    }).min(1, { message: "Name field cannot be empty..." }),
  email: z.string()
    .min(8, { message: "Email address is too short..." })
    .max(35, { message: "Email address is too long..." })
    .email({ message: "Invalid email address format..." }),
  message: z.string().min(5, { message: "Your message cannot be too short..." }).max(200, { message: "Your message is too long..." })
})

export type typeFormSchema = z.infer<typeof formSchema>

export const goTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

}

export const defaultButtonAnimation = {
  whileHover: { scale: 1.06 },
  whileTap: { scale: 0.9 }

}
