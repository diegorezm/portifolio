import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContainerBody({ children, className = "" }: Props) {
  return <div className={cn("w-full px-4 md:px-8", className)}>{children}</div>;
}
