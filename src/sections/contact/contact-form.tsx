import { z } from "zod";
import ContactInput from "./contact-input";
import ContactFeedback from "./contact-feedback";
import { useState } from "react";
import ContactButton from "./contact-button";
import mailto from "@/lib/mailto";
import { AxiosError } from "axios";

type ContactFeedBack = {
  err: boolean;
  message: string;
  showToast: boolean;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [zodErros, setZodErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<ContactFeedBack>({
    err: false,
    message: "",
    showToast: false,
  });

  const emailFormObj = z
    .object({
      email: z.string().email().min(6, "Email must be at least 6 characters"),
      name: z.string().min(3, "Name must be at least 3 characters"),
      message: z
        .string()
        .min(12, "Message must be at least 12 characters")
        .max(256, "Message must be at most 256 characters"),
    })
    .strict();

  const handleSubmit = async (e: Event) => {
    setIsLoading(true)
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }
    try {
      const request = emailFormObj.parse(data);
      setZodErrors({})
      await mailto(request)
      setFeedback({ err: false, showToast: true, message: "Email sent!" })
      form.reset()
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce(
          (acc: Record<string, string>, error) => {
            acc[error.path[0]] = error.message
            return acc
          },
          {},
        );
        setZodErrors(fieldErrors)
      } else {
        if (err instanceof AxiosError) {
          setFeedback({
            err: true,
            showToast: true,
            message: `An error occurred. Please try again later. (Error code: ${err.code})`,
          });
          console.error(`Axios error: ${err.message}`, err);
        } else if (err instanceof Error) {
          setFeedback({
            err: true,
            showToast: true,
            message: err.message,
          });
          console.error(`Error: ${err.message}`, err);
        } else {
          setFeedback({
            err: true,
            showToast: true,
            message: "Something went wrong!",
          });
          console.error(`Unexpected error: ${JSON.stringify(err)}`);
        }
      }
      console.error(err)
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setFeedback((f) => ({
          ...f,
          showToast: false,
        }))
      }, 2000)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 font-secondary  min-h-full bg-light-card shadow-default-card p-4 rounded-xl space-y-6 2xl:space-y-8"
    >
      <h1 className="font-primary text-3xl 2xl:text-4xl font-bold text-center text-cls-foreground w-full">
        Let's talk!
      </h1>
      <ContactInput
        name="name"
        placeholder="your name..."
        type="text"
        error={zodErros.name}
      />
      <ContactInput
        name="email"
        placeholder="your email..."
        type="email"
        error={zodErros.email}
      />

      <input type="text" name="hidden" id="hidden" hidden />

      <ContactInput
        name="message"
        placeholder="your message..."
        type="text"
        error={zodErros.message}
        isTextArea
      />

      <ContactButton
        isLoading={isLoading}
        label={isLoading ? "Loading" : "Submit"}
      />

      {feedback.showToast && (
        <ContactFeedback
          variant={feedback.err ? "error" : "normal"}
          message={feedback.message}
        />
      )}
    </form>
  );
};
export default ContactForm;
