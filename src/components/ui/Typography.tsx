import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const textVariants = cva("leading-relaxed block w-full", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
      false: "not-italic",
    },
    color: {
      default: "text-primary",
      muted: "text-primary/60",
      accent: "text-accent",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    align: "left",
    italic: false,
    color: "default",
  },
})

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, align, italic, color, as: Component = "p", ...props }, ref) => {
    const Tag = Component as any
    return (
      <Tag
        ref={ref}
        className={cn(textVariants({ size, weight, align, italic, color, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

const headingVariants = cva("font-serif tracking-normal leading-[1.1] block w-full", {
  variants: {
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg lg:text-xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-primary",
      accent: "text-accent",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    size: "h2",
    weight: "medium",
    align: "left",
    color: "accent",
  },
})

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, align, color, as: Component, ...props }, ref) => {
    const Tag = (Component || size || "h2") as any
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ size, weight, align, color, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Text, Heading, textVariants, headingVariants }
