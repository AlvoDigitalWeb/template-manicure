import React, { useState } from "react"
import { ExternalLink, X, Info } from "lucide-react"
import { Text } from "./ui/Typography"

export const TemplateBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary border-b border-accent/20 py-3 relative z-[60] overflow-hidden group">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 left-1/4 w-64 h-full bg-accent/5 blur-3xl pointer-events-none transition-transform duration-[3s] group-hover:translate-x-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="bg-accent/10 p-1.5 rounded-full">
            <Info size={16} className="text-accent" />
          </div>
          <Text size="xs" color="secondary" className="font-medium tracking-wide">
            Este site é apenas um <span className="text-accent font-bold">TEMPLATE</span> e pode ser adquirido através do site{" "}
            <a 
              href="https://alvodigitalweb.pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-bold underline underline-offset-4 hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              alvodigitalweb.pt <ExternalLink size={12} />
            </a>
          </Text>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="flex items-center gap-2 bg-accent text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
        >
          <span>OK</span>
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
