import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "text-center relative inline-flex items-center justify-center text-white rounded-lg border-[1px] border-neutral-800 transition duration-200 w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-opacity-50 hover:bg-neutral-900",
        outline: "bg-neutral-900 hover:bg-opacity-50",
      },
      size: {
        sm: "md:px-3 md:py-1 text-sm md:text-base px-2 py-1",
        md: "md:px-5 md:py-2 px-4 py-1 text-sm lg:text-base",
        lg: "md:px-7 md:py-3 px-6 py-2 text-md md:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
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
    ref,
  ) => (
    <button
      className={cn("relative", className)}
      style={style}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 m-[-1px] rounded-lg bg-gradient-to-r",
          gradientFrom,
          gradientTo,
        )}
      />
      <div
        className={cn(
          buttonStyles({ variant, size }),
          "group relative z-10 rounded-[6px]",
        )}
      >
        {props.children}
      </div>
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
