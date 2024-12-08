import React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const containerStyles = cva("flex justify-center mx-auto w-full min-h-screen", {
  variants: {
    variant: {
      constrained: "sm:p-6 lg:p-8",
      "padded-content": "p-4 sm:p-6 lg:p-16",
    },
  },
  defaultVariants: {
    variant: "padded-content",
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerStyles> {
  variant?: "constrained" | "padded-content";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, style, ...props }, ref) => (
    <div
      className={cn(containerStyles({ variant, className }))}
      style={{
        ...style,
      }}
      {...props}
      ref={ref}
    />
  ),
);

Container.displayName = "Container";

export { Container };
