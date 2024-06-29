import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  variant?: "pink" | "dark" | "outline";
  className?: string;
};
export default function ButtonRoot({
  children,
  variant = "outline",
  className = "",
}: Props) {
  const variantClass = {
    pink: "bg-pink-gradient text-cls-foreground",
    dark: "bg-dark-gradient text-cls-foreground",
    outline:
      "border border-cls-background text-cls-foreground hover:border-cls-foreground",
  }[variant];
  return (
    <div
      className={cn(
        "flex justify-center items-center font-secondary font-semibold shadow-default rounded-lg",
        variantClass,
        className,
      )}
    >
      {children}
    </div>
  );
}
