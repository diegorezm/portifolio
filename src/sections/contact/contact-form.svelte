<script lang="ts">
  import ContactInput from "./contact-input.svelte";
  import ContactFeedback from "./contact-feedback.svelte";
  import Button from "../../components/button";
  import { z } from "zod";
  import mailto from "$lib/services/mail-to";
  import { AxiosError } from "axios";
  type ContactFeedBack = {
    err: boolean;
    message: string;
    showToast: boolean;
  };

  let isLoading = false;
  let zodErrors: Record<string, string> = {};
  let feedback: ContactFeedBack = {
    err: false,
    message: "",
    showToast: false,
  };

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
    isLoading = true;
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const request = emailFormObj.parse(data);
      await mailto(request);
      zodErrors = {};
      feedback = { err: false, showToast: true, message: "Email sent!" };
      form.reset();
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce(
          (acc: Record<string, string>, error) => {
            acc[error.path[0]] = error.message;
            return acc;
          },
          {},
        );
        zodErrors = fieldErrors;
      } else {
        if (err instanceof AxiosError) {
          feedback = {
            err: true,
            showToast: true,
            message: `An error occurred. Please try again later. (Error code: ${err.code})`,
          };
          console.error(`Axios error: ${err.message}`, err);
        } else if (err instanceof Error) {
          feedback = {
            err: true,
            showToast: true,
            message: err.message,
          };
          console.error(`Error: ${err.message}`, err);
        } else {
          feedback = {
            err: true,
            showToast: true,
            message: "Something went wrong!",
          };
          console.error(`Unexpected error: ${JSON.stringify(err)}`);
        }
      }
      console.error(err);
    } finally {
      isLoading = false;
      setTimeout(() => {
        feedback = { ...feedback, showToast: false };
      }, 2000);
    }
  };
</script>

<form
  on:submit={handleSubmit}
  class="w-full lg:w-1/2 font-secondary min-h-full border-2 border-cls-grey shadow-default p-4 rounded-xl space-y-6 2xl:space-y-8"
>
  <h1
    class="font-primary text-3xl 2xl:text-4xl font-bold text-center text-cls-foreground w-full"
  >
    Let's talk!
  </h1>
  <ContactInput
    name="name"
    placeholder="your name..."
    type="text"
    error={zodErrors.name}
  />
  <ContactInput
    name="email"
    placeholder="your email..."
    type="email"
    error={zodErrors.email}
  />

  <input type="text" name="hidden" id="hidden" hidden />

  <ContactInput
    name="message"
    placeholder="your message..."
    type="text"
    error={zodErrors.message}
    isTextArea
  />

  <Button.Root
    variant="pink"
    className="w-1/2 md:w-1/5 h-10 2xl:h-10 2xl:text-l"
  >
    <Button.Normal
      label="Submit"
      type="submit"
      {isLoading}
      disabled={isLoading}
    />
  </Button.Root>

  {#if feedback.showToast}
    <ContactFeedback
      variant={feedback.err ? "error" : "normal"}
      message={feedback.message}
    />
  {/if}
</form>
