import { cn } from "@/utils/cn";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

type Props = {
  variant?: "normal" | "error";
  message: string;
};

const ContactFeedback = ({ message, variant = "normal" }: Props) => {
  const feedBack = {
    error: {
      className: "bg-cls-red",
      Icon: IoCloseSharp,
    },
    normal: {
      className: "bg-cls-light-green text-cls-background",
      Icon: IoCheckmarkSharp,
    },
  }[variant];
  return (
    <div
      className={cn(
        `flex items-center justify-center fixed top-0 right-4 z-50 w-fit px-4 py-2 rounded-2xl shadow-lg  space-x-2 transition-all duration-300 ease-in-out`,
        feedBack.className,
      )}
    >
      <feedBack.Icon />
      <p className="text-lg font-secondary">{message}</p>
    </div>
  );
};

export default ContactFeedback;
