import React from "react";
import { cn } from "@/utils/cn";

type Props = {
  variant?: "hero" | "to_top" | "to_bottom";
  isFullScreen?: boolean;
  containerId: string;
  children: React.ReactNode;
};

const ContainerRoot: React.FC<Props> = ({
  variant = "to_bottom",
  isFullScreen = false,
  containerId,
  children,
}) => {
  const heightClass = isFullScreen ? "min-h-screen" : "min-h-full";

  const variantClass = {
    hero: "bg-hero-gradient",
    to_top: "bg-bt-gradient",
    to_bottom: "bg-tb-gradient",
  }[variant];

  return (
    <section
      id={containerId}
      className={cn(
        "flex flex-col justify-center items-center w-full",
        heightClass,
        variantClass,
      )}
    >
      {children}
    </section>
  );
};

export default ContainerRoot;
