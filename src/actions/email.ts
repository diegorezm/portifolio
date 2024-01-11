"use server"
import { typeFormSchema } from "@/lib"
import axios from "axios"

export type Response = {
  success: boolean,
  message: string
}

export const sendEmail = async ({ data }: {
  data: typeFormSchema
}) => {
  const response: Response = {
    success: false,
    message: ""
  }
  try {
    const apiUrl = process.env.GETFORMS

    if (apiUrl) {
      const request = await axios.post(
        apiUrl,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        { headers: { 'Accept': 'application/json' } }
      )

      const success = request.data.success;
      response.success = success
      response.message = "Your email has been sent!"
    } else {
      throw new Error("Not able to get API url.")
    }
  } catch (error: any) {
    console.error('Error occurred:', error)
    response.message = error.message || "An error occurred while sending the email."
  }
  return response
}

