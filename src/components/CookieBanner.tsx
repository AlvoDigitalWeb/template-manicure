import { Link } from "react-router"
import { Text } from "./ui/Typography"
import { Button } from "./ui/Button"
import { useCookies } from "../lib/cookies"
import { Cookie, Settings } from "lucide-react"
import { cn } from "../lib/utils"
import { useState, useEffect } from "react"

export const CookieBanner: React.FC = () => {
  const { acceptCookies, rejectCookies, showBanner, setIsModalOpen } = useCookies()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (showBanner) {
      // Pequeno delay para uma sensação de prémio
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [showBanner])

  if (!isVisible && !showBanner) return null

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-6 right-6 z-[90] transition-all duration-700 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-surface/90 backdrop-blur-xl border border-white/50 shadow-[0_15px_60px_rgba(0,0,0,0.12)] rounded-[2.5rem] overflow-hidden p-8 md:p-10 max-w-5xl mx-auto ring-1 ring-black/[0.03]">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="bg-accent/15 p-4 rounded-3xl hidden lg:block shadow-inner ring-1 ring-accent/10">
            <Cookie className="text-accent" size={32} />
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <Cookie className="text-accent block lg:hidden" size={24} />
              <Text weight="bold" size="xl" className="text-luxury tracking-tight leading-none">
                Valorizamos a sua privacidade
              </Text>
            </div>
            <Text size="sm" color="muted" className="leading-relaxed opacity-90 max-w-2xl">
              Utilizamos cookies para personalizar a sua navegação e analisar o nosso tráfego. 
              Ao continuar, aceita a nossa <Link to="/cookies" className="text-accent font-bold hover:underline decoration-2">Política de Cookies</Link> e <Link to="/privacy" className="text-accent font-bold hover:underline decoration-2">Política de Privacidade</Link>.
            </Text>
            
            {/* Link terciário para Gerir Preferências (Desktop Inline) */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-primary/40 hover:text-accent transition-all duration-300 group"
            >
               <Settings size={14} className="group-hover:rotate-45 transition-transform" /> 
               <span>Personalizar Escolhas</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full md:w-auto min-w-[220px]">
            <Button 
                variant="primary" 
                size="sm" 
                className="w-full bg-primary text-secondary hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10 h-14 text-sm font-bold order-1" 
                onClick={acceptCookies}
                radius="full"
            >
              Aceitar Todos
            </Button>
            
            <div className="flex gap-3 w-full order-2 sm:order-2 lg:order-2">
               <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/10 text-primary/60 hover:bg-primary/5 hover:text-primary transition-all h-12 text-xs font-bold" 
                  onClick={rejectCookies}
                  radius="full"
               >
                 Apenas Essenciais
               </Button>
               
               {/* Gerir Preferências (Mobile/Tablets dentro do grupo de botões) */}
               <Button 
                  variant="outline"
                  size="sm"
                  className="lg:hidden h-12 w-12 flex items-center justify-center border-primary/10 text-primary/60 hover:text-accent p-0"
                  onClick={() => setIsModalOpen(true)}
                  radius="full"
                  title="Gerir Preferências"
               >
                  <Settings size={18} />
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
