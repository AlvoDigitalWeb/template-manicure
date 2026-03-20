import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary hover:opacity-90",
        secondary: "bg-secondary text-primary border border-primary hover:bg-primary/5",
        accent: "bg-accent text-primary hover:bg-accent-hover",
        outline: "border border-border bg-transparent hover:bg-surface text-primary",
        ghost: "bg-transparent hover:bg-surface text-primary",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-10 text-lg",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
