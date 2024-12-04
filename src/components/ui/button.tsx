import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center text-white rounded-lg transition duration-200",
  {
    variants: {
      variant: {
        default: "bg-black hover:bg-transparent",
        outline: "bg-transparent border-[2px] border-white hover:bg-white",
      },
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  gradientFrom?: string;
  gradientTo?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      gradientFrom = "from-secondary",
      gradientTo = "to-primary",
      style,
      ...props
    },
    ref
  ) => (
    <button
      className={cn("p-[1px] relative", className)}
      style={style}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r rounded-lg",
          gradientFrom,
          gradientTo
        )}
      />
      <div
        className={cn(
          buttonStyles({ variant, size }),
          "relative z-10 bg-background rounded-[8px] group hover:bg-transparent"
        )}
      >
        {props.children}
      </div>
    </button>
  )
);

Button.displayName = "Button";

export { Button };
