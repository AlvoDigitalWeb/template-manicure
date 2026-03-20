import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { MessageCircle } from "lucide-react"
import { cn } from "../../lib/utils"

const cardVariants = cva(
  "rounded-lg overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-surface border border-border shadow-sm",
        outline: "bg-transparent border border-border",
        ghost: "bg-transparent",
        accent: "bg-accent/10 border border-accent/20",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-md",
        glow: "hover:border-accent/40 hover:shadow-accent/10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: "lift",
    },
  }
)

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>>(
  ({ className, variant, padding, hover, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, padding, hover, className }))} {...props} />
  )
)
Card.displayName = "Card"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
}

const WhatsAppButton = ({ phoneNumber, message, className }: WhatsAppButtonProps) => {
  const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 active:scale-95 group",
        className
      )}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all bg-white text-primary text-sm font-medium py-2 px-4 rounded-lg shadow-md whitespace-nowrap">
        Agende pelo WhatsApp
      </span>
    </a>
  )
}

export { Card, WhatsAppButton, cardVariants }
