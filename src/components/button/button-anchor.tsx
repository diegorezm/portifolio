import { cn } from "@/utils/cn";
import { IconType } from "react-icons";

type Props = {
  label: string;
  href: string;
  toBlank?: boolean;
  Icon?: IconType;
};

export default function ButtonAnchor({
  label,
  href,
  toBlank = false,
  Icon,
}: Props) {
  let className = "w-full text-center";
  if (Icon) {
    className = "flex items-center justify-center gap-2 text-center w-full";
  }
  return (
    <a
      className={cn("", className)}
      href={href}
      target={toBlank ? "_blank" : "_self"}
    >
      <span>{label}</span>
      {Icon && <Icon />}
    </a>
  );
}
