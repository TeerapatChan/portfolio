import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const typographyStyles = cva("text-white", {
  variants: {
    variant: {
      h1: "text-2xl md:text-3xl lg:text-4xl font-bold",
      h2: "text-xl md:text-2xl lg:text-3xl font-semibold",
      h3: "text-lg md:text-xl lg:text-2xl font-semibold",
      h4: "text-md md:text-lg lg:text-xxl font-semibold",
      body: "text-sm md:text-md lg:text-lg",
      small: "text-sm md:text-md",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const Typography = ({
  variant,
  gradient,
  className,
  children,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "body" | "small";
  gradient?: "default" | "custom";
  className?: string;
  children: React.ReactNode;
}) => {
  const gradientClass = gradient
    ? gradient === "custom"
      ? "bg-gradient-to-r text-transparent bg-clip-text"
      : "bg-gradient-to-r from-primary to-sky-300 text-transparent bg-clip-text"
    : "";

  return (
    <div
      className={cn(typographyStyles({ variant }), className, gradientClass)}
    >
      {children}
    </div>
  );
};

export default Typography;
