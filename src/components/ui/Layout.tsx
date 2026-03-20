import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const containerVariants = cva("mx-auto w-full px-4", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "xl",
  },
})

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size, className }))} {...props} />
  )
)
Container.displayName = "Container"

const sectionVariants = cva("relative w-full", {
  variants: {
    padding: {
      none: "py-0",
      sm: "py-6 lg:py-12",
      md: "py-12 lg:py-16",
      lg: "py-20 lg:py-32",
      xl: "py-32 lg:py-48",
    },
    variant: {
      default: "bg-bg",
      surface: "bg-surface",
      accent: "bg-accent/10",
      primary: "bg-primary text-secondary",
    },
  },
  defaultVariants: {
    padding: "md",
    variant: "default",
  },
})

const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants>>(
  ({ className, padding, variant, ...props }, ref) => (
    <section ref={ref} className={cn(sectionVariants({ padding, variant, className }))} {...props} />
  )
)
Section.displayName = "Section"

export { Container, Section, containerVariants, sectionVariants }
